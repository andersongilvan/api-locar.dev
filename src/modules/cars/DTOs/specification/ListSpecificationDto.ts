import { SpecificationEntity } from "../../entities/SpecificationEntity"

export class ListSpecificationDto {
    readonly id: string
    readonly name: string
    readonly description: string
    readonly createdAt: Date


    constructor(specificationEntity: SpecificationEntity) {
        this.id = specificationEntity.id
        this.name = specificationEntity.name
        this.description = specificationEntity.description
        this.createdAt = specificationEntity.createdAt
    }
}