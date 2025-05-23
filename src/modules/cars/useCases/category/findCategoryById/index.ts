import { appDataSource } from "../../../../../dataSource"
import { CategoryEntity } from "../../../entities/CategoryEntity"
import { Categoryrepository } from "../../../repository/category/CategoryRepository"
import { FindCategoryByIdController } from "./FindCategoryByIdController"
import { FindCategoryByIdUseCase } from "./FindCategoryByIdUsecase"

const categoryRepository = new Categoryrepository(appDataSource.getRepository(CategoryEntity))

const findCategoryByIdUseCase = new FindCategoryByIdUseCase(categoryRepository)

const findCategoryByIdController = new FindCategoryByIdController(findCategoryByIdUseCase)

export { findCategoryByIdController }