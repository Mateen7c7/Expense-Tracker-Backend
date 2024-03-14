import { Request, Response, NextFunction } from "express";
import { ExpenseType } from "../utils/types";
import { validateRequest } from "../utils/validations";
const Expense = require("../modules/expense");

const express = require("express");

const router = express.Router();

// post a Expense
router.post("/", validateRequest, async (req: Request, res: Response) => {
  const data: ExpenseType = req.body;
  try {
    const expense = new Expense(data);
    await expense.save();
    res.status(201).send(expense);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = router;
