import { categoryRepository } from "../../../repository/category";
import { DeleteCategoryController } from "./DeleteCategoryController";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";




const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository)

const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)

export { deleteCategoryController }