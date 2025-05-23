
import { categoryRepository } from "../../../repository/category"
import { FindCategoryByIdController } from "./FindCategoryByIdController"
import { FindCategoryByIdUseCase } from "./FindCategoryByIdUseCase"


const findCategoryByIdUseCase = new FindCategoryByIdUseCase(categoryRepository)

const findCategoryByIdController = new FindCategoryByIdController(findCategoryByIdUseCase)

export { findCategoryByIdController }