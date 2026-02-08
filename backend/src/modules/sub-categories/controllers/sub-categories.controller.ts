import { NextFunction, Response } from "express";

import { TypedRequest } from "../../../common/types";
import { SubCategoriesService } from "../services/sub-categories.service";
import {
  CreateSubCategoryBody,
  SetSubCategoryActiveBody,
  UpdateSubCategoryBody,
} from "../dtos/sub-categories.dto";

const subCategoriesService = new SubCategoriesService();

export const listSubCategories = async (
  req: TypedRequest<{}, {}, {}, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await subCategoriesService.list();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getSubCategory = async (
  req: TypedRequest<{ id: string }, {}, {}, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await subCategoriesService.getById(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const createSubCategory = async (
  req: TypedRequest<{}, {}, CreateSubCategoryBody, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await subCategoriesService.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateSubCategory = async (
  req: TypedRequest<{ id: string }, {}, UpdateSubCategoryBody, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await subCategoriesService.update(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const setSubCategoryActive = async (
  req: TypedRequest<{ id: string }, {}, SetSubCategoryActiveBody, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await subCategoriesService.setActive(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
