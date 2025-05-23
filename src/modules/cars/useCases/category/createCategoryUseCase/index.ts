import { appDataSource } from "../../../../../dataSource";
import { CategoryEntity } from "../../../entities/CategoryEntity";
import { Categoryrepository } from "../../../repository/category/CategoryRepository";
import { CreateCategroyController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = new Categoryrepository(appDataSource.getRepository(CategoryEntity))

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)

const createCategoryController = new CreateCategroyController(createCategoryUseCase)

export { createCategoryController }