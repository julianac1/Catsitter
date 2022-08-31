document.addEventListener('DOMContentLoaded', () => {
    console.log('El docuento se ha cargado');
});


//nombre usuario + email = innerHTML 
const formulario = document.querySelector('#formulario');

const enviarFormulario = (event) =>{
    event.preventDefault();
    console.log(event.target.inputNombre3.value,
    event.target.inputEmail3.value
    );
    mensajeCotizacion.innerHTML = `
    <div>
        <h4> Enviaremos la cotización a ${event.target.inputNombre3.value} al correo electronico: ${event.target.inputEmail3.value} dentro de 24hrs</h4>
    </div>`
};

formulario.addEventListener('submit',enviarFormulario);



//Cotizacion de noches, gatos y valor total em innerHTML

const cotizacion = (event) => {

    //cotizacion noches
    event.preventDefault();
    console.log(event.target.inputNoches3.value);
    let totalNoche = sumanoches(event.target.inputNoches3.value);
    totalNoches.innerHTML = `
    <div>
        <h4> El total por las noches es: U$${totalNoche}  </h4>
    </div>`;

    //cotizacion cantidad gatos
    console.log(event.target.inputGatos3.value);
    let totalgatos = sumagatos (event.target.inputGatos3.value);
    totalGatos.innerHTML = `
    <div>
        <h4> El total por la cantidad de gatos es: U$${totalgatos} </h4>
    </div>`

    //cotizacion final = noches + gatos
    let totalFinal = totalNoche + totalgatos;
    valorFinal.innerHTML = `
    <div>
        <h4> El valor total a pagar es :U$${totalFinal} </h4>
    </div>`;

    //Aplicar 20% de descuento sobre el total al usar el codigo OFF20
    console.log(event.target.inputDescuento3.value);
    calcularDescuento (event.target.inputDescuento3.value);
    
    
};

function calcularDescuento () {
    if (event.target.inputDescuento3.value === "OFF20") {
        let totalconDescuento = (totalNoche + totalgatos) * 0.20;
        return valorFinal.innerHTML = `
        <div>
        <h4> El valor total a pagar con descuento es: U$${totalconDescuento} </h4>
        </div>`;
    };
    
};






function sumanoches (noches) {

    switch (noches) {
        case '1':
            console.log('Total U$10');
            return 10;

            case '2':
            console.log('Total U$20');
            return 20;

            case '3':
            console.log('Total U$30');
            return 30;

            case '4':
            console.log('Total U$40');
            return 40;

            case '5':
            console.log('Total U$50');
            return 50;

            case '6':
            console.log('Total U$60');
            return 60;

            case '7':
            console.log('Total U$70');
            return 70;
    
        default:
            alert ('Número de noches (máximo 7 noches):');
            return 'El máximo son 7 noches';
    }
    
};



function sumagatos (gatos) {

    switch (gatos) {
        case '1':
            console.log('Total U$10');
            return 10;

            case '2':
            console.log('Total U$20');
            return 20;

            case '3':
            console.log('Total U$30');
            return 30;

            case '4':
            console.log('Total U$40');
            return 40;

            
        default:
            alert('Cantidad de gatos (máximo 4 gatos):')
            return 'Cantidad de gatos (máximo 4 gatos)';
    }

};


formulario.addEventListener('submit', cotizacion);

//Precio gatos = innerHTML V1

/*const numeroGatos = (event) => {
    event.preventDefault();
    console.log(event.target.inputGatos3.value);
    let totalgatos = sumagatos (event.target.inputGatos3.value);
    totalGatos.innerHTML = `
    <div>
        <h4> El total por la cantidad de gatos es: U$${totalgatos} </h4>
    </div>`
};
*/





//SweetAlert: metodo random para sortear un descuento de 20% sobre el valor total

window.onload = ()=>{ 

    Swal.fire({
        icon: 'warning',
        title: 'Sorteo!',
        text: 'Hoy estamos sorteando un 20% de descuento sobre el valor total de tu cotización! Si sale el número 5 ganas el descuento! Quieres intentar la suerte?',
        showConfirmButton: true,
        confirmButtonText: 'Sí, quiero',
        showCancelButton: true,
        cancelButtonText: 'No, no quiero',
        
    }).then((result)=>{
        if (result.isConfirmed) {
            let sorteo1a10 = Math.ceil(Math.random () * 10);
            if (sorteo1a10 == 5) {
                Swal.fire('Hoy es tu dia de suerte! Usa el codigo OFF20');
            }else{
                Swal.fire('Quizá en la proxima oportunidad');
            }
        }
    })
    }






//Armazenar el nombre y email del usuario


function guardarDatos (nombre, email) {

    let nombreUsuario = document.getElementById ('nombre').value;
    let emailUsuario = document.getElementById ('email').value;

 //función para guardar nombre y email al apretar botón calcular

    localStorage.setItem('user', nombreUsuario);
    localStorage.setItem('email', emailUsuario);

}

formulario.addEventListener('submit', guardarDatos);






























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


