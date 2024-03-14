import mongoose from "mongoose";
import { ExpenseType } from "../utils/types";

const expenseSchema = new mongoose.Schema<ExpenseType>({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  need: {
    type: String,
    required: true,
  },
});

const Expense = mongoose.model<ExpenseType>("Expense", expenseSchema);

module.exports = Expense;
