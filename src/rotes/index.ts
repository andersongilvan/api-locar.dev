import express, { Express } from "express";
import { categoryRoute } from "./categoryRoutes";
import { specificationRoute } from "./specificationsRoutes";

export function routes(app: Express) {
    app.use(express.json())
    app.get("/", (request, response) => {
        response.status(200).send({ message: "API Locar.dev" })
    })

    app.use("/categories", categoryRoute)
    app.use("/specifications", specificationRoute)
}