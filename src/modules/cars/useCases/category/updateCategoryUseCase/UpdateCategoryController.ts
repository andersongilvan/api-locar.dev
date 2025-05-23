import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

export class UpdateCategoryController {
    constructor(private updateCategoryUseCase: UpdateCategoryUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        const { name, description } = request.body

        try {
            const result = await this.updateCategoryUseCase.execute({ id, name, description })
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.log(`Internal error ${error}`)
        }
    }
}