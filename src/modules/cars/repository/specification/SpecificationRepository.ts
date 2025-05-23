import { UpdateResult, DeleteResult, Repository } from "typeorm";
import { CreateSpecificationDto } from "../../DTOs/specification/CreateSpecification";
import { UpdateSpecificationDto } from "../../DTOs/specification/UpdateSpecificationDto";
import { SpecificationEntity } from "../../entities/SpecificationEntity";
import { ISpecificationRepository } from "./ISpecificationRepository";



export class SpecificationRepository implements ISpecificationRepository {

    constructor(private specificationEntity: Repository<SpecificationEntity>) { }

    async create({ name, description }: CreateSpecificationDto): Promise<SpecificationEntity> {
        return await this.specificationEntity.save({ name, description })
    }

    async findAll(): Promise<SpecificationEntity[]> {
        return await this.specificationEntity.find()
    }

    async findByName(name: string): Promise<SpecificationEntity | null> {
        return await this.specificationEntity.findOne({ where: { name } })
    }

    async findById(id: string): Promise<SpecificationEntity | null> {
        return await this.specificationEntity.findOne({ where: { id } })
    }

    async update({ id, name, description }: UpdateSpecificationDto): Promise<UpdateResult> {
        const result = await this.specificationEntity.update({ id }, { name, description })

        if (result.affected === 0) {
            return null
        }

        return result
    }

    async delete(id: string): Promise<DeleteResult> {
        const result = await this.specificationEntity.delete({ id })

        if (result.affected === 0) {
            return null
        }

        return result
    }

}