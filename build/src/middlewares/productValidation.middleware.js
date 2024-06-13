"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateName(name) {
    if (!name) {
        return { status: 'INVALID_DATA', data: '"name" is required' };
    }
    if (typeof name !== 'string') {
        return { status: 'UNPROCESSABLE_ENTITY', data: '"name" must be a string' };
    }
    if (name.length <= 2) {
        return {
            status: 'UNPROCESSABLE_ENTITY',
            data: '"name" length must be at least 3 characters long'
        };
    }
    return null;
}
function validatePrice(price) {
    if (!price) {
        return { status: 'INVALID_DATA', data: '"price" is required' };
    }
    if (typeof price !== 'string') {
        return { status: 'UNPROCESSABLE_ENTITY', data: '"price" must be a string' };
    }
    if (price.length <= 2) {
        return {
            status: 'UNPROCESSABLE_ENTITY',
            data: '"price" length must be at least 3 characters long'
        };
    }
    return null;
}
function validateParams({ name, price }) {
    const nameError = validateName(name);
    if (nameError)
        return nameError;
    const priceError = validatePrice(price);
    if (priceError)
        return priceError;
    return null;
}
exports.default = validateParams;
