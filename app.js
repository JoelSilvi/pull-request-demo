/*
    app.js

    Esta aplicación imprime los nombres de los colaboradores que se meten al repositorio en Github y abren un pull request
*/

const colaboradores = [
    {nombre: "Joel Aguilar", twitter: "@djoelalexis"},
    {nombre: "Jorge Zuñiga", twitter: "@Jorge"},
    {nombre: "Rosa Silví", twitter: "@Rosasilvi"},
    {nombre: "Joel Aguilar", twitter: "@djoelalexis"},
    {nombre: "Joel Aguilar", twitter: "@djoelalexis"},
    {nombre: "Joel Aguilar", twitter: "@djoelalexis"},
    {nombre: "Joel Aguilar", twitter: "@djoelalexis"},
    {nombre: "Joel Aguilar", twitter: "@djoelalexis"},
    {nombre: "Joel Aguilar", twitter: "@djoelalexis"}
];

console.log('Esta es la lista de colaboradores en este proyecto');
colaboradores.forEach(colaborador =>{
    console.log(`${colaborador.nombre} - ${colaborador.twitter}`);
});
