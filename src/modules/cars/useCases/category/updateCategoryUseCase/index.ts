import { categoryRepository } from "../../../repository/category";
import { UpdateCategoryController } from "./UpdateCategoryController";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";


const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository)

const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)

export { updateCategoryController }