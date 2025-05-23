import { DeleteResult, UpdateResult } from "typeorm";
import { CreateCategoryDto } from "../../DTOs/category/CreateCategoryDto";
import { CategoryEntity } from "../../entities/CategoryEntity";
import { UpdateCategoryDto } from "../../DTOs/category/UpdateCategoryDto";

export interface ICategoryRepository {
    create({ name, description }: CreateCategoryDto): Promise<CategoryEntity>
    findAll(): Promise<CategoryEntity[]>
    findByName(name: string): Promise<CategoryEntity | null>
    findById(id: string): Promise<CategoryEntity | null>
    update({ id, name, description }: UpdateCategoryDto): Promise<UpdateResult>
    delete(id: string): Promise<DeleteResult>
}