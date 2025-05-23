import { ListCategoryDto } from "../../../DTOs/category/ListCategoryDto";
import { ICategoryRepository } from "../../../repository/category/ICategoryRepository";

export class FindCategoryByIdUseCase {

    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(id: string): Promise<ListCategoryDto> {

        const categoryById = await this.categoryRepository.findById(id)

        if (!categoryById) {
            throw new Error("Category not found")
        }

        return new ListCategoryDto(categoryById)

    }
}