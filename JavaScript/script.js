

//mensage de bienvenida - pagina inicial

/*let bienvenida = prompt('Buscas una catsitter para tu michi? Sí o No');

function inicio (respuestaA, respuestaB){
    let entrar = "Sí";
    let salir = "No";
    if (bienvenida == entrar){
        alert ('Bienvenida(o), cuidaremos muy bien de tu michi!');
    } else if (bienvenida == salir){
        alert ("Acá amamos a los michis. Si no te gusta los gatos, te invitamos a visitar otras páginas");
    } else {
        alert ("ERROR. Debes escribir Sí o No");
        prompt('Buscas una catsitter para tu michi? Sí o No');
    }
    
};

inicio();
*/

//mensaje de bienvenida sin function
/*let bienvenida = prompt('Buscas una catsitter para tu michi? Sí o No');
let entrar = "Sí";
let salir = "No";

if (bienvenida == entrar){
    alert ('Bienvenida(o), cuidaremos muy bien de tu michi!');
} else if (bienvenida == salir){
    alert ("Acá amamos a los michis. Si no te gusta los gatos, te invitamos a visitar otras páginas");
} else {
    alert ("ERROR. Debes escribir Sí o No");
    prompt('Buscas una catsitter para tu michi? Sí o No');
}*/



//Cotizacion con prompt
let noches = prompt('1 o 2 noches');

function cotizacion (respuestaA, respuestaB){

    if (noches == 1){
        alert ('El monto a pagar es U$ 100');
    } else {
        alert ("El monto a pagar es U$ 200");
    };
    
};
cotizacion();


//cotizacion conectado con HTML - aún no funciona
/*let noches = document.getElementById ("noches").value;

function cotizacion () {
    if (noches == 1){
        alert ("El monto a pagar es U$ 100");
    } else {
        alert ("El monto a pagar es U$ 200");
    };
};

cotizacion();
*/








//Bootstrap cards con fotos y comentarios de clientes - secion clientes.html

let cards = [{
    image: 'https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-caja_0.jpg',
    title: 'Alba y Astra',
    descripcion: 'Por definir',
},
{
    image: 'https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-frotandose-piernas.jpg',
    title: 'Emily',
    descripcion: 'Por definir',
},
{
    image: 'https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-persa-bandeja.jpg',
    title: 'Milagros',
    descripcion: 'Por definir',
},
{
    image: 'https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-amasando.jpg',
    title: 'Flamy',
    descripcion: 'Por definir',
},
];

for (let i = 0; i < cards.length; i++){
    clientes.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${cards[i].image}" class="card-img-top" alt="Astra y Alba">
    <div class="card-body">
    <h5 class="card-title">${cards[i].title}</h5>
    <p class="card-text">${cards[i].descripcion}</p>
    </div>
    </div>
    `
}


