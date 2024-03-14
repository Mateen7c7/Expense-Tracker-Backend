"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const usefulFunctions_1 = require("../utils/usefulFunctions");
const validations_1 = require("../utils/validations");
const Expense = require("../modules/expense");
const express = require("express");
const router = express.Router();
// get todays expenses
router.get("/today", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const today = new Date();
        const expenses = yield Expense.find();
        let todayExpenses = [];
        for (const expense of expenses) {
            if ((0, usefulFunctions_1.isPresent)(expense.date, today)) {
                todayExpenses.push(expense);
            }
        }
        res.send(todayExpenses);
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
}));
// get month  expenses
router.get("/:month", validations_1.validateMonth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const month = new Date(req.params.month);
    try {
        const expenses = yield Expense.find();
        let monthExpenses = [];
        for (const expense of expenses) {
            if ((0, usefulFunctions_1.isMonthPresent)(expense.date, month)) {
                monthExpenses.push(expense);
            }
        }
        res.send(monthExpenses);
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
}));
module.exports = router;
