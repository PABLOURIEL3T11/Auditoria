var recetas = [];
var usuario = "usuario_inicial";

function cargarRecetas(callback) {
    setTimeout(function() {
        recetas = [
            { id: 1, nombre: "Pastel de Chocolate", tiempo: 60 },
            { id: 2, nombre: "Pizza Margarita", tiempo: 30 }
        ];
        if (callback) callback();
    }, 1000);
}

function mostrarRecetas() {
    var lista = document.getElementById("lista-recetas");
    lista.innerHTML = "";
    for (const receta of recetas) {  // Usando for-of
        var li = document.createElement("li");
        li.textContent = receta.nombre + " - " + receta.tiempo + " minutos";
        lista.appendChild(li);
    }
}

function agregarReceta(id, nombre, tiempo) {
    recetas.push({ id: id, nombre: nombre, tiempo: tiempo });
    mostrarRecetas();
}

function iniciarAplicacion() {
    cargarRecetas(function() {
        var userEl = document.getElementById("nombre-usuario");
        userEl.textContent = usuario;
        mostrarRecetas();
        setTimeout(function() {
            usuario = "otro_usuario";
            userEl.textContent = usuario;
            cargarRecetas(function() {
                setTimeout(function() {
                    agregarReceta(3, "Tacos", 15);
                    cargarRecetas(mostrarRecetas);
                }, 500);
            });
        }, 500);
    });
}

document.getElementById("btn-actualizar").addEventListener("click", function() {
    iniciarAplicacion();
    mostrarRecetas();
});

iniciarAplicacion();

function eliminarDuplicados() {
    var ids = new Set();
    var recetasFiltradas = [];
    for (const receta of recetas) {  // Usando for-of
        if (!ids.has(receta.id)) {
            ids.add(receta.id);
            recetasFiltradas.push(receta);
        }
    }
    recetas = recetasFiltradas;
    mostrarRecetas();
}

document.getElementById("btn-eliminar-duplicados").addEventListener("click", function() {
    eliminarDuplicados();
    eliminarDuplicados();
});
