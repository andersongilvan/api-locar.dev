import { DataSource } from "typeorm";

const appDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    // synchronize : true
})

export { appDataSource }