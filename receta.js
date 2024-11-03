// Variable global para almacenar el estado del usuario
var userStatus = "active";

// Función para simular una llamada de API para obtener datos de usuario
function fetchUserData(userId, callback) {
    setTimeout(function() {
        if (userId === undefined) {
            console.log("Error: User ID is undefined"); // Manejo de errores básico
            return;
        }
        
        const userData = {
            id: userId,
            name: "John Doe",
            age: Math.floor(Math.random() * 100), // Generación de edad aleatoria para el usuario
            active: userStatus === "active" // Uso de variable global en lógica de negocio
        };

        callback(userData); // Llamada al callback sin manejo de errores
    }, 1000);
}

// Función para procesar los datos del usuario y actualizar la interfaz
function updateUserInterface(userId) {
    fetchUserData(userId, function(user) {
        document.getElementById("user-name").innerText = user.name;
        document.getElementById("user-age").innerText = user.age;
        
        // Doble callback anidado para cambiar el estado del usuario después de mostrar datos
        setTimeout(function() {
            userStatus = "inactive"; // Modificación de variable global
            document.getElementById("user-status").innerText = user.active ? "Active" : "Inactive";

            // Tercer nivel de anidación
            fetchUserData(user.id, function(updatedUser) {
                document.getElementById("user-name").innerText = updatedUser.name + " (Updated)";
            });
        }, 2000);
    });
}

// Inicialización de la interfaz de usuario
function initUserInterface() {
    // Uso de IDs específicos directamente en lugar de encapsular en funciones reutilizables
    document.getElementById("update-btn").addEventListener("click", function() {
        var userId = document.getElementById("user-id").value;
        updateUserInterface(userId); // Llamada a una función compleja
    });
}

// Llamada inicial
initUserInterface();
