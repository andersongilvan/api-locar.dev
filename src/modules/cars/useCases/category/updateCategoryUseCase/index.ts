import { appDataSource } from "../../../../../dataSource";
import { CategoryEntity } from "../../../entities/CategoryEntity";
import { Categoryrepository } from "../../../repository/category/CategoryRepository";
import { UpdateCategoryController } from "./UpdateCategoryController";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

const categoryRepository = new Categoryrepository(appDataSource.getRepository(CategoryEntity)) 

const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository)

const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)

export { updateCategoryController }