import { specificationRepository } from "../../../repository/specification";
import { UpdateSpecificationController } from "./UpdateSpecificationController";
import { UpdateSpecificationUseCase } from "./UpdateSpecificationUseCase";


const updateSpecificationUseCase = new UpdateSpecificationUseCase(specificationRepository)

const updateSpecificationController = new UpdateSpecificationController(updateSpecificationUseCase)

export { updateSpecificationController }