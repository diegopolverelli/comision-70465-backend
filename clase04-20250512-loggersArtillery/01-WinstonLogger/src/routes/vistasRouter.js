import { Router } from 'express';
import HeroesManager from '../manager/HeroesManager.js'
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{
    

    res.status(200).render('home')
})

router.get('/heroes',(req,res)=>{
    req.logger.info("Ejecuto la vista heroes")

    let heroes
    try {
        heroes=heroesManager.getHeroes()
    } catch (error) {
        console.log(`Error al leer heroes: ${error.message}`)        
    }

    res.status(200).render('heroes', {
        heroes
    })
})