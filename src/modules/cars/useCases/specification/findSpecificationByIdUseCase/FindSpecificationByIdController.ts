import { Request, Response } from "express";
import { FindSpecificationByIdUseCase } from "./FindSpecificationByIdUseCase";


export class FindSpecificationByIdController {

    constructor(private findSpecificationByIdUseCase: FindSpecificationByIdUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        try {
            const result = await this.findSpecificationByIdUseCase.execute(id)
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.log(`Internal error ${error}`)
        }
    }
}