import { NextFunction, Request, Response } from "express";
import { ExpenseType } from "./types";
import { validateDate } from "./usefulFunctions";

export const validateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let data: ExpenseType = req.body;
  try {
    if (typeof data.title != "string") {
      throw "title must be a string";
    }
    if (typeof data.price != "number") {
      throw "price must be a number";
    }
    if (typeof data.category != "string") {
      throw "category must be a string";
    }
    if (data.need != "high" && data.need != "medium" && data.need != "low") {
      throw "need must be high, medium or low";
    }
    req.body = {
      title: data.title.toLowerCase(),
      price: data.price,
      category: data.category.toLowerCase(),
      need: data.need,
      date: new Date(),
    };

    next();
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
};

export const validateMonth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const month = req.params.month;
    if (validateDate(new Date(month))) {
      next();
    } else {
      throw "Invalid month : Please enter a valid month";
    }
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
