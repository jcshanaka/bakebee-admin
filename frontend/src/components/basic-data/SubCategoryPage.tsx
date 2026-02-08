import { useState } from "react";
import { Modal } from "../ui/modal";
import { useModal } from "../../hooks/useModal";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Switch from "../form/switch/Switch";
import Select from "../form/Select";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import { PlusIcon } from "../../icons";
import { useCategoriesQuery } from "../../lib/hooks/useCategories";
import { 
  useSubCategoriesQuery, 
  useCreateSubCategoryMutation, 
  useUpdateSubCategoryMutation, 
  useUpdateSubCategoryStatusMutation 
} from "../../lib/hooks/useSubCategories";
import type { SubCategory } from "../../lib/services/backend-api-generated/models";

const SubCategoryPageIntegrated = () => {
  const addModal = useModal();
  const editModal = useModal();

  const [newSubCategoryName, setNewSubCategoryName] = useState("");
  const [newSubCategoryActive, setNewSubCategoryActive] = useState(true);
  const [newMainCategoryId, setNewMainCategoryId] = useState("");
  const [editSubCategory, setEditSubCategory] = useState<SubCategory | null>(null);
  const [editName, setEditName] = useState("");
  const [editActive, setEditActive] = useState(true);
  const [editMainCategoryId, setEditMainCategoryId] = useState("");

  // React Query hooks
  const { data: categories = [], isLoading: categoriesLoading } = useCategoriesQuery();
  const { data: subCategories = [], isLoading: subCategoriesLoading, error } = useSubCategoriesQuery();
  const createSubCategoryMutation = useCreateSubCategoryMutation();
  const updateSubCategoryMutation = useUpdateSubCategoryMutation();
  const updateStatusMutation = useUpdateSubCategoryStatusMutation();

  // Get category name by ID
  const getCategoryName = (categoryId?: string) => {
    if (!categoryId) return "Unknown";
    const category = categories.find(c => c.id === categoryId);
    return category?.category_name || "Unknown Category";
  };

  const handleOpenEdit = (subCategory: SubCategory) => {
    setEditSubCategory(subCategory);
    setEditName(subCategory.sub_category_name || "");
    setEditActive(subCategory.is_active ?? true);
    setEditMainCategoryId(subCategory.main_category_id || "");
    editModal.openModal();
  };

  const handleCreate = async () => {
    if (!newSubCategoryName.trim() || !newMainCategoryId) return;

    try {
      await createSubCategoryMutation.mutateAsync({
        sub_category_name: newSubCategoryName,
        main_category_id: newMainCategoryId,
      });
      
      // Reset form
      setNewSubCategoryName("");
      setNewSubCategoryActive(true);
      setNewMainCategoryId("");
      addModal.closeModal();
    } catch (error) {
      console.error('Failed to create sub-category:', error);
    }
  };

  const handleUpdate = async () => {
    if (!editSubCategory?.id || !editName.trim() || !editMainCategoryId) return;

    try {
      await updateSubCategoryMutation.mutateAsync({
        id: editSubCategory.id,
        data: { 
          sub_category_name: editName,
          main_category_id: editMainCategoryId,
        },
      });

      // Update status if changed
      if (editActive !== editSubCategory.is_active) {
        await updateStatusMutation.mutateAsync({
          id: editSubCategory.id,
          data: { is_active: editActive },
        });
      }

      editModal.closeModal();
    } catch (error) {
      console.error('Failed to update sub-category:', error);
    }
  };

  if (error) {
    return <div className="text-red-500">Error loading sub-categories: {error.message}</div>;
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-end gap-3">
        <Button
          size="sm"
          onClick={addModal.openModal}
          startIcon={<PlusIcon />}
          disabled={categoriesLoading || categories.length === 0}
        >
          Add Sub Category
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 bg-gray-50 text-sm text-gray-700 dark:border-white/[0.05] dark:bg-gray-900 dark:text-gray-200">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 text-start">
                  Sub Category Name
                </TableCell>
                <TableCell isHeader className="px-5 py-3 text-start">
                  Main Category
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
              {subCategoriesLoading ? (
                <TableRow>
                  <td colSpan={4} className="px-5 py-4 text-center">
                    Loading sub-categories...
                  </td>
                </TableRow>
              ) : subCategories.length === 0 ? (
                <TableRow>
                  <td colSpan={4} className="px-5 py-4 text-center">
                    No sub-categories found
                  </td>
                </TableRow>
              ) : (
                subCategories.map((subCategory) => (
                  <TableRow key={subCategory.id} className="bg-white dark:bg-white/[0.02]">
                    <TableCell className="px-5 py-4 font-medium text-gray-900 dark:text-white/90">
                      {subCategory.sub_category_name}
                    </TableCell>
                    <TableCell className="px-5 py-4">
                      {getCategoryName(subCategory.main_category_id)}
                    </TableCell>
                    <TableCell className="px-5 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                          subCategory.is_active
                            ? "bg-success-50 text-success-700 dark:bg-success-500/10 dark:text-success-400"
                            : "bg-gray-100 text-gray-600 dark:bg-white/[0.08] dark:text-gray-300"
                        }`}
                      >
                        {subCategory.is_active ? "Active" : "Inactive"}
                      </span>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-end">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleOpenEdit(subCategory)}
                        disabled={updateSubCategoryMutation.isPending || updateStatusMutation.isPending}
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
              Add Sub Category
            </h4>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Create a new sub-category under a main category.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <Label htmlFor="main-category">Main Category</Label>
              <Select
                key={`add-category-${newMainCategoryId}`}
                defaultValue={newMainCategoryId}
                onChange={(value) => setNewMainCategoryId(value)}
                placeholder="Select main category"
                options={categories.map(category => ({
                  value: category.id || "",
                  label: category.category_name || "Unnamed Category"
                }))}
              />
            </div>

            <div>
              <Label htmlFor="sub-category-name">Sub Category Name</Label>
              <Input
                id="sub-category-name"
                placeholder="e.g. Croissants"
                value={newSubCategoryName}
                onChange={(event) => setNewSubCategoryName(event.target.value)}
              />
            </div>

            <div>
              <Switch
                key={`add-${newSubCategoryActive ? "on" : "off"}`}
                label="Active"
                defaultChecked={newSubCategoryActive}
                onChange={setNewSubCategoryActive}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-end gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={addModal.closeModal}
              disabled={createSubCategoryMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleCreate}
              disabled={
                createSubCategoryMutation.isPending || 
                !newSubCategoryName.trim() || 
                !newMainCategoryId
              }
            >
              {createSubCategoryMutation.isPending ? "Creating..." : "Save Sub Category"}
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
              Edit Sub Category
            </h4>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Update sub-category details and activation status.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <Label htmlFor="edit-main-category">Main Category</Label>
              <Select
                key={`edit-category-${editMainCategoryId}`}
                defaultValue={editMainCategoryId}
                onChange={(value) => setEditMainCategoryId(value)}
                placeholder="Select main category"
                options={categories.map(category => ({
                  value: category.id || "",
                  label: category.category_name || "Unnamed Category"
                }))}
              />
            </div>

            <div>
              <Label htmlFor="edit-sub-category-name">Sub Category Name</Label>
              <Input
                id="edit-sub-category-name"
                placeholder="e.g. Croissants"
                value={editName}
                onChange={(event) => setEditName(event.target.value)}
              />
            </div>

            <div>
              <Switch
                key={editSubCategory?.id || "edit"}
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
              disabled={updateSubCategoryMutation.isPending || updateStatusMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleUpdate}
              disabled={
                updateSubCategoryMutation.isPending ||
                updateStatusMutation.isPending ||
                !editName.trim() ||
                !editMainCategoryId
              }
            >
              {updateSubCategoryMutation.isPending || updateStatusMutation.isPending
                ? "Saving..."
                : "Save Changes"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SubCategoryPageIntegrated;