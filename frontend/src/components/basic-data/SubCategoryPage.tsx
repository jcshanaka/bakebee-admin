import { useState } from "react";
import { Modal } from "../ui/modal";
import { useModal } from "../../hooks/useModal";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";
import Switch from "../form/switch/Switch";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import { PlusIcon } from "../../icons";

type SubCategoryRow = {
  id: string;
  sub_category_name: string;
  main_category_id: string;
  main_category_name: string;
  is_active: boolean;
};

type CategoryOption = {
  id: string;
  label: string;
};

const seedCategories: CategoryOption[] = [
  { id: "c-1", label: "Breads" },
  { id: "c-2", label: "Pastries" },
  { id: "c-3", label: "Cakes" },
];

const seedSubCategories: SubCategoryRow[] = [
  {
    id: "sc-1",
    sub_category_name: "Sourdough",
    main_category_id: "c-1",
    main_category_name: "Breads",
    is_active: true,
  },
  {
    id: "sc-2",
    sub_category_name: "Croissants",
    main_category_id: "c-2",
    main_category_name: "Pastries",
    is_active: true,
  },
  {
    id: "sc-3",
    sub_category_name: "Cheesecake",
    main_category_id: "c-3",
    main_category_name: "Cakes",
    is_active: false,
  },
];

const SubCategoryPage = () => {
  const addModal = useModal();
  const editModal = useModal();

  const [newName, setNewName] = useState("");
  const [newCategoryId, setNewCategoryId] = useState("");
  const [newActive, setNewActive] = useState(true);

  const [editRow, setEditRow] = useState<SubCategoryRow | null>(null);
  const [editName, setEditName] = useState("");
  const [editCategoryId, setEditCategoryId] = useState("");
  const [editActive, setEditActive] = useState(true);

  const handleOpenEdit = (row: SubCategoryRow) => {
    setEditRow(row);
    setEditName(row.sub_category_name);
    setEditCategoryId(row.main_category_id);
    setEditActive(row.is_active);
    editModal.openModal();
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-end gap-3">
        <Button size="sm" onClick={addModal.openModal} startIcon={<PlusIcon />}>
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
                  Category
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
              {seedSubCategories.map((row) => (
                <TableRow key={row.id} className="bg-white dark:bg-white/[0.02]">
                  <TableCell className="px-5 py-4 font-medium text-gray-900 dark:text-white/90">
                    {row.sub_category_name}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    {row.main_category_name}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        row.is_active
                          ? "bg-success-50 text-success-700 dark:bg-success-500/10 dark:text-success-400"
                          : "bg-gray-100 text-gray-600 dark:bg-white/[0.08] dark:text-gray-300"
                      }`}
                    >
                      {row.is_active ? "Active" : "Inactive"}
                    </span>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-end">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleOpenEdit(row)}
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
              Add Sub Category
            </h4>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Create a new sub category under a main category.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <Label htmlFor="sub-category-name">Sub Category Name</Label>
              <Input
                id="sub-category-name"
                placeholder="e.g. Sourdough"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="sub-category-parent">Main Category</Label>
              <Select
                options={seedCategories.map((category) => ({
                  value: category.id,
                  label: category.label,
                }))}
                placeholder="Select category"
                defaultValue={newCategoryId}
                onChange={setNewCategoryId}
                className="w-full"
              />
            </div>

            <div>
              <Switch
                key={`add-sub-${newActive ? "on" : "off"}`}
                label="Active"
                defaultChecked={newActive}
                onChange={setNewActive}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-end gap-3">
            <Button variant="outline" size="sm" onClick={addModal.closeModal}>
              Cancel
            </Button>
            <Button size="sm" onClick={addModal.closeModal}>
              Save Sub Category
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
              Update sub category details and activation status.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <Label htmlFor="edit-sub-category-name">Sub Category Name</Label>
              <Input
                id="edit-sub-category-name"
                placeholder="e.g. Sourdough"
                value={editName}
                onChange={(event) => setEditName(event.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="edit-sub-category-parent">Main Category</Label>
              <Select
                options={seedCategories.map((category) => ({
                  value: category.id,
                  label: category.label,
                }))}
                placeholder="Select category"
                defaultValue={editCategoryId}
                onChange={setEditCategoryId}
                className="w-full"
              />
            </div>

            <div>
              <Switch
                key={editRow?.id || "edit-sub"}
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

export default SubCategoryPage;
