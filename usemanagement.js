const bcrypt = require('bcrypt');

// Función para agregar un usuario con cifrado de contraseña
function addUser(name, email, password) {
    if (!name || !email || !password) {
        console.error("All fields are required!");
        return;
    }
    const hashedPassword = bcrypt.hashSync(password, 10); 
    const user = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword
    };
    users.push(user);
    return user;
}


function loginUser(email, password) {
    const user = users.find(user => user.email === email);
    if (!user) {
        console.log("Invalid credentials!");
        return;
    }
    if (bcrypt.compareSync(password, user.password)) { 
        console.log("Login successful!");
    } else {
        console.log("Invalid credentials!");
    }
}
