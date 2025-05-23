import { ListSpecificationDto } from "../../../DTOs/specification/ListSpecificationDto";
import { ISpecificationRepository } from "../../../repository/specification/ISpecificationRepository";

export class FindSpecificationByIdUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }

    async execute(id: string) {

        const specificationById = await this.specificationRepository.findById(id)

        if (!specificationById) {
            throw new Error("Specification not found")
        }

        return new ListSpecificationDto(specificationById)

    }

}