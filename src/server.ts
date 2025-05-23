import 'dotenv/config'
import "reflect-metadata"
import express from "express"
import { appDataSource } from "./dataSource"
import { routes } from './rotes'

appDataSource.initialize()

    .then(() => {
        const app = express()
        console.log("connected")

        routes(app)

        app.listen(process.env.PORT, () => {
            console.log("Server inrunning")
        })
    })