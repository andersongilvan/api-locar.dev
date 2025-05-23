import { appDataSource } from "../../../../../dataSource";
import { CategoryEntity } from "../../../entities/CategoryEntity";
import { Categoryrepository } from "../../../repository/category/CategoryRepository";
import { DeleteCategoryController } from "./DeleteCategoryController";
import { DeleteCategoryUyseCase } from "./DeleteCategoryUseCase";

const categoryRepository = new Categoryrepository(appDataSource.getRepository(CategoryEntity))

const deleteCategoryUseCase = new DeleteCategoryUyseCase(categoryRepository)

const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)

export { deleteCategoryController }