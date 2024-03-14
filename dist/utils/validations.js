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
exports.validateMonth = exports.validateRequest = void 0;
const usefulFunctions_1 = require("./usefulFunctions");
const validateRequest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
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
    }
    catch (e) {
        console.error(e);
        res.status(400).send(e);
    }
});
exports.validateRequest = validateRequest;
const validateMonth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const month = req.params.month;
        if ((0, usefulFunctions_1.validateDate)(new Date(month))) {
            next();
        }
        else {
            throw "Invalid month : Please enter a valid month";
        }
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});
exports.validateMonth = validateMonth;
