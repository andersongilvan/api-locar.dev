import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/specification/createSpecificationUseCase";
import { findAllSpecificationsController } from "../modules/cars/useCases/specification/findAllSpecificationsUseCase";

const specificationRoute = Router()


specificationRoute.post("/", (request, response) => {
    createSpecificationController.handle(request, response)
})

specificationRoute.get("/", (request, response) => {
    findAllSpecificationsController.handle(request, response)
})


export { specificationRoute }