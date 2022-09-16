/*Funcion que cuando haga click en el boton se muestre la lista de amigos
traidas del server*/

$('#boton').click(function(){
    $("#lista").empty();
    $.get('http://localhost:5000/amigos',data =>{
        for(let i=0; i<data.length; i++){
           let el=document.createElement("li");
           el.innerHTML=data[i].name;
           let lista=document.getElementById("lista");
           lista.append(el); 
        }
    })
})

/*
Un campo de busqueda (input) que reciba el id de un amigo y un boton 
"buscar". Al hacer click en el boton, buscaremos el amigo que tiene ese 
id en el servidor, y lo mostraremos en el DOM. Para conseguir los datos de
un amigo en particular del servidor, puedes hacer un GET nuestro servidor 
concatenando el id del amigo que queremos encontrar,
 Por ej: http://localhost:5000/amigos/1 le pediria al servidor el amigo con id = 1
 */

 $('#search').click(function(){
    console.log("Hola soy el search");
    let input= document.getElementById("input")
    if(!isNaN(input.value)){//una vez ingresado el valor recorre en busca del id que coincida
        $.get('http://localhost:5000/amigos',data =>{

            for(let i=0; i<data.length; i++){
                if(input.value == data[i].id){
                    let span = document.getElementById("amigo");
                    span.innerHTML=`${i+1} ${data[i].name}`;
                    ubicar.append(span);
                }
            }
        })
    }else{//En caso de que el dato ingresado no sea un numero
        alert("El dato ingresado no es un numero");
    }

 })

 /*Un input que reciba el id de un amigo y un boton "borrar". 
Al hacer click en el boton, borraremos el amigo del servidor haciendo 
un DELETE a nuestro servidor, concatenando el id del usuario que queremos borrar. 
Por ej: http://localhost:5000/amigos/2 le pediria al servidor el amigo con id = 2
*/

$("#delete".click(() =>{


    $.ajax({
        url: 'http://localhost:5000/amigos',
        type: 'DELETE',
        success: function(result) {
            // Do something with the result
        }
    });
}))


/*let deleteFriends= function(){
    let id = (document.getElementById("inputDelete"));
    if(id.value){
        // URL, type, success
        $.ajax({
            url:`http://localhost:5000/amigos/${id.value}`,
            type: 'DELETE',
            succes: function(){
                $('#success').text('Tu amigo fue eliminado')
                //$('#inputDelete'.id)limpieza
            }
        })
    }else{

    }
}

$('#delet').click(deleteFriends){

}*/
