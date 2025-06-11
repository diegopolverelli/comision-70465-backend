import { DataTypes } from "sequelize"
import { sequelize } from "../config/connDB.js";

export const usuariosModelo = sequelize.define(
    'usuarios',
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        timestamps: true
        // Other model options go here
    },
);