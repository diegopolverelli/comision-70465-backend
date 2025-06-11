import {Sequelize} from "sequelize"

const sequelize = new Sequelize('mysql://root:123@localhost:3306') 


// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('', 'root', '123', {
//   host: 'localhost', port: "3306",
//   dialect: 'mysql'
// });
let dbName="pruebas002"
const creaDB=async()=>{
    try {
        let sSql
        sSql=`CREATE DATABASE IF `
        sSql+=`NOT EXISTS ${dbName}`

        let resultado=await sequelize.query(sSql)
        console.log(resultado)
        console.log("DB Creada...!!!")
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

creaDB()