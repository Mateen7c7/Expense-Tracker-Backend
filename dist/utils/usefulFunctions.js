"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDate = exports.isMonthPresent = exports.isPresent = exports.getCurrentTime = exports.getCurrentDate = void 0;
// function to get the current date
const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
};
exports.getCurrentDate = getCurrentDate;
// function to get the current time
const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
};
exports.getCurrentTime = getCurrentTime;
// function to check the given date is present
const isPresent = (a, b) => {
    if (a.getFullYear() === b.getFullYear()) {
        if (a.getMonth() === b.getMonth()) {
            if (a.getDate() === b.getDate()) {
                return true;
            }
        }
    }
    return false;
};
exports.isPresent = isPresent;
const isMonthPresent = (a, b) => {
    if (a.getFullYear() === b.getFullYear()) {
        if (a.getMonth() === b.getMonth()) {
            return true;
        }
    }
    return false;
};
exports.isMonthPresent = isMonthPresent;
//  function to validate date
const validateDate = (date) => {
    if (date instanceof Date && !isNaN(date.getTime())) {
        return true;
    }
    return false;
};
exports.validateDate = validateDate;
