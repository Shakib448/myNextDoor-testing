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
