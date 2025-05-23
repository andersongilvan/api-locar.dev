import { Request, Response } from "express";
import { DeleteSpecificationUseCase } from "./DeleteSpecificationUseCase";

export class DeleteSpecificationController {

    constructor(private deleteSpecificationUseCase: DeleteSpecificationUseCase) { }

    async handle(request: Request, response: Response) {

        const { id } = request.params

        try {
            const result = await this.deleteSpecificationUseCase.execute(id)
            return response.status(200).json({ success: "Specification deleted" })
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.log(`Internal error ${error}`)
        }
    }
}