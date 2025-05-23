import { Request, Response } from "express";
import { FindAllSpecificationsUseCase } from "./FindAllSpecificationsUseCase";


export class FindAllSpecificationsController {
    constructor(private findAllSpecificationUseCase: FindAllSpecificationsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const result = await this.findAllSpecificationUseCase.execute()
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.log(`Internal error ${error}`)
        }

    }
}