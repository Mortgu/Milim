import {model, Schema} from "mongoose";
import {I_Draft} from "./draft.interface";

let count = 0;

const DraftSchema: Schema = new Schema<I_Draft>({
    fileName: {
        type: String,
        unique: true,
        default: `unnamed`,
    }
});


const updateFileName = (fileName: String) => {
    return DraftModel.findOneAndUpdate({fileName: fileName}, {fileName: fileName + "-" + count}, null, function (error: any, document: any) {
        if (error) {
            count++;
            updateFileName(fileName)
        } else {
            return true;
        }
    });
}

DraftSchema.pre("save", async function (next: any) {
    const found = await DraftModel.findOne({fileName: this.fileName}, '_id fileName');

    if (found) {
        count++;
        this.fileName = this.fileName + "-" + count;
    }

    next();
});

export const DraftModel = model<I_Draft>("Draft", DraftSchema);