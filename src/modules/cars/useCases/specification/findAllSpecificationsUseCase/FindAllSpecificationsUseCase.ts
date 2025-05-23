import { ListSpecificationDto } from "../../../DTOs/specification/ListSpecificationDto";
import { ISpecificationRepository } from "../../../repository/specification/ISpecificationRepository";

export class FindAllSpecificationsUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }

    async execute(): Promise<ListSpecificationDto[]> {

        const allSpecifications = await this.specificationRepository.findAll()

        return allSpecifications.map((specification) => new ListSpecificationDto(specification))
    }
    
}