// Script no optimizado que realiza múltiples solicitudes al servidor
const fetchData = async () => {
    const endpoints = ["/data1", "/data2", "/data3"];
    for (let endpoint of endpoints) {
        const response = await fetch(endpoint); // Realiza una solicitud por cada recurso
        const data = await response.json();
        console.log(data); // Manejo ineficiente de datos
    }
};
fetchData();
