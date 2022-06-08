import mongoose, { Schema } from "mongoose";
import { ADD_ADDRESS } from "@interface/AddValue.interface";

const AddAddress = new Schema<ADD_ADDRESS>(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "AddValue",
    },
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

const AddDetails = mongoose.model("Details", AddAddress);

export default AddDetails;
