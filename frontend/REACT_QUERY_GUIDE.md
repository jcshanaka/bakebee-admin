# React Query Integration Guide

This project now includes React Query for API state management, replacing the previous @straw-hat patterns.

## Generated API Client

The TypeScript axios client is automatically generated from the OpenAPI spec using:

```bash
npm run yarn:codegen
```

This creates:
- `src/lib/services/backend-api-generated/` - Contains all generated API code
- `DefaultApi` class with all CRUD operations
- TypeScript interfaces for all models (Category, SubCategory, etc.)

## React Query Hooks

### Categories Hooks (`src/lib/hooks/useCategories.ts`)

```typescript
// Query hooks
const { data: categories, isLoading, error } = useCategoriesQuery();
const { data: category } = useCategoryQuery(id);

// Mutation hooks  
const createMutation = useCreateCategoryMutation();
const updateMutation = useUpdateCategoryMutation();
const updateStatusMutation = useUpdateCategoryStatusMutation();
const deleteMutation = useDeleteCategoryMutation();
```

### Sub-Categories Hooks (`src/lib/hooks/useSubCategories.ts`)

```typescript
// Query hooks
const { data: subCategories, isLoading, error } = useSubCategoriesQuery();
const { data: subCategory } = useSubCategoryQuery(id);

// Mutation hooks
const createMutation = useCreateSubCategoryMutation();
const updateMutation = useUpdateSubCategoryMutation();
const updateStatusMutation = useUpdateSubCategoryStatusMutation();
const deleteMutation = useDeleteSubCategoryMutation();
```

## Usage Example

```typescript
import { useCategoriesQuery, useCreateCategoryMutation } from '../lib/hooks/useCategories';

function CategoryComponent() {
  const { data: categories = [], isLoading } = useCategoriesQuery();
  const createCategoryMutation = useCreateCategoryMutation();
  
  const handleCreate = async () => {
    try {
      await createCategoryMutation.mutateAsync({
        category_name: "New Category"
      });
      // Cache automatically invalidated and UI refreshed
    } catch (error) {
      console.error('Failed:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>{category.category_name}</div>
      ))}
      <button onClick={handleCreate}>Add Category</button>
    </div>
  );
}
```

## Key Features

1. **Automatic Cache Management**: Query results are cached with 5-minute stale time
2. **Optimistic Updates**: Cache is updated immediately after mutations
3. **Error Handling**: Built-in error states and retry logic
4. **Background Refetch**: Data automatically refetches when stale
5. **DevTools**: React Query DevTools available in development

## Query Configuration

Default settings in `QueryProvider.tsx`:
- `staleTime`: 5 minutes (data considered fresh)
- `gcTime`: 10 minutes (cache cleanup time)  
- `retry`: Smart retry logic (no retry on 4xx errors)
- `refetchOnWindowFocus`: enabled
- `refetchOnReconnect`: enabled

## Cache Keys Structure

Categories:
- `['categories']` - List all categories
- `['categories', 'detail', id]` - Single category

Sub-categories:  
- `['sub-categories']` - List all sub-categories
- `['sub-categories', 'detail', id]` - Single sub-category

## API Configuration

Update the base URL in hook files:
```typescript
const apiConfig = new Configuration({
  basePath: 'http://localhost:5000', // Update for your API
});
```

## Development

1. Start your backend API server
2. Run the frontend: `npm run dev`  
3. Open React Query DevTools (bottom-left toggle)
4. Monitor queries, mutations, and cache state

## Migration from @straw-hat

The old patterns have been replaced:
- `@straw-hat/fetcher` → native axios calls via generated client
- `@straw-hat/react-query-fetcher` → @tanstack/react-query v4 hooks
- Manual query key management → structured query key factories
- Custom cache logic → React Query's built-in cache with intelligent defaults