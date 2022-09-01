
//Bootstrap cards con fotos y comentarios de clientes - secion clientes.html
let container = document.getElementById("clientes")

let cards = [{
    image: '../imagens/alba_y_astra_v2.jpg',
    title: 'Alba y Astra',
    descripcion: 'Alba y Astra son dos hermanas que viven junto a sus esclavos Bartolo y Sarah. Son muy perezosas y les encanta el Churu. Las cuidamos durante dos semanas mientras sus humanos viajaban a Alemania por las vacaciones de invierno. Como ambas están con sobrepeso jugamos mucho juntas con diversos juguetes que tienen.',
},
{
    image: '../imagens/don jiji.jpeg',
    title: 'Jiji',
    descripcion: 'Jiji es un gatito macho muy regalón, su juguete favorito es su osito que pueden ver en la foto. Cuidamos de Jiji cuando su humana se fue de viaje por un fin de semana largo.',
},
{
    image: '../imagens/emily.jpeg',
    title: 'Emily',
    descripcion: 'Emily es una gatita de 6 años muy regalona y mañosa. Cuidamos a Emily por un fin de semana porque que su hermana humana decidió apresurar su nacimiento sin previo aviso :).',
},
{
    image: '../imagens/flamy.jpeg',
    title: 'Flamy',
    descripcion: 'Flamy es una michi muy miedosa y no le gusta compartir con otros humanos, excepto con sus papis. En su caso, la visitábamos 2 veces al día para ponerle comida y limpiarle el arenero.',
},
{
    image: '../imagens/kiki.jpeg',
    title: 'Kiki',
    descripcion: 'Kiki es un gato muy jugueton y activo. Por ser tan activo necesita de atención durante todo el dia.',
},
{
    image: '../imagens/loba.jpeg',
    title: 'Loba',
    descripcion: 'Loba era una gatita callejera hasta que conoció su esclavo Victor, que la recojio y trato sus enfermedades. Tiene 9 años y necesita cuidados especiales.',
},
{
    image: '../imagens/manchita.jpeg',
    title: 'Manchita',
    descripcion: 'Machita es una lady. Fue criada como hija unica lo que la hizo adicta al cariño y necesita atención 24/7. Fue un placer cuidar de la Manchita!',
},
{
    image: '../imagens/milagros.jpeg',
    title: 'Milagros',
    descripcion: 'Milagros es una gata que fue resgatada de las calles de Perú y llevada a Chile junto con sus esclavos Paula y Jamón. Milagros es muy activa y por recomendación de su veternário era necesário sacarla a pasear dos vezes al díaa para gastar su energia.',
},
{
    image: '../imagens/minina.jpeg',
    title: 'Minina',
    descripcion: 'Minina es una gata muy floja, le encanta dormir en todos los rincones de la casa. No teníamos fotos de ella despierta jaja',
},
{
    image: '../imagens/Pochin.jpeg',
    title: 'Pochin',
    descripcion: 'Pochin es un gato muy independiente, y por lo mismo lo visitábamos 1 vez al día para ponerle comida y limpiar su arenero.',
},
{
    image: '../imagens/rocket.jpeg',
    title: 'Rocket',
    descripcion: 'Rocket es un gato macho muy gruñon y le gusta estar solo. Cuando sus esclavos viajan puede quedarse hasta 2 dias solo! Lo visitábamos a cada 2 dias para cambiarle el agua, ponerle comida y limpiar el arenero.',
},
{
    image: '../imagens/teddy.jpeg',
    title: 'Teddy',
    descripcion: 'Teddy es un gato muy regalón con sus papis pero con los demás no tanto. Cuando sus humanos viajan se queda muy triste y se esconde en el guardarropa de sus papis. Para dejarlo cómodo, nosotras lo visitábamos 1 vez al día para ponerle comida y agua.',
},
{
    image: '../imagens/Timmy.jpeg',
    title: 'Timmy',
    descripcion: 'Timmy es un michi senior, sus esclavos no saben su edad exacta ya que lo rescataron de la calle. A Timmy le gusta la compañía de humanos. Cuando sus papis se ausentan nosotras lo acompañamos.',
},
];

for (let i = 0; i < cards.length; i++){
    clientes.innerHTML += `
    <div id="carta"  class="card" style="width: 18rem; margin-bottom: 1rem;">
    <img src="${cards[i].image}" class="card-img-top" alt="imagen">
    <div class="card-body">
        <h5 class="card-title">${cards[i].title}</h5>
        <p class="card-text">${cards[i].descripcion}</p>
    </div>
    </div>
    `
}



/*
//fetch para mostrar fotos de gatos

function cargar() {
    fetch('https://api.thecatapi.com/v1/images/search')
         .then(response => response.json())
         .then(json => {
             console.log(json);
             json.forEach(element => {
                 document.getElementById("imagen").src = element.url;
             });
});
}
*/

