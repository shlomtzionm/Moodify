import { Document, Schema, model } from "mongoose";

// 1. Interface describing our model:
export interface IUserModel extends Document {
  name: string;
  email: string;
authToken:string;
}

// 2. Schema describing more data, validation and more:
export const userSchema = new Schema<IUserModel>(
  {
    name: {
      type: String,
      required: [true, "Missing name"],
      maxlength: [50, "Name to long"],
      minlength: [2, "Name to short"],
    },
    email:{type: String},
    authToken:{type:String,required:true}
  },
  {
    versionKey: false,
  }
);

// 3. Creating the model:
export const UserModel = model<IUserModel>("userModel", userSchema, "User");
