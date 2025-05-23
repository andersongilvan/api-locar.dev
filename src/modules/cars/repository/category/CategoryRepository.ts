import { UpdateResult, DeleteResult, Repository } from "typeorm";
import { CreateCategoryDto } from "../../DTOs/category/CreateCategoryDto";
import { UpdateCateforyDto } from "../../DTOs/category/UpdateCategoryDto";
import { CategoryEntity } from "../../entities/CategoryEntity";
import { ICategoryRepository } from "./ICategoryRepository";

export class Categoryrepository implements ICategoryRepository {

    constructor(private categoryEntity: Repository<CategoryEntity>) { }

    async create({ name, description }: CreateCategoryDto): Promise<CategoryEntity> {

        return await this.categoryEntity.save({ name, description })

    }
    

    async findAll(): Promise<CategoryEntity[]> {
        return await this.categoryEntity.find()
    }


    async findByName(name: string): Promise<CategoryEntity | null> {

        return this.categoryEntity.findOne({ where: { name } })
    }


    async findById(id: string): Promise<CategoryEntity | null> {

        return await this.categoryEntity.findOne({ where: { id } })

    }


    async update({ id, name, description }: UpdateCateforyDto): Promise<UpdateResult> {
        const result = await this.categoryEntity.update({ id }, { name, description })
        if (result.affected === 0) {
            return null
        }

        return result
    }


    async delete(id: string): Promise<DeleteResult> {

        const result = await this.categoryEntity.delete({ id })

        if (result.affected == 0) {
            return null
        }

        return result
    }

}