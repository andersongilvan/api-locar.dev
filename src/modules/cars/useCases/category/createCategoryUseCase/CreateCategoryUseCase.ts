import { CreateCategoryDto } from "../../../DTOs/category/CreateCategoryDto";
import { ListCategoryDto } from "../../../DTOs/category/ListCategoryDto";
import { ICategoryRepository } from "../../../repository/category/ICategoryRepository";

interface IRequest {
    name: string
    description: string
}


export class CreateCategoryUseCase {

    constructor(private categoryRepository: ICategoryRepository) { }

    async execute({ name, description }: IRequest): Promise<ListCategoryDto> {

       // console.log({name, description})


        if(!name || !description) {
            throw new Error("Required fields")
        }

        const categoryExsit = await this.categoryRepository.findByName(name)
        if (categoryExsit) {
            throw new Error("Category already exist")
        }

        const categoryDto = new CreateCategoryDto(name, description)

        const newCategory = await this.categoryRepository.create({
            name: categoryDto.name,
            description: categoryDto.description
        })

        return new ListCategoryDto(newCategory)

    }

}