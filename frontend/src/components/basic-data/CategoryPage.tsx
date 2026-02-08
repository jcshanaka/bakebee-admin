import { useState } from "react";
import { Modal } from "../ui/modal";
import { useModal } from "../../hooks/useModal";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Switch from "../form/switch/Switch";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import { PlusIcon } from "../../icons";

type CategoryRow = {
  id: string;
  category_name: string;
  is_active: boolean;
};

const seedCategories: CategoryRow[] = [
  {
    id: "c-1",
    category_name: "Breads",
    is_active: true,
  },
  {
    id: "c-2",
    category_name: "Pastries",
    is_active: true,
  },
  {
    id: "c-3",
    category_name: "Cakes",
    is_active: false,
  },
];

const CategoryPage = () => {
  const addModal = useModal();
  const editModal = useModal();

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryActive, setNewCategoryActive] = useState(true);
  const [editCategory, setEditCategory] = useState<CategoryRow | null>(null);
  const [editName, setEditName] = useState("");
  const [editActive, setEditActive] = useState(true);

  const handleOpenEdit = (category: CategoryRow) => {
    setEditCategory(category);
    setEditName(category.category_name);
    setEditActive(category.is_active);
    editModal.openModal();
  };

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
              {seedCategories.map((category) => (
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
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
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
            <Button variant="outline" size="sm" onClick={addModal.closeModal}>
              Cancel
            </Button>
            <Button size="sm" onClick={addModal.closeModal}>
              Save Category
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
            <Button variant="outline" size="sm" onClick={editModal.closeModal}>
              Cancel
            </Button>
            <Button size="sm" onClick={editModal.closeModal}>
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CategoryPage;
