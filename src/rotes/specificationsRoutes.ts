import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/specification/createSpecificationUseCase";
import { findAllSpecificationsController } from "../modules/cars/useCases/specification/findAllSpecificationsUseCase";
import { findSpecificationByIdController } from "../modules/cars/useCases/specification/findSpecificationByIdUseCase";
import { updateSpecificationController } from "../modules/cars/useCases/specification/updateSpecificationUseCase";
import { deleteCategoryController } from "../modules/cars/useCases/category/deleteCategoryUseCase";
import { deleteSpecificationController } from "../modules/cars/useCases/specification/deleteSpecificationUseCase";

const specificationRoute = Router()


specificationRoute.post("/", (request, response) => {
    createSpecificationController.handle(request, response)
})

specificationRoute.get("/", (request, response) => {
    findAllSpecificationsController.handle(request, response)
})

specificationRoute.get("/:id", (request, response) => {
    findSpecificationByIdController.handle(request, response)
})

specificationRoute.put("/:id", (request, response) => {
    updateSpecificationController.handle(request, response)
})

specificationRoute.delete("/:id", (request, response) => {
    deleteSpecificationController.handle(request, response)
})


export { specificationRoute }