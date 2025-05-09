import passport from "passport"
import local from "passport-local"
import passportJWT from "passport-jwt"
import { generaHash, validaPass } from "../utils/utils.js"
import { usuariosModelo } from "../DAO/models/user.js"
import { config } from "./config.js"

export const inicializarPassport=()=>{
    // paso 1
    passport.use("registro", 
        new local.Strategy(
            {
                usernameField: "email", 
                passReqToCallback: true
            },
            async (req, username, password, done)=>{
                try {
                    let {nombre, apellido}=req.body
                    if(!nombre || !apellido){
                        return done(null, false)
                    }
                    password=generaHash(password)
                    let nuevoUsuario=await usuariosModelo.create({nombre, apellido, email: username, password})
                    return done(null, nuevoUsuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("login", 
        new local.Strategy(
            {
                usernameField: "email"
            }, 
            async(username, password, done)=>{
                try {
                    let usuario=await usuariosModelo.findOne({email:username}).lean()
                    if(!usuario){
                        return done(null, false)
                    }
                    if(!validaPass(password, usuario.password)){
                        return done(null, false)
                    }
                    return done(null, usuario)
                } catch (error) {
                    return done(NativeError)
                }
            }
        )
    )

    passport.use("current", 
        new passportJWT.Strategy(
            {
                secretOrKey: config.SECRET, 
                jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
            }, 
            async(usuario, done)=>{
                try {
                    return done(null, usuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )


    // si utilizara sessions entonces paso 1'
    // passport.serializeUser()
    // passport.deserializeUser()
}