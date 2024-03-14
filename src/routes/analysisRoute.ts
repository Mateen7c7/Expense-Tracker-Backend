import { Request, Response } from "express";
import { ExpenseType } from "../utils/types";
import { isMonthPresent, isPresent } from "../utils/usefulFunctions";
import { validateMonth } from "../utils/validations";
const Expense = require("../modules/expense");

const express = require("express");

const router = express.Router();
// get todays expenses
router.get("/today", async (req: Request, res: Response) => {
  try {
    const today = new Date();
    const expenses: ExpenseType[] = await Expense.find();
    let todayExpenses: ExpenseType[] = [];
    for (const expense of expenses) {
      if (isPresent(expense.date!, today)) {
        todayExpenses.push(expense);
      }
    }
    res.send(todayExpenses);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

// get month  expenses

router.get("/:month", validateMonth, async (req: Request, res: Response) => {
  const month = new Date(req.params.month);
  try {
    const expenses: ExpenseType[] = await Expense.find();
    let monthExpenses: ExpenseType[] = [];
    for (const expense of expenses) {
      if (isMonthPresent(expense.date!, month)) {
        monthExpenses.push(expense);
      }
    }
    res.send(monthExpenses);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

module.exports = router;
