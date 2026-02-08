"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCategoryActive = exports.updateCategory = exports.createCategory = exports.getCategory = exports.listCategories = void 0;
const categories_service_1 = require("../services/categories.service");
const categoriesService = new categories_service_1.CategoriesService();
const listCategories = async (req, res, next) => {
    try {
        const result = await categoriesService.list();
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.listCategories = listCategories;
const getCategory = async (req, res, next) => {
    try {
        const result = await categoriesService.getById(req.params.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.getCategory = getCategory;
const createCategory = async (req, res, next) => {
    try {
        const result = await categoriesService.create(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.createCategory = createCategory;
const updateCategory = async (req, res, next) => {
    try {
        const result = await categoriesService.update(req.params.id, req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.updateCategory = updateCategory;
const setCategoryActive = async (req, res, next) => {
    try {
        const result = await categoriesService.setActive(req.params.id, req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.setCategoryActive = setCategoryActive;
//# sourceMappingURL=categories.controller.js.map