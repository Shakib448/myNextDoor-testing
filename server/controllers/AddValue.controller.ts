// @ts-nocheck
import AddValue from "@models/AddValue.model";
import { Request, Response } from "express";

export const addValue = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, password } = req.body;

    const saveValue = new AddValue({
      firstName,
      lastName,
      password,
    });

    const createdValue = await saveValue.save();

    res.status(201).json(createdValue);
  } catch (error) {
    console.log(error);
  }
};

export const getValue = async (req: Request, res: Response) => {
  try {
    const values = await AddValue.find();

    res.status(201).json(values);
  } catch (error) {
    console.log(error);
  }
};

export const getValueById = async (req: Request, res: Response) => {
  try {
    const value = await AddValue.findById(req.params.id);
    res.status(201).json(value);
  } catch (error) {
    console.log(error);
  }
};

export const addDetails = async (req: Request, res: Response) => {
  try {
    const value = await AddValue.findById(req.params.id);
    const { address, zipCode } = req.body;
    if (value) {
      const addAddress = new AddDetails({
        user: value._id.toString(),
        address,
        zipCode,
      });

      const addedDetails = await addAddress.save();
      res.status(201).json({ message: "Details updated successfully" });
      return addedDetails;
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (error) {
    console.log(error);
  }
};
