import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { Category, CreateCategoryRequest, UpdateCategoryRequest, SetCategoryActiveRequest } from '../services/backend-api-generated/models';
import { DefaultApi } from '../services/backend-api-generated/api';
import { Configuration } from '../services/backend-api-generated/configuration';

// Create API client instance
const apiConfig = new Configuration({
  basePath: '/api', // Use relative path that will be proxied to localhost:5000
});
const apiClient = new DefaultApi(apiConfig);

// Query keys
export const categoryKeys = {
  all: ['categories'] as const,
  lists: () => [...categoryKeys.all, 'list'] as const,
  list: (filters?: Record<string, unknown>) => [...categoryKeys.lists(), filters] as const,
  details: () => [...categoryKeys.all, 'detail'] as const,
  detail: (id: string) => [...categoryKeys.details(), id] as const,
};

// Query: List all categories
export const useCategoriesQuery = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: categoryKeys.lists(),
    queryFn: () => apiClient.categoriesGet(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    enabled: options?.enabled,
    select: (response) => response.data as Category[],
  });
};

// Query: Get single category by ID
export const useCategoryQuery = (id: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: categoryKeys.detail(id),
    queryFn: () => apiClient.categoriesIdGet({ id }),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: options?.enabled && !!id,
    select: (response) => response.data as Category,
  });
};

// Mutation: Create category
export const useCreateCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCategoryRequest) => apiClient.categoriesPost({ createCategoryRequest: data }),
    onSuccess: (response) => {
      // Invalidate and refetch categories list
      queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
      
      // Optionally add the new category to cache
      const newCategory = (response as { data: Category })?.data;
      if (newCategory?.id) {
        queryClient.setQueryData(categoryKeys.detail(newCategory.id), response);
      }
    },
    onError: (error) => {
      console.error('Failed to create category:', error);
    },
  });
};

// Mutation: Update category
export const useUpdateCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateCategoryRequest }) => 
      apiClient.categoriesIdPut({ id, updateCategoryRequest: data }),
    onSuccess: (response, variables) => {
      const { id } = variables;
      
      // Update the specific category in cache
      queryClient.setQueryData(categoryKeys.detail(id), response);
      
      // Invalidate categories list to refresh
      queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to update category:', error);
    },
  });
};

// Mutation: Update category status (activate/deactivate)
export const useUpdateCategoryStatusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: SetCategoryActiveRequest }) => 
      apiClient.categoriesIdStatusPatch({ id, setCategoryActiveRequest: data }),
    onSuccess: (response, variables) => {
      const { id } = variables;
      
      // Update the specific category in cache
      queryClient.setQueryData(categoryKeys.detail(id), response);
      
      // Invalidate categories list to refresh
      queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to update category status:', error);
    },
  });
};

// Mutation: Delete category (deactivate)
export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.categoriesIdDelete({ id }),
    onSuccess: (response, id) => {
      // Update the specific category in cache
      queryClient.setQueryData(categoryKeys.detail(id), response);
      
      // Invalidate categories list to refresh
      queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to delete category:', error);
    },
  });
};