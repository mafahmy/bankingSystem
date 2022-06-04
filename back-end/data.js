import bcrypt from "bcryptjs";

 const data = {
    users: [
        {
            name: "Mahmoud",
            email: "Mahmoud@gmail.com",
            balance: 2100000,
            password: bcrypt.hashSync("Mah1234", 8),
            isAdmin: true,
            isLogged: false,
            status: "active",


        },
        {
            name: "amr",
            email: "amr@gmail.com",
            balance: 2100000,
            password: bcrypt.hashSync("amr1234", 8),
            isAdmin: false,
            isLogged: false,
            status: "active",


        },
        {
            name: "ali",
            email: "ali@gmail.com",
            balance: 2100000,
            password: bcrypt.hashSync("ali1234", 8),
            isAdmin: false,
            isLogged: false,
            status: "active",


        },
        
    ]
}
export default data;