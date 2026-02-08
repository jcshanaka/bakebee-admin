import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { SubCategory, CreateSubCategoryRequest, UpdateSubCategoryRequest, SetSubCategoryActiveRequest } from '../services/backend-api-generated/models';
import { DefaultApi } from '../services/backend-api-generated/api';
import { Configuration } from '../services/backend-api-generated/configuration';

// Create API client instance
const apiConfig = new Configuration({
  basePath: '/api', // Use relative path that will be proxied to localhost:5000
});
const apiClient = new DefaultApi(apiConfig);

// Query keys
export const subCategoryKeys = {
  all: ['sub-categories'] as const,
  lists: () => [...subCategoryKeys.all, 'list'] as const,
  list: (filters?: Record<string, unknown>) => [...subCategoryKeys.lists(), filters] as const,
  details: () => [...subCategoryKeys.all, 'detail'] as const,
  detail: (id: string) => [...subCategoryKeys.details(), id] as const,
};

// Query: List all sub-categories
export const useSubCategoriesQuery = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: subCategoryKeys.lists(),
    queryFn: () => apiClient.subCategoriesGet(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    enabled: options?.enabled,
    select: (response) => response.data as SubCategory[],
  });
};

// Query: Get single sub-category by ID
export const useSubCategoryQuery = (id: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: subCategoryKeys.detail(id),
    queryFn: () => apiClient.subCategoriesIdGet({ id }),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: options?.enabled && !!id,
    select: (response) => response.data as SubCategory,
  });
};

// Mutation: Create sub-category
export const useCreateSubCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSubCategoryRequest) => apiClient.subCategoriesPost({ createSubCategoryRequest: data }),
    onSuccess: (response) => {
      // Invalidate and refetch sub-categories list
      queryClient.invalidateQueries({ queryKey: subCategoryKeys.lists() });
      
      // Optionally add the new sub-category to cache
      const newSubCategory = (response as { data: SubCategory })?.data;
      if (newSubCategory?.id) {
        queryClient.setQueryData(subCategoryKeys.detail(newSubCategory.id), response);
      }
    },
    onError: (error) => {
      console.error('Failed to create sub-category:', error);
    },
  });
};

// Mutation: Update sub-category
export const useUpdateSubCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateSubCategoryRequest }) => 
      apiClient.subCategoriesIdPut({ id, updateSubCategoryRequest: data }),
    onSuccess: (response, variables) => {
      const { id } = variables;
      
      // Update the specific sub-category in cache
      queryClient.setQueryData(subCategoryKeys.detail(id), response);
      
      // Invalidate sub-categories list to refresh
      queryClient.invalidateQueries({ queryKey: subCategoryKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to update sub-category:', error);
    },
  });
};

// Mutation: Update sub-category status (activate/deactivate)
export const useUpdateSubCategoryStatusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: SetSubCategoryActiveRequest }) => 
      apiClient.subCategoriesIdStatusPatch({ id, setSubCategoryActiveRequest: data }),
    onSuccess: (response, variables) => {
      const { id } = variables;
      
      // Update the specific sub-category in cache
      queryClient.setQueryData(subCategoryKeys.detail(id), response);
      
      // Invalidate sub-categories list to refresh
      queryClient.invalidateQueries({ queryKey: subCategoryKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to update sub-category status:', error);
    },
  });
};

// Mutation: Delete sub-category (deactivate)
export const useDeleteSubCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.subCategoriesIdDelete({ id }),
    onSuccess: (response, id) => {
      // Update the specific sub-category in cache
      queryClient.setQueryData(subCategoryKeys.detail(id), response);
      
      // Invalidate sub-categories list to refresh
      queryClient.invalidateQueries({ queryKey: subCategoryKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to delete sub-category:', error);
    },
  });
};