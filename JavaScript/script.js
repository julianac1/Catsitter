

//mensage de bienvenida - pagina inicial

let bienvenida = prompt('Buscas una catsitter para tu michi? Sí o No');

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
/*let noches = prompt('1 o 2 noches');

function cotizacion (respuestaA, respuestaB){

    if (noches == 1){
        alert ('El monto a pagar es U$ 100');
    } else {
        alert ("El monto a pagar es U$ 200");
    };
    
};
cotizacion();
*/

//Cotización version 2
// Cada noche U$ 10 + cada gato U$10
const noches = [1,2,3,4,5,6,7];
const gatos = [1,2,3,4];

let numeronoches = prompt('Número de noches (máximo 7 noches):');

function sumanoches () {

    switch (numeronoches) {
        case '1':
            console.log('Total U$10');
            break;

            case '2':
            console.log('Total U$20');
            break;

            case '3':
            console.log('Total U$30');
            break;

            case '4':
            console.log('Total U$40');
            break;

            case '5':
            console.log('Total U$50');
            break;

            case '6':
            console.log('Total U$60');
            break;

            case '7':
            console.log('Total U$70');
            break;
    
        default:
            alert ('Número de noches (máximo 7 noches):');
            break;
    }
    
}
sumanoches();

let numerogatos = prompt('Cantidad de gatos (máximo 4 gatos):');

function sumagatos () {

    switch (numerogatos) {
        case '1':
            console.log('Total U$10');
            break;

            case '2':
            console.log('Total U$20');
            break;

            case '3':
            console.log('Total U$30');
            break;

            case '4':
            console.log('Total U$40');
            break;

            
        default:
            alert('Cantidad de gatos (máximo 4 gatos):')
            break;
    }

}
sumagatos();


//Mostrar suma: noches + gatos









//objeto math con metodo random para sortear un descuento de 25% sobre el valor total

alert('Hoy estamos sorteando un 20% de descuento sobre el valor total de tu cotización! Si sale el número 5 ganas el descuento!');

function sorteo () {
    let sorteo1a10 = Math.ceil(Math.random () * 10);
    alert (sorteo1a10);

    if (sorteo1a10 == 5) {
        alert('Hoy es tu dia de suerte! Usa el codigo OFF5');

    }else{
        alert('Quizá en la proxima oportunidad');
    };
}

sorteo();








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


