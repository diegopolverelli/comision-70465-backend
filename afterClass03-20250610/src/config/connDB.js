import { Sequelize } from "sequelize"

// const sequelize = new Sequelize('mysql://root:123@localhost:3306/pruebas001') 


// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize('pruebas001', 'root', '123', {
    host: 'localhost', port: "3306",
    dialect: 'mysql', 
    // logging: false
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error.message);
}