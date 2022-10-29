import {Request, Response} from "express";
import {I_Draft} from "./models/draft.interface";
import {DraftModel} from "./models/draft.schema";

export async function add_draft(request: Request, response: Response): Promise<void> {
    try {
        const draft: I_Draft = await new DraftModel(request.body).save();

        response.status(201).json({ message: 'Draft added', anime: draft });
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}