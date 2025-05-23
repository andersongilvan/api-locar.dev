import { appDataSource } from "../../../../dataSource";
import { CategoryEntity } from "../../entities/CategoryEntity";
import { CategoryRepository } from "./CategoryRepository";


const categoryRepository = new CategoryRepository(appDataSource.getRepository(CategoryEntity))

export { categoryRepository }