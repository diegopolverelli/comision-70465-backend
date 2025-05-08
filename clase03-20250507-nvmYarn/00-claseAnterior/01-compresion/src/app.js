import express from 'express';
import handlebars from 'express-handlebars'
import compress from "express-compression"
const PORT=3000;

const app=express();

app.use(compress())
// app.use(compress({brotli:{enabled:true}}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')


app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/texto1',(req,res)=>{

    let texto="Texto muuuuuuuuuuuuuy largo...".repeat(50_000)
    let resultado=texto

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(resultado);
})

app.get('/heroes2',(req,res)=>{

    res.render("prueba")
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
