import { Request, Response } from "express";
import { DeleteCategoryUyseCase } from "./DeleteCategoryUseCase";

export class DeleteCategoryController {

    constructor(private deleteCategoryUseCase: DeleteCategoryUyseCase) { }

    async handle(request: Request, response: Response) {

        const { id } = request.params

        try {
            const result = await this.deleteCategoryUseCase.execute(id)
            return response.status(200).json({ success : "Category deleted" })
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.log(`Internal error ${error}`)
        }
    }

}