import { CreateSpecificationDto } from "../../../DTOs/specification/CreateSpecification";
import { ListSpecificationDto } from "../../../DTOs/specification/ListSpecificationDto";
import { ISpecificationRepository } from "../../../repository/specification/ISpecificationRepository";


interface IRequest {
    name: string
    description: string
}


export class CreateSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }

    async execute({ name, description }: IRequest) : Promise<ListSpecificationDto> {
        if (!name || !description) {
            throw new Error("Required fields")
        }

        const specificationExist = await this.specificationRepository.findByName(name)

        if (specificationExist) {
            throw new Error("This specification already exist")
        }

        const createSpecificationDto = new CreateSpecificationDto(name, description)

        const newSpecification = await this.specificationRepository.create({
            name: createSpecificationDto.name,
            description: createSpecificationDto.description
        })

        return new ListSpecificationDto(newSpecification)
    }

}