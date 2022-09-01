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
    calcularDescuento (event.target.inputDescuento3.value, totalFinal);


};

function calcularDescuento (descuento, total) {
    if (descuento === "OFF20") {
        let totalconDescuento = total * 0.80;
        return valorFinal.innerHTML = `
        <div>
        <h5> <del>El valor total a pagar es: U$${total}</del> </h5>
        <h4> El valor total a pagar con el 20% de descuento es: U$${totalconDescuento} </h4>
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

    let nombreUsuario = document.getElementById ('inputNombre3').value;
    let emailUsuario = document.getElementById ('inputEmail3').value;

 //función para guardar nombre y email al apretar botón calcular

    localStorage.setItem('user', nombreUsuario);
    localStorage.setItem('email', emailUsuario);

}

formulario.addEventListener('submit', guardarDatos);












































