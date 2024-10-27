
let users = [];


function addUser(name, email, password) {
    if (!name || !email || !password) {
        console.error("All fields are required!");
        return;
    }
    
    const user = {
        id: users.length + 1,
        name,
        email,
        password: password 
    };
    users.push(user);
    return user;
}


function findUserById(userId) {
    return users.find(user => user.id === userId);
}


function updateUser(userId, name, email) {
    const user = findUserById(userId);
    if (!user) {
        console.log("User not found!");
        return;
    }
    user.name = name || user.name;
    user.email = email || user.email;
    console.log("User updated");
}


function deleteUser(userId) {
    const index = users.findIndex(user => user.id === userId);
    if (index === -1) {
        console.log("User not found!");
        return;
    }
    users.splice(index, 1);
    console.log("User deleted");
}

function listUsers() {
    users.forEach(user => console.log(`User ${user.id}: ${user.name}, Email: ${user.email}`));
}


function loginUser(email, password) {
    const user = users.find(user => user.email === email);
    if (!user) {
        console.log("Invalid credentials!");
        return;
    }
    if (user.password === password) {
        console.log("Login successful!");
    } else {
        console.log("Invalid credentials!");
    }
}


addUser("Alice", "alice@example.com", "password123");
addUser("Bob", "bob@example.com", "password123");
listUsers();
loginUser("alice@example.com", "password123");
updateUser(1, "Alice Updated", "alice.updated@example.com");
deleteUser(2);
