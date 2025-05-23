import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/category/createCategoryUseCase";
import { findCategoryByIdController } from "../modules/cars/useCases/category/findCategoryByIdUseCase";
import { findAllCategoriesController } from "../modules/cars/useCases/category/findAllCategoriesUsecase";
import { updateCategoryController } from "../modules/cars/useCases/category/updateCategoryUseCase";
import { deleteCategoryController } from "../modules/cars/useCases/category/deleteCategoryUseCase";

const categoryRoute = Router()


categoryRoute.post("/", (request, response) => {
    createCategoryController.handle(request, response)
})

categoryRoute.get("/:id", (request, response) => {
    findCategoryByIdController.handle(request, response)
})

categoryRoute.get("/", (request, response) => {
    findAllCategoriesController.handle(request, response)
})

categoryRoute.put("/:id", (request, response) => {
    updateCategoryController.handle(request, response)
})

categoryRoute.delete("/:id", (request, response) => {
    deleteCategoryController.handle(request, response)
})


export { categoryRoute }