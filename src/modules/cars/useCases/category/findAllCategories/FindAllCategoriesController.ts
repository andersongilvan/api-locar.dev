import { Request, Response } from "express";
import { FindAllCategoriesUseCase } from "./FindAllCategoriesUseCase";

export class FindAllCategoriesController {
    constructor(private findAlCategoriesdUseCase: FindAllCategoriesUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const result = await this.findAlCategoriesdUseCase.execute()
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.log(`Internal error ${error}`)
        }

    }
}
