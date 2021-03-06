import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES,
        }
    );
};
export const isAuth = (req, res, next) => {
    const token = req.cookies.jwtCook;
    if (token) {
       jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
           if (err) {
               res.status(401).send({ message: "Invalid Token" });
           } else {
               req.user = decode;
               next();
           }
       }) 
    } else {
        res.status(401).send({ message: "No Token" });
    }


}
export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    }else {
        res.status(401).send({ message: "Invalid Admin Token" });
    }
};