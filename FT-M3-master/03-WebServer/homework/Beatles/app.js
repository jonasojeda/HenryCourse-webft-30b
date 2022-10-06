var http = require('http');
var fs   = require('fs');
var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]

http.createServer((req,res)=>{
  // res.writeHead(200,{ 'Content-Type':'text/plain' })
  // res.end('Ejercicio Beattles')
  if(req.url === '/api'){
    res.writeHead(200,{'content-type': 'application/json'});
    res.end(JSON.stringify(beatles));
  }

  // /api/John Lennon
  // /api/Paul McCartney
  // /api/George Harrison
  // /api/Richard Starkey
  if(req.url.substring(0,5)=== '/api/' && req.url.length>5 ){
    //url = /api/ALGO
    //req.url.substring(0,5) = /api/
    //req.url.length = 9
    let findBeatle = req.url.split('/').pop(); //ALGO
    let foundBeatle = beatles.find((beatle)=> findBeatle === encodeURI(beatle.name))

    if(foundBeatle){
      res.writeHead(200,{'content-type': 'application/json'});
      res.end(JSON.stringify(foundBeatle));
    }else{
      res.writeHead(404,{'content-type':'text/plain'});
      res.end('No exites ese Beatle')
    }
  }
  if(req.url === '/'){
    res.writeHead(200, {'content-type':'text/html'});

    const index =  fs.readFileSync(`${__dirname}/index.html`); //'/index.html/'
    res.end(index)
  }

  // /Jhon Lennos
  let findBeatle = req.url.split('/').pop(); //ALGO
  let foundBeatle = beatles.find((b)=> findBeatle === encodeURI(b.name));
  console.log(foundBeatle)
  if(foundBeatle){
    let read =  fs.readFileSync(`${__dirname}/beatle.html`,'utf-8')
    read = read.replace(/{name}/g, foundBeatle.name)
    read = read.replace(/{birth}/, foundBeatle.birthdate)
    read = read.replace(/{name}/, foundBeatle.name)
    read = read.replace(/{profilePic}/, foundBeatle.profilePic)
    res.end(read)
  }else{
    res.writeHead(404, {'content-type':'text/plain'});
    res.end('No exite ese Beatle')
  }


}).listen(3000, '127.0.0.1');
