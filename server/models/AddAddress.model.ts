import mongoose, { Schema } from "mongoose";
import { ADD_ADDRESS } from "@interface/AddValue.interface";

const AddDetailsSchema = new Schema<ADD_ADDRESS>(
  {
    address: {
      type: String,
    },
    zipCode: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AddDetails = mongoose.model("Details", AddDetailsSchema);

export default AddDetails;
