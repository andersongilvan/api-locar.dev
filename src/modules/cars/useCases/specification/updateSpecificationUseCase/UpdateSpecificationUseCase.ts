import { ListSpecificationDto } from "../../../DTOs/specification/ListSpecificationDto";
import { UpdateSpecificationDto } from "../../../DTOs/specification/UpdateSpecificationDto";
import { ISpecificationRepository } from "../../../repository/specification/ISpecificationRepository";


interface IRequest {
    id: string
    name: string
    description: string
}


export class UpdateSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }

    async execute({ id, name, description }: IRequest): Promise<ListSpecificationDto> {

        if (!id || !name || !description) {
            throw new Error("required fields")
        }

        const updateSpecificationDto = new UpdateSpecificationDto(id, name, description)

        const specificationUpdated = await this.specificationRepository.update({
            id: updateSpecificationDto.id,
            name: updateSpecificationDto.name,
            description: updateSpecificationDto.description
        })

        if (!specificationUpdated) {
            throw new Error("This update field")
        }

        const specification = await this.specificationRepository.findById(id)

        return new ListSpecificationDto(specification)

    }
}