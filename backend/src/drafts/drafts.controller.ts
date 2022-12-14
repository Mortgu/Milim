import {Request, Response} from "express";
import {I_Draft} from "./models/draft.interface";
import {DraftModel} from "./models/draft.schema";

export async function add_draft(request: Request, response: Response): Promise<void> {
    try {
        console.log(request.body);
        const draft: I_Draft = await new DraftModel(request.body).save();

        response.status(201).json({message: 'Draft added', anime: draft});
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}

export async function get_drafts(request: Request, response: Response): Promise<void> {
    try {
        const query = await DraftModel.find({}, '', (error: any, results: any) => {
            if (error) throw error;

            return results;
        }).clone();

        response.status(201).send(query);
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}

export async function get_draft(request: Request, response: Response): Promise<void> {
    try {
        const query = await DraftModel.find({_id: request.params.id}, {}, (error: any, results: any) => {
            if (error) throw error;

            return results;
        }).clone();

        response.status(201).send(query);
    } catch (exception) {
        response.status(500).json({message: 'Something went wrong, please try again.'});
    }
}

export async function modify_draft(request: Request, response: Response): Promise<void> {
    try {
        const id = request.params.id;

        DraftModel.findByIdAndUpdate(id, request.body, function (error: any, result: any) {
            if (error) throw error;
        });

        response.status(201).json({ message: "Draft was successfully modified.", modification: request.body.modification });
    } catch (error) {
        response.status(400).json({
            message: 'Something went wrong, while trying to modify anime.'
        })
    }
}