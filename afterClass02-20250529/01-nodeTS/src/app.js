"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PORT = 3000;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
});
app.get('/users', function (req, res) {
    var usuarios = [
        { id: 1, nombre: "Luciana", email: "luciana@test.com", password: "123", rol: "user" },
        { id: 2, nombre: "Juan", email: "juan@test.com", password: "123", rol: "user" },
        { id: 3, nombre: "Romina", email: "romina@test.com", password: "123", rol: "admin" },
    ];
    // usuarios.push({
    //     color:"red"
    // })
    // usuarios=100
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ usuarios: usuarios });
});
var server = app.listen(PORT, function () {
    console.log("Server escuchando en puerto ".concat(PORT));
});
