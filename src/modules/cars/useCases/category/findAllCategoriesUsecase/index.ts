import { categoryRepository } from "../../../repository/category";
import { FindAllCategoriesController } from "./FindAllCategoriesController";
import { FindAllCategoriesUseCase } from "./FindAllCategoriesUseCase";




const findAllCategoriesUseCase = new FindAllCategoriesUseCase(categoryRepository)

const findAllCategoriesController = new FindAllCategoriesController(findAllCategoriesUseCase)

export { findAllCategoriesController }