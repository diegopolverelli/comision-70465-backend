"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_router_1 = require("./routes/products.router");
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/products", products_router_1.router);
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
});
app.get('/saludo', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('Hola...!!!');
});
app.get('/users', (req, res) => {
    let usuarios = [
        { id: 1, nombre: "Luciana", email: "luciana@test.com", password: "123", rol: "user" },
        { id: 2, nombre: "Juan", email: "juan@test.com", password: "123", rol: "user" },
        { id: 3, nombre: "Romina", email: "romina@test.com", password: "123", rol: "admin" },
    ];
    // usuarios.push({
    //     color:"red"
    // })
    // usuarios=100
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ usuarios });
});
const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
