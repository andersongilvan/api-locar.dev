import { CategoryEntity } from "../../entities/CategoryEntity"

export class ListCategoryDto {
    readonly id: string
    readonly name: string
    readonly description: string
    readonly createdAt: Date
    

    constructor(categoryEntity: CategoryEntity) {
        this.id = categoryEntity.id
        this.name = categoryEntity.name
        this.description = categoryEntity.description
        this.createdAt = categoryEntity.createdAt
    }
}