// userManagement.js

const users = [];

// Definición de roles
const roles = {
    ADMIN: 'admin',
    USER: 'user',
    MODERATOR: 'moderator'
};

// Clase para gestionar usuarios
class User {
    constructor(name, email, password, role) {
        this.name = name;
        this.email = email;
        this.password = password; // Almacena el hash de la contraseña en producción
        this.role = role;
    }
}

// Función para agregar un nuevo usuario
function addUser(name, email, password, role) {
    if (!name || !email || !password) {
        console.error("All fields are required!");
        return;
    }

    // Validar rol
    if (!Object.values(roles).includes(role)) {
        console.error("Invalid role specified!");
        return;
    }

    const newUser = new User(name, email, password); // En producción, hashea la contraseña
    users.push(newUser);
    console.log("User added:", newUser);
}

// Función para verificar permisos
function hasPermission(userEmail, action) {
    const user = users.find(u => u.email === userEmail);
    if (!user) {
        console.error("User not found!");
        return false;
    }

    switch (action) {
        case 'deletePost':
            return user.role === roles.ADMIN || user.role === roles.MODERATOR;
        case 'createPost':
            return user.role === roles.ADMIN || user.role === roles.USER || user.role === roles.MODERATOR;
        default:
            console.log("Action not defined!");
            return false;
    }
}

// Ejemplo de uso
addUser("Alice", "alice@example.com", "password123", roles.ADMIN);
addUser("Bob", "bob@example.com", "password456", roles.USER);

// Verificación de permisos
console.log("Alice can delete a post:", hasPermission("alice@example.com", 'deletePost')); // true
console.log("Bob can delete a post:", hasPermission("bob@example.com", 'deletePost')); // false
