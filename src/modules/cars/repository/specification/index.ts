import { appDataSource } from "../../../../dataSource";
import { SpecificationEntity } from "../../entities/SpecificationEntity";
import { SpecificationRepository } from "./SpecificationRepository";


const specificationRepository = new SpecificationRepository(appDataSource.getRepository(SpecificationEntity))

export { specificationRepository }