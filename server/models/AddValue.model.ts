import mongoose, { Schema } from "mongoose";
import { ADD_VALUE } from "@interface/AddValue.interface";

const AddValueSchema = new Schema<ADD_VALUE>(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    password: {
      type: String,
    },
    details: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Details",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AddValue = mongoose.model("AddValue", AddValueSchema);

export default AddValue;
