import { ICategoryRepository } from "../../../repository/category/ICategoryRepository";

export class DeleteCategoryUyseCase {

    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(id: string): Promise<boolean> {

        const categoryDeleted = await this.categoryRepository.delete(id)

        if (!categoryDeleted) {
            throw new Error("THis deletion filed")
        }

        return true

    }

}