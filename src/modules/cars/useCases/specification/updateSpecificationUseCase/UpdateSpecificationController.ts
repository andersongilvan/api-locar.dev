import { Request, Response } from "express";
import { UpdateSpecificationUseCase } from "./UpdateSpecificationUseCase";

export class UpdateSpecificationController {

    constructor(private updateSpecificationUseCase: UpdateSpecificationUseCase) { }

    async handle(request: Request, response: Response) : Promise<Response> {

        const { id } = request.params
        const { name, description } = request.body

        try {
            const result = await this.updateSpecificationUseCase.execute({ id, name, description })
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.log(`Internal error ${error}`)
        }

    }

}