import { ISpecificationRepository } from "../../../repository/specification/ISpecificationRepository";

export class DeleteSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }

    async execute(id: string) : Promise<boolean> {

        const specificationDeleted = await this.specificationRepository.delete(id)

        if (!specificationDeleted) {
            throw new Error("Specification not found")
        }

        return true

    }
}