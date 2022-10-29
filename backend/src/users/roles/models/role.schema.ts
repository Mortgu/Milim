import mongoose, { model, Schema } from "mongoose";
import { I_Roles } from "./role.interface";

const schema: Schema = new Schema<I_Roles>({
    name: {
        type: String,
        required: true,
        unique: true
    },

    permissions: [{
        type: String
    }],

    meta: {
        createdOn: {
            type: Date,
            default: Date.now(),
        },

        creator: mongoose.Types.ObjectId,
    }
});

const RoleModel = model<I_Roles>("Roles", schema);

export default RoleModel;