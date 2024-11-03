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
    for (var i = 0; i < recetas.length; i++) {
        var li = document.createElement("li");
        li.textContent = recetas[i].nombre + " - " + recetas[i].tiempo + " minutos";
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
    var ids = [];
    var recetasFiltradas = [];
    for (var i = 0; i < recetas.length; i++) {
        if (ids.indexOf(recetas[i].id) === -1) {
            ids.push(recetas[i].id);
            recetasFiltradas.push(recetas[i]);
        }
    }
    recetas = recetasFiltradas;
    mostrarRecetas();
}

document.getElementById("btn-eliminar-duplicados").addEventListener("click", function() {
    eliminarDuplicados();
    eliminarDuplicados();
});
