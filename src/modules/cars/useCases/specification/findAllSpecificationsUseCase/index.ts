import { specificationRepository } from "../../../repository/specification";
import { FindAllSpecificationsController } from "./FindAllSpecificationsController";
import { FindAllSpecificationsUseCase } from "./FindAllSpecificationsUseCase";


const findAllSpecificationsUseCase = new FindAllSpecificationsUseCase(specificationRepository)

const findAllSpecificationsController = new FindAllSpecificationsController(findAllSpecificationsUseCase)

export { findAllSpecificationsController }