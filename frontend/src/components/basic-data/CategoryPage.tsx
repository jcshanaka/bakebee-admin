import { useState } from "react";
import { Modal } from "../ui/modal";
import { useModal } from "../../hooks/useModal";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Switch from "../form/switch/Switch";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import { PlusIcon } from "../../icons";
import { useCategoriesQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useUpdateCategoryStatusMutation } from "../../lib/hooks/useCategories";
import type { Category } from "../../lib/services/backend-api-generated/models";

const CategoryPageIntegrated = () => {
  const addModal = useModal();
  const editModal = useModal();

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryActive, setNewCategoryActive] = useState(true);
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const [editName, setEditName] = useState("");
  const [editActive, setEditActive] = useState(true);

  // React Query hooks
  const { data: categories = [], isLoading, error } = useCategoriesQuery();
  const createCategoryMutation = useCreateCategoryMutation();
  const updateCategoryMutation = useUpdateCategoryMutation();
  const updateStatusMutation = useUpdateCategoryStatusMutation();

  const handleOpenEdit = (category: Category) => {
    setEditCategory(category);
    setEditName(category.category_name || "");
    setEditActive(category.is_active ?? true);
    editModal.openModal();
  };

  const handleCreate = async () => {
    if (!newCategoryName.trim()) return;

    try {
      await createCategoryMutation.mutateAsync({
        category_name: newCategoryName,
      });
      
      // Reset form
      setNewCategoryName("");
      setNewCategoryActive(true);
      addModal.closeModal();
    } catch (error) {
      console.error('Failed to create category:', error);
    }
  };

  const handleUpdate = async () => {
    if (!editCategory?.id || !editName.trim()) return;

    try {
      await updateCategoryMutation.mutateAsync({
        id: editCategory.id,
        data: { category_name: editName },
      });

      // Update status if changed
      if (editActive !== editCategory.is_active) {
        await updateStatusMutation.mutateAsync({
          id: editCategory.id,
          data: { is_active: editActive },
        });
      }

      editModal.closeModal();
    } catch (error) {
      console.error('Failed to update category:', error);
    }
  };

  if (error) {
    return <div className="text-red-500">Error loading categories: {error.message}</div>;
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-end gap-3">
        <Button
          size="sm"
          onClick={addModal.openModal}
          startIcon={<PlusIcon />}
        >
          Add Category
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 bg-gray-50 text-sm text-gray-700 dark:border-white/[0.05] dark:bg-gray-900 dark:text-gray-200">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 text-start">
                  Category Name
                </TableCell>
                <TableCell isHeader className="px-5 py-3 text-start">
                  Status
                </TableCell>
                <TableCell isHeader className="px-5 py-3 text-end">
                  Actions
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 text-sm text-gray-700 dark:divide-white/[0.05] dark:text-gray-200">
              {isLoading ? (
                <TableRow>
                  <td colSpan={3} className="px-5 py-4 text-center">
                    Loading categories...
                  </td>
                </TableRow>
              ) : categories.length === 0 ? (
                <TableRow>
                  <td colSpan={3} className="px-5 py-4 text-center">
                    No categories found
                  </td>
                </TableRow>
              ) : (
                categories.map((category) => (
                  <TableRow key={category.id} className="bg-white dark:bg-white/[0.02]">
                    <TableCell className="px-5 py-4 font-medium text-gray-900 dark:text-white/90">
                      {category.category_name}
                    </TableCell>
                    <TableCell className="px-5 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                          category.is_active
                            ? "bg-success-50 text-success-700 dark:bg-success-500/10 dark:text-success-400"
                            : "bg-gray-100 text-gray-600 dark:bg-white/[0.08] dark:text-gray-300"
                        }`}
                      >
                        {category.is_active ? "Active" : "Inactive"}
                      </span>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-end">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleOpenEdit(category)}
                        disabled={updateCategoryMutation.isPending || updateStatusMutation.isPending}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <Modal
        isOpen={addModal.isOpen}
        onClose={addModal.closeModal}
        className="max-w-[520px] m-4"
      >
        <div className="no-scrollbar relative w-full max-w-[520px] rounded-3xl bg-white p-6 dark:bg-gray-900">
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white/90">
              Add Category
            </h4>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Create a new category for organizing products.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <Label htmlFor="category-name">Category Name</Label>
              <Input
                id="category-name"
                placeholder="e.g. Breads"
                value={newCategoryName}
                onChange={(event) => setNewCategoryName(event.target.value)}
              />
            </div>

            <div>
              <Switch
                key={`add-${newCategoryActive ? "on" : "off"}`}
                label="Active"
                defaultChecked={newCategoryActive}
                onChange={setNewCategoryActive}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-end gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={addModal.closeModal}
              disabled={createCategoryMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleCreate}
              disabled={createCategoryMutation.isPending || !newCategoryName.trim()}
            >
              {createCategoryMutation.isPending ? "Creating..." : "Save Category"}
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={editModal.isOpen}
        onClose={editModal.closeModal}
        className="max-w-[520px] m-4"
      >
        <div className="no-scrollbar relative w-full max-w-[520px] rounded-3xl bg-white p-6 dark:bg-gray-900">
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white/90">
              Edit Category
            </h4>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Update category details and activation status.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <Label htmlFor="edit-category-name">Category Name</Label>
              <Input
                id="edit-category-name"
                placeholder="e.g. Breads"
                value={editName}
                onChange={(event) => setEditName(event.target.value)}
              />
            </div>

            <div>
              <Switch
                key={editCategory?.id || "edit"}
                label="Active"
                defaultChecked={editActive}
                onChange={setEditActive}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-end gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={editModal.closeModal}
              disabled={updateCategoryMutation.isPending || updateStatusMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleUpdate}
              disabled={
                updateCategoryMutation.isPending ||
                updateStatusMutation.isPending ||
                !editName.trim()
              }
            >
              {updateCategoryMutation.isPending || updateStatusMutation.isPending
                ? "Saving..."
                : "Save Changes"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CategoryPageIntegrated;