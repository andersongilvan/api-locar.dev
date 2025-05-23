import { appDataSource } from "../../../../../dataSource";
import { CategoryEntity } from "../../../entities/CategoryEntity";
import { Categoryrepository } from "../../../repository/category/CategoryRepository";
import { FindAllCategoriesController } from "./FindAllCategoriesController";
import { FindAllCategoriesUseCase } from "./FindAllCategoriesUseCase";


const categoryRepository = new Categoryrepository(appDataSource.getRepository(CategoryEntity))

const findAllCategoriesUsecase = new FindAllCategoriesUseCase(categoryRepository)

const findAllCategoriesController = new FindAllCategoriesController(findAllCategoriesUsecase)

export { findAllCategoriesController }