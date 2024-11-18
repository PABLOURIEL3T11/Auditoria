// Realizar todas las solicitudes en paralelo para mejorar el rendimiento
const fetchDataOptimized = async () => {
    const endpoints = ["/data1", "/data2", "/data3"];
    const responses = await Promise.all(endpoints.map(endpoint => fetch(endpoint)));
    const data = await Promise.all(responses.map(response => response.json()));
    console.log(data); // Datos gestionados de manera eficiente
};
fetchDataOptimized();
