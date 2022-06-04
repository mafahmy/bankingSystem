import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: "Mahmoud",
            email: "Mahmoud@gmail.com",
            balance: 2100000,
            password: bcrypt.hashAsync("Mah1234", 8),
            isAdmin: true,
            isLogged: false,
            status: "active",


        },
        {
            name: "amr",
            email: "amr@gmail.com",
            balance: 2100000,
            password: bcrypt.hashAsync("amr1234", 8),
            isAdmin: false,
            isLogged: false,
            status: "active",


        },
        {
            name: "ali",
            email: "ali@gmail.com",
            balance: 2100000,
            password: bcrypt.hashAsync("ali1234", 8),
            isAdmin: false,
            isLogged: false,
            status: "active",


        },
        
    ]
}