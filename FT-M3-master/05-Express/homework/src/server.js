// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

//servet.METHOD(URL, (req,res,next) =>{})
// IMPORTANTE! SI VAMOS A TRABAJAR CON req.body, ES DECIR VAMOS A RECIBIR INFORMACION 
//POR BODY, NO NOS PODEMOS OLVIDAR DE ACTIVAR EL MIDDLEWAARE de express.json()! LINE 12
const PATH = '/posts'
let id=1
// params:
// posts/:id/:author/:title => /posts/hola/martina/lahistoria de martina

//query:
// /posts => /posts/?id=hola&author=martina
    // let{id,author,title} = req.query 
    // ejem: 
    // /search/?=req.query;
        // let {q} = req.query;
        // if(q) res.send (la informacion de la ciudad q)
        // else res.send(la informacion de toda la api)

// TODO: your code to handle requests
server.post(PATH,(req,res)=>{
    const{author,title, contents}= req.body;
    //let author = req.body.author
    //let title = req.body.title
    //let contents = req.body.contents
    
    if(!author || !title || !contents){
        return res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"});
    }

    const post ={
        author, title, contents, id:id++
    };

    posts.push(post);

    res.status(200).json(post);
    
})

server.post(`${PATH}/author/:author`, (req,res)=>{
    //req.param -> es un OBJETO
    //let author = req.parama.author

    let {author}=req.params;
    let {title,contents} = req.body;
    //let title = req.body.title
    //let contents = req.body.contents

    if(!author || !title || !contents){
        return res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"});
    }

    const post ={
        author, title, contents, id:id++
    };

    posts.push(post);

    res.status(200).json(post);

});

server.get(PATH, (req,res) =>{
    let {term} = req.query; // term es una propiedad del objeto req.query
    //si term no vino definido por query, term = undefined
    if(term){
        const term_posts= posts.filter(
            (p)=> p.title.includes(term) || p.contents.includes(term)
            );
        return res.json(term_posts);
}
res.json(posts) // por default esto manda un status 200

})

server.get(`${PATH}/:author`, (req, res) => {
    let {author} = req.params;
    
    //devolver un nuevo arreglop con las coincidencias de autor
    const post_author = posts.filter(p => p.author === author);

    if(post_author.length> 0){
        return res.json(post_author)
    }else{
        return res.status(STATUS_USER_ERROR)
        .json({error: "No existe ningun post del autor indicado"});
    }
    
})

//formatos
//query -> /posts?key=value&key2=value&key3=value&
server.get(`${PATH}/:author/:title`, (req,res)=>{
    let {author, title} = req.params; 

    const new_posts = posts.filter(p => p.author === author && p.title === title);
    if(new_posts.length > 0){
        return res.json(new_posts);
    }else{
        return res.status(STATUS_USER_ERROR)
        .json({error: "No existe ningun post con dicho titulo y autor indicado"});
    }
})

server.put(PATH, (req,res)=>{
    let{id,title,contents}=req.body
    if(id && title && contents){

        console.log(id,title,contents)
        let post = posts.find(p=> p.id === parseInt(id));
        if(post){
            post.title = title;
            post.contents = contents;
            res.json(post);
        }else{
            return res.status(STATUS_USER_ERROR)
            .json({error: "No se encuentra el ID necesario"});
        }

    }else{
        return res.status(STATUS_USER_ERROR)
        .json({error: "No se recibieron los parámetros necesarios para modificar el Post"});
    }

    res.send('done')
});

server.delete(PATH, (req,res)=>{
    let{id}=req.body;
    const post= posts.find(p=> p.id===parseInt(id))

    if(!id || !post){
        res
        .status(STATUS_USER_ERROR)
        .json({error: "Mensaje de error"})
    }

    posts = posts.filter(p=> p.id !== parseInt(id));
    return res.json({"success": true})
});

server.delete(`/author`, (req,res)=>{
    let {author}= req.body
    const author_found = posts.find(p=>p.author === author);
    if(!author || !author_found ){
        return res.status(STATUS_USER_ERROR).json({error:"No existe el autor indicado"});
    }
    let delete_authors=[];
    //opcion 1
    // delete_authors = posts.filter(p=>p.author === author);
    // posts = posts.filter(p =>p.author !== author);

    //opcion 2
    posts = posts.filter(p=>{
        if(p.author != author){
            return true;
        }else{
            delete_authors.push(p);
        }
    });
    return res.json(delete_authors);
})


module.exports = { posts, server };
///////////////////////////////
////NUESTRA PROPIA API////////
/////////////////////////////
//FETCH // AXIOS
//useEffect(), actionCreator
//                   |
//                 function action(){
    //               return function(dispatch){
                //      fetch("http://localhost:3000/posts")
                //      .then(response=>response.json())
                //      .then(data=>dispatch({type:'POSTS', payload:data})  
                //  }
                //   }