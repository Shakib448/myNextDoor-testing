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

export const updateDetails = async (req: Request, res: Response) => {
  try {
    const value = await AddValue.findById(req.params.id);
    const { address, zipCode } = req.body;
    if (value) {
      value.firstName = req.body.firstName || value.firstName;
      value.lastName = req.body.lastName || value.lastName;
      value.password = req.body.password || value.password;
      value.address = address || value.address;
      value.zipCode = zipCode || value.zipCode;

      const updateValues = await value.save();
      res.status(201).json({ message: "Details updated successfully" });
      return updateValues;
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteValue = async (req: Request, res: Response) => {
  try {
    const value = await AddValue.findById(req.params.id);
    if (value) {
      const removeValue = await value.remove();
      res.json({ message: "Value removed successfully" });
      return removeValue;
    } else {
      res.status(404).json({ message: "Value not found" });
    }
  } catch (error) {
    console.log(error);
  }
};
