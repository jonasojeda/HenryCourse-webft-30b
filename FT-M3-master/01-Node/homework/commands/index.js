let fs = require('fs');
const { request } = require('http');

module.exports = {
    echo:function(args,print){
        print(args.join(" "));
    },
    date: function(args,print){
        print(Date());
    },
    ls: function(args, print){
        fs.readdir('.',function(err,file){
            if(err) throw err;
            print(file.join('\n'))
            //console.log(file)

        })
    },
    pwd:function(args,print){
        //print working directory
        //imprimir directorio sobre el cual estoy trabajando
        print(process.cwd());
    },
    cat: function(args,print){
        //args <= el nombre de mi archivo
        fs.readFile(args[0], 'utf8', function(err,data){
            if(err) throw err;
            print(data);
        })
    },
    head: function(args,print){
        fs.readFile(args[0], 'utf8', function(err,data){
            if(err) throw err;
            let lines = 10;
            if(args[1]) lines = args[1]
            print(data.split('\n').splice(0,args[1]).join('\n'));

        })
    },
    tail: function(args, print){
        fs.readFile(args[0], 'utf8', function(err,data){
            if(err) throw err;
            print(data.split('\n').splice(-args[1]).join('\n'))
        })

    },
    curl: function(args, print){
        request(args[0]), function(err,data){
            if(err) throw err;
            print(data.body);
        }
    }

}