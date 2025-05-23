import { DeleteResult, UpdateResult } from "typeorm";
import { CreateCategoryDto } from "../../DTOs/category/CreateCategoryDto";
import { UpdateCateforyDto } from "../../DTOs/category/UpdateCategoryDto";
import { CategoryEntity } from "../../entities/CategoryEntity";

export interface ICategoryRepository {
    create({ name, description }: CreateCategoryDto): Promise<CategoryEntity>
    findAll(): Promise<CategoryEntity[]>
    findByName(name: string): Promise<CategoryEntity | null>
    findById(id: string): Promise<CategoryEntity | null>
    update({ id, name, description }: UpdateCateforyDto): Promise<UpdateResult>
    delete(id: string): Promise<DeleteResult>
}