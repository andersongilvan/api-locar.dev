import { ListCategoryDto } from "../../../DTOs/category/ListCategoryDto";
import { ICategoryRepository } from "../../../repository/category/ICategoryRepository";

export class FindAllCategoriesUseCase {

    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(): Promise<ListCategoryDto[]> {

        const allCategories = await this.categoryRepository.findAll()

        return allCategories.map((category) => new ListCategoryDto(category))

    }
}