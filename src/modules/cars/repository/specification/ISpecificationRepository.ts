import { DeleteResult, UpdateResult } from "typeorm"
import { CreateSpecificationDto } from "../../DTOs/specification/CreateSpecification"
import { UpdateSpecificationDto } from "../../DTOs/specification/UpdateSpecificationDto"
import { SpecificationEntity } from "../../entities/SpecificationEntity"



export interface ISpecificationRepository {
    create({ name, description }: CreateSpecificationDto): Promise<SpecificationEntity>
    findAll(): Promise<SpecificationEntity[]>
    findByName(name: string): Promise<SpecificationEntity | null>
    findById(id: string): Promise<SpecificationEntity | null>
    update({ id, name, description }: UpdateSpecificationDto): Promise<UpdateResult>
    delete(id: string): Promise<DeleteResult>
}