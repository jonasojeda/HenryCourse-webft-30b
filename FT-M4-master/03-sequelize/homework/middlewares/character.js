const { Router } = require('express');
const { Op, Character, Role } = require('../db');
const router = Router();


router.post('/', async(req,res)=>{

    console.log("Llergue")

    const{code,name,age,race,hp,mana,date_added}=req.body;

    if(!code || !name || !hp || !mana){
        return res.status(404).send("Falta enviar datos obligatorios")
    }

    try {
        //creacion del objeto
        const character={code,
            name,
            age,
            race,
            hp,
            mana,
            date_added
        }
        //persistencia en la base de datos
        const newCharacter = await Character.create(character)

        return res.status(201).json(character)
    } catch (error) {
        res.status(404).send("Error en alguno de los datos previstos")
    }
})

router.get('/', async(req,res)=>{
    const {race} = req.query

    try {
        if(!race){
            const characters = await Character.findAll();
            return res.status(200).send(characters)
        }else{
            const character = await Character.findAll({where:{race:race}});
            return res.status(200).send(character)
        }
    } catch (error) {
        return res.status(200).send(error);
        
    }
    
} )

module.exports = router;