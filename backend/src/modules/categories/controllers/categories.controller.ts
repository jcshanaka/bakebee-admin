import { NextFunction, Response } from "express";

import { TypedRequest } from "../../../common/types";
import { CategoriesService } from "../services/categories.service";
import {
  CreateCategoryBody,
  SetCategoryActiveBody,
  UpdateCategoryBody,
} from "../dtos/categories.dto";

const categoriesService = new CategoriesService();

export const listCategories = async (
  req: TypedRequest<{}, {}, {}, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await categoriesService.list();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (
  req: TypedRequest<{ id: string }, {}, {}, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await categoriesService.getById(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (
  req: TypedRequest<{}, {}, CreateCategoryBody, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await categoriesService.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (
  req: TypedRequest<{ id: string }, {}, UpdateCategoryBody, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await categoriesService.update(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const setCategoryActive = async (
  req: TypedRequest<{ id: string }, {}, SetCategoryActiveBody, {}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await categoriesService.setActive(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
