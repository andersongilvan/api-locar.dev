import { ListCategoryDto } from "../../../DTOs/category/ListCategoryDto";
import { UpdateCategoryDto } from "../../../DTOs/category/UpdateCategoryDto";
import { ICategoryRepository } from "../../../repository/category/ICategoryRepository";

interface IRequest {
    id: string
    name: string
    description: string
}

export class UpdateCategoryUseCase {

    constructor(private categoryRepository: ICategoryRepository) { }

    async execute({ id, name, description }: IRequest) {

        if (!id || !name || !description) {
            throw new Error("Required fields")
        }

        const updateCategoryDto = new UpdateCategoryDto(id, name, description)

        const updatedCategory = await this.categoryRepository.update({
            id: updateCategoryDto.id,
            name: updateCategoryDto.name,
            description: updateCategoryDto.description
        })

        if (!updatedCategory) {
            throw new Error("This update field")
        }

        const categoryById = await this.categoryRepository.findById(id)

        return new ListCategoryDto(categoryById)

    }

}