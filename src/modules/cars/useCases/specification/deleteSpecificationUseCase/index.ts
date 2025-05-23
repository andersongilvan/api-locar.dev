import { specificationRepository } from "../../../repository/specification";
import { DeleteSpecificationController } from "./DeleteSpecificationController";
import { DeleteSpecificationUseCase } from "./DeleteSpecificationUseCase";

const deleteSpecificationUseCase = new DeleteSpecificationUseCase(specificationRepository)

const deleteSpecificationController = new DeleteSpecificationController(deleteSpecificationUseCase)


export { deleteSpecificationController }