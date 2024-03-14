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
const validations_1 = require("../utils/validations");
const Expense = require("../modules/expense");
const express = require("express");
const router = express.Router();
// post a Expense
router.post("/", validations_1.validateRequest, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const expense = new Expense(data);
        yield expense.save();
        res.status(201).send(expense);
    }
    catch (e) {
        console.error(e);
        res.status(400).send(e);
    }
}));
module.exports = router;
