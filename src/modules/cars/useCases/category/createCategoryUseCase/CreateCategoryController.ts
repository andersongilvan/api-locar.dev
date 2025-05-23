import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategroyController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

    async handle(request: Request, response: Response) {

        const { name, description } = request.body

        try {
            const result = await this.createCategoryUseCase.execute({ name, description })

            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.log(`Internal error ${error}`)
        }
    }
}