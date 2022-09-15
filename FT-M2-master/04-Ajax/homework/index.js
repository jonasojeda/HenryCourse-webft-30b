$('.boton').click(function(){

    $.get('http://localhost:5000/amigos'),function(data){
        var lista = document.getElementById('lista');
        var amigo = document.createElement('li');
        amigo.name =  
    }
})