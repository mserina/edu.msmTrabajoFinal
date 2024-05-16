/**
 * 
 */

//variable que contiene la memoria para guardar los datos del carrito
const memoria = window.localStorage;

//funcion que se ejecuta cuando se reinicia la pagina se reivsa producto por producto actualizando la cantidad del producto, su precio y el total del carrito
window.onload = function() {
    for (let i = 1; i <= 3; i++) {
        let itemId = "producto" + i;
        
        //Carga las cantidades de los productos
        let cantidad = localStorage.getItem(itemId); 
        if (cantidad !== null) {
            document.getElementById(itemId).innerText = cantidad; 
        }
        
        //Cargar precio de los productos 
        let itemCompra = "productoPrecio" + i;
		let precioArticulo = localStorage.getItem(itemCompra); 
		if (precioArticulo !== null) {
            document.getElementById(itemCompra).innerText = precioArticulo; 
        }

    }
   		//Cargar el precio total del carrito
        let carritoItem = "precioTotalCarrito";
        let precioCarrito = localStorage.getItem(carritoItem); 
        if (precioCarrito !== null) {
            document.getElementById(carritoItem).innerText = precioCarrito; 
        }
}

//Esta funcion permite incrementar la cantidad de los productos, afectando el precio del mismo y el total de precio del carrito, para luego guardarlo en memoria
function increment(itemId, itemCompra, precioBase, precioCarrito) {
    
    //Incrementa cantidad del producto
    let cantidadElement = document.getElementById(itemId);
    let cantidad = Number(cantidadElement.innerText);
    cantidad++;
	cantidadElement.innerHTML = cantidad;
	
	localStorage.setItem(itemId, cantidad);

	//Incrementa precio del producto
	let precioElement = document.getElementById(itemCompra);
    let precioTotalProducto = cantidad * precioBase;
    precioElement.innerHTML = precioTotalProducto;
    
    localStorage.setItem(itemCompra, precioTotalProducto);
    
    //Incrementa precio total del carrito del producto
    let precioCarritoElement = document.getElementById(precioCarrito);
    let precioCarritoValor = Number(precioCarritoElement.innerText);
	precioTotal = precioCarritoValor;
    let precioTotalCarrito = precioTotal + precioBase;
    precioCarritoElement.innerHTML = precioTotalCarrito;
    
    localStorage.setItem(precioCarrito, precioTotalCarrito);

}

//Esta funcion permite eliminar la cantidad de un producto, al igual que la funcion de incrementar, este afecta al precio del producto y al total del carrito y lo guarda en memoria
function decrement(itemId, itemCompra, precioBase, precioCarrito) {
    // Adquirir el valor de la cantidad y el precioCarrito
    let cantidadElement = document.getElementById(itemId);
    let cantidad = Number(cantidadElement.innerText);
	let precioCarritoElement = document.getElementById(precioCarrito);
    let precioCarritoValor = Number(precioCarritoElement.innerText);
    
    // Verificar que el precio total no sea menor que el precio base
   if (precioCarritoValor - precioBase < 41) {
        return;
    }
    
    if(cantidadElement.innerHTML == 1 && precioCarritoValor != 41){
		return;
	}
    
    let precioTotalCarrito = precioCarritoValor - precioBase;
    precioCarritoElement.innerHTML = precioTotalCarrito;
    
    localStorage.setItem(precioCarrito, precioTotalCarrito);

    cantidad--;

    // Verificar que la cantidad mínima sea 1
    if (cantidad < 1) {
        cantidad = 1;
    }
    cantidadElement.innerHTML = cantidad;
	
	localStorage.setItem(itemId, cantidad);


    // Resto de tu lógica para actualizar precios, etc.
    let precioElement = document.getElementById(itemCompra);
    let precioTotalProducto = cantidad * precioBase;
    precioElement.innerHTML = precioTotalProducto;
    
    localStorage.setItem(itemCompra, precioTotalProducto);
}

	//Elimina toda las cantidades del producto dejandolo en 1 cantidad
    function limpiarArticulo(itemId, itemCompra, precioBase, precioCarrito){
		
		let cantidadElement = document.getElementById(itemId);
    	let cantidad = Number(cantidadElement.innerText);
    	cantidadElement.innerHTML = 1;
    	
    	let precioElement = document.getElementById(itemCompra);
    	let precioProducto = Number(precioElement.innerHTML);
    	precioElement.innerHTML = precioBase;
    	
    	let precioCarritoElement = document.getElementById(precioCarrito);
    	let precioCarritoValor = Number(precioCarritoElement.innerText);
    	let precioARestar = precioProducto - precioBase;
    	let precioTotal = precioARestar - precioCarritoValor;
    	if(precioTotal < 41){
			
			precioTotal = precioCarritoValor - precioARestar;
			
			if(precioCarritoValor == 41){
				
				precioTotal = precioCarritoValor;
			}
		}
    	precioCarritoElement.innerHTML = precioTotal;
    
		localStorage.setItem(itemId, 1);
		localStorage.setItem(itemCompra, precioBase);
		localStorage.setItem(precioCarrito, precioTotal);
	}
        
    //Limpia la memoria de forma que no se guarde los datos al actualizar     
    function limpiarCarrito()
    {
		memoria.clear();
	}

   
    




function validadorCampos(){
	
	//Ejecuta toda las funciones de validar los distintos campos del formulario, cada uno devuelve true o false
	//Si devuelve true, limpia el carrito y sale de la funcion
	if((hola() == true) && (apellidos() == true) && (gmail() == true) && (telefono() == true))
	{
		
		 limpiarCarrito();
		return true;	
	}
	else{
		return false;
	}
}

function hola(){
	alert("hola")
	let nombre = document.getElementById('nombre');
	let errorNombre = document.getElementById('error-nombre');
    var valor = nombre.value;
    let resultado = "";

    // Validar si el nombre es un número
    if(!isNaN(valor) || valor.length > 10){
        resultado = false;
        errorNombre.style.display = 'block';
        errorNombre.style.borderColor = 'red';
        return false;
    } else {
        resultado = true;
        errorNombre.style.display = 'none';
        errorNombre.style.borderColor = ''; 
        alert("Introdujo bien el nombre");
        return true;
    }
}

function apellidos(){
	alert("apellidos")
	let apellido = document.getElementById('apellidos');
	let errorApellidos = document.getElementById('error-apellidos');
    var valor = apellido.value;
    let resultado = "";

    // Validar si el nombre es un número
    if(!isNaN(valor) || valor.length > 20){
        resultado = false;
        errorApellidos.style.display = 'block';
        errorApellidos.style.borderColor = 'red';
        return false;
    } else {
        resultado = true;
        errorApellidos.style.display = 'none';
        errorApellidos.style.borderColor = ''; 
        alert("Introdujo bien el apellido");
        return true;
    }
}

function gmail(){
	alert("gmail")
	let gmail = document.getElementById('gmail');
	let errorGmail = document.getElementById('error-gmail');
    var valor = gmail.value;
    let resultado = "";

    // Validar si el nombre es un número
    if(!isNaN(valor) || valor.length > 50 || !valor.endsWith("@gmail.com")){
        resultado = false;
        errorGmail.style.display = 'block';
        errorGmail.style.borderColor = 'red';
        return false;
    } else {
        resultado = true;
        errorGmail.style.display = 'none';
        errorGmail.style.borderColor = ''; 
        alert("Introdujo bien el gmail");
        return true;
    }
}


function telefono(){
	alert("telefono")
	let telefono = document.getElementById('telefono');
	let errorTelefono = document.getElementById('error-telefono');
    var valor = telefono.value;
    let resultado = "";

    // Validar si el nombre es un número
    if(isNaN(valor) || valor.length > 9){
        resultado = false;
        errorTelefono.style.display = 'block';
        errorTelefono.style.borderColor = 'red';
        return false;
    } else {
        resultado = true;
        errorTelefono.style.display = 'none';
        errorTelefono.style.borderColor = ''; 
        alert("Introdujo bien el telefono");
        return true;
    }
}





