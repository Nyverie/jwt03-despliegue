import Sequelize from "sequelize";
//import dbConfig from "../config/db.config.js";
import userModel from "./user.model.js";
import roleModel from "./role.model.js";

//const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, { ... });

// ... (Todo lo demás sigue comentado como lo tenías) ...

// En vez de comentar el export, expórtalo como un objeto simulado:
const db = {
    user: {},
    role: {},
    ROLES: ["user", "admin", "moderator"]
};

export default db;