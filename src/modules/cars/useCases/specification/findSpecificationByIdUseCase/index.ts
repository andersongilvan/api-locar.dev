import { specificationRepository } from "../../../repository/specification";
import { FindSpecificationByIdController } from "./FindSpecificationByIdController";
import { FindSpecificationByIdUseCase } from "./FindSpecificationByIdUseCase";



const findSpecificationByIdUseCase = new FindSpecificationByIdUseCase(specificationRepository)

const findSpecificationByIdController = new FindSpecificationByIdController(findSpecificationByIdUseCase)

export { findSpecificationByIdController }