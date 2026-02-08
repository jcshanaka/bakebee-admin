"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSubCategoryActive = exports.updateSubCategory = exports.createSubCategory = exports.getSubCategory = exports.listSubCategories = void 0;
const sub_categories_service_1 = require("../services/sub-categories.service");
const subCategoriesService = new sub_categories_service_1.SubCategoriesService();
const listSubCategories = async (req, res, next) => {
    try {
        const result = await subCategoriesService.list();
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.listSubCategories = listSubCategories;
const getSubCategory = async (req, res, next) => {
    try {
        const result = await subCategoriesService.getById(req.params.id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.getSubCategory = getSubCategory;
const createSubCategory = async (req, res, next) => {
    try {
        const result = await subCategoriesService.create(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.createSubCategory = createSubCategory;
const updateSubCategory = async (req, res, next) => {
    try {
        const result = await subCategoriesService.update(req.params.id, req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.updateSubCategory = updateSubCategory;
const setSubCategoryActive = async (req, res, next) => {
    try {
        const result = await subCategoriesService.setActive(req.params.id, req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.setSubCategoryActive = setSubCategoryActive;
//# sourceMappingURL=sub-categories.controller.js.map