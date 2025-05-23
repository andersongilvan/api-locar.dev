import { Request, Response } from "express";
import { FindCategoryByIdUseCase } from "./FindCategoryByIdUseCase";

export class FindCategoryByIdController {

    constructor(private findCategoryByIdUseCase: FindCategoryByIdUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        try {
            const result = await this.findCategoryByIdUseCase.execute(id)
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.log(`Internal error ${error}`)
        }

    }

}