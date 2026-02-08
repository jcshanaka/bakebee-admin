import { useEffect, useMemo, useState } from "react";
import {
  CheckCircleIcon,
  BoxIcon,
  PlusIcon,
  DownloadIcon,
  TrashBinIcon,
} from "../../icons";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "../../components/ui/table";
import DatePicker from "../../components/form/date-picker";

type Product = {
  id: string;
  name: string;
  price: number;
};

type SaleItem = {
  id: string;
  productId?: string;
  name: string;
  qty: number;
  unitPrice: number;
  total: number;
};

const fallbackProducts: Product[] = [
  { id: "1", name: "Choon Paan", price: 25 },
  { id: "2", name: "Plain Bread", price: 120 },
  { id: "3", name: "Fish Bun", price: 35 },
  { id: "4", name: "Chicken Roll", price: 80 },
  { id: "5", name: "Vegetable Patty", price: 40 },
];

const storage = (window as any)?.storage;

const buildItemsFromProducts = (productList: Product[]): SaleItem[] =>
  productList.map((p) => ({
    id: crypto.randomUUID(),
    productId: p.id,
    name: p.name,
    qty: 0,
    unitPrice: p.price,
    total: 0,
  }));

const parseJson = <T,>(value: string | null, fallback: T): T => {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    console.error("Failed to parse JSON", error);
    return fallback;
  }
};

const DailySalesTablePage = () => {
  const [saleDate, setSaleDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [items, setItems] = useState<SaleItem[]>(buildItemsFromProducts(fallbackProducts));
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadProductsAndSale = async () => {
      let productList = fallbackProducts;

      try {
        const storedProducts = storage
          ? await storage.get("products")
          : null;
        if (storedProducts?.value) {
          productList = parseJson<Product[]>(storedProducts.value, fallbackProducts);
          setProducts(productList);
        } else {
          setProducts(fallbackProducts);
          if (storage) {
            await storage.set("products", JSON.stringify(fallbackProducts));
          }
        }
      } catch (error) {
        console.error("Error loading products", error);
        setProducts(fallbackProducts);
      }

      try {
        const saleResult = storage
          ? await storage.get(`daily-sale-${saleDate}`)
          : null;
        if (saleResult?.value) {
          const saved = parseJson<{ items: SaleItem[] }>(saleResult.value, {
            items: [],
          });
          if (saved.items.length) {
            setItems(
              saved.items.map((item) => ({
                ...item,
                id: crypto.randomUUID(),
                total: item.qty * item.unitPrice,
              }))
            );
            return;
          }
        }
      } catch (error) {
        console.warn("No saved sale for date", error);
      }

      setItems(buildItemsFromProducts(productList));
    };

    loadProductsAndSale();
  }, [saleDate]);

  const handleQtyChange = (id: string, value: string) => {
    const qty = parseFloat(value) || 0;
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty, total: qty * item.unitPrice }
          : item
      )
    );
  };

  const handlePriceChange = (id: string, value: string) => {
    const price = parseFloat(value) || 0;
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, unitPrice: price, total: price * item.qty }
          : item
      )
    );
  };

  const handleNameChange = (id: string, value: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const productMatch = products.find((p) => p.name === value);
        if (productMatch) {
          return {
            ...item,
            name: productMatch.name,
            productId: productMatch.id,
            unitPrice: productMatch.price,
            total: productMatch.price * item.qty,
          };
        }
        return { ...item, name: value };
      })
    );
  };

  const addRow = () => {
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: "",
        qty: 0,
        unitPrice: 0,
        total: 0,
      },
    ]);
  };

  const removeRow = (id: string) => {
    if (window.confirm("Remove this item?")) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const grandTotal = useMemo(
    () => items.reduce((sum, item) => sum + (item.total || 0), 0),
    [items]
  );

  const addNewProduct = async () => {
    if (!newProductName.trim() || !newProductPrice) {
      alert("Please enter product name and price");
      return;
    }

    const price = parseFloat(newProductPrice);
    if (Number.isNaN(price)) {
      alert("Invalid price");
      return;
    }

    const newProduct: Product = {
      id: crypto.randomUUID(),
      name: newProductName.trim(),
      price,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);

    if (storage) {
      await storage.set("products", JSON.stringify(updatedProducts));
    }

    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        productId: newProduct.id,
        name: newProduct.name,
        qty: 0,
        unitPrice: newProduct.price,
        total: 0,
      },
    ]);

    setNewProductName("");
    setNewProductPrice("");
    setShowAddProduct(false);
  };

  const handleSave = async () => {
    if (grandTotal === 0) {
      alert("Please enter at least one sale");
      return;
    }

    setIsSaving(true);
    const filteredItems = items.filter((item) => item.qty > 0);

    try {
      if (storage) {
        const saleData = {
          date: saleDate,
          items: filteredItems,
          total: grandTotal,
          savedAt: new Date().toISOString(),
        };
        await storage.set(`daily-sale-${saleDate}`, JSON.stringify(saleData));

        let transactions: any[] = [];
        try {
          const txResult = await storage.get("transactions");
          transactions = txResult?.value
            ? parseJson<any[]>(txResult.value, [])
            : [];
        } catch (error) {
          transactions = [];
        }

        const existingIndex = transactions.findIndex(
          (t) =>
            t.type === "income" &&
            t.date === saleDate &&
            t.category === "Daily Sales"
        );

        const transaction = {
          id:
            existingIndex >= 0 ? transactions[existingIndex].id : crypto.randomUUID(),
          type: "income",
          date: saleDate,
          amount: grandTotal,
          category: "Daily Sales",
          paymentMethod: "Cash",
          description: `Daily sales for ${saleDate}`,
          createdAt: new Date().toISOString(),
        };

        if (existingIndex >= 0) {
          transactions[existingIndex] = transaction;
        } else {
          transactions.push(transaction);
        }

        await storage.set("transactions", JSON.stringify(transactions));
      }

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2800);
    } catch (error) {
      console.error("Error saving sale", error);
      alert("Failed to save sale. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <PageMeta
        title="Daily Sales | Financial Management"
        description="Record bakery daily sales and sync to transactions."
      />
      <PageBreadcrumb pageTitle="Daily Sales" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-10">
        <header className="mb-6 flex justify-end">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Date
            </label>
            <div className="min-w-[200px]">
              <DatePicker
                id="sale-date"
                defaultDate={saleDate}
                onChange={(selectedDates) => {
                  if (selectedDates.length > 0) {
                    setSaleDate(selectedDates[0].toISOString().split("T")[0]);
                  }
                }}
                placeholder="Select date"
              />
            </div>
          </div>
        </header>

        {showSuccess && (
          <div className="mb-4 flex items-center gap-3 rounded-lg border border-success-200 bg-success-50 px-4 py-3 text-success-900">
            <CheckCircleIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Daily sales saved successfully.</span>
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-white/[0.05] dark:bg-white/[0.03]">
          <div className="max-w-full overflow-x-auto">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05] bg-gray-50 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-200">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400"
                  >
                    Item
                  </TableCell>
                  <TableCell
                    isHeader
                    className="w-28 px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400"
                  >
                    Qty
                  </TableCell>
                  <TableCell
                    isHeader
                    className="w-36 px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400"
                  >
                    Unit Price (LKR)
                  </TableCell>
                  <TableCell
                    isHeader
                    className="w-36 px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400"
                  >
                    Total
                  </TableCell>
                  <TableCell
                    isHeader
                    className="w-24 px-5 py-3 text-center font-medium text-theme-xs text-gray-500 dark:text-gray-400"
                  >
                    Remove
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-100 text-theme-sm text-gray-800 dark:divide-white/[0.05] dark:text-white/90">
                {items.map((item) => (
                  <TableRow key={item.id} className="bg-white hover:bg-brand-50/40 dark:bg-white/[0.02]">
                    <TableCell className="px-5 py-4 align-top">
                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => handleNameChange(item.id, e.target.value)}
                          list={`products-${item.id}`}
                          placeholder="Type or select product"
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                        />
                        <datalist id={`products-${item.id}`}>
                          {products.map((p) => (
                            <option key={p.id} value={p.name} />
                          ))}
                        </datalist>
                      </div>
                    </TableCell>
                    <TableCell className="px-5 py-4 align-top">
                      <input
                        type="number"
                        min={0}
                        value={item.qty || ""}
                        onChange={(e) => handleQtyChange(item.id, e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                        placeholder="0"
                      />
                    </TableCell>
                    <TableCell className="px-5 py-4 align-top">
                      <input
                        type="number"
                        min={0}
                        step="0.01"
                        value={item.unitPrice || ""}
                        onChange={(e) => handlePriceChange(item.id, e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                        placeholder="0.00"
                      />
                    </TableCell>
                    <TableCell className="px-5 py-4 align-top text-lg font-semibold text-brand-600 dark:text-brand-400">
                      LKR {item.total.toFixed(2)}
                    </TableCell>
                    <TableCell className="px-5 py-4 align-top text-center">
                      <button
                        onClick={() => removeRow(item.id)}
                        className="inline-flex items-center justify-center rounded-full bg-error-50 p-2 text-error-600 transition hover:bg-error-100"
                        aria-label="Remove row"
                      >
                        <TrashBinIcon className="h-4 w-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50 px-4 py-3 dark:border-white/[0.05] dark:bg-gray-900/60 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={addRow}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                <PlusIcon className="h-4 w-4 text-white" />
                Add Row
              </button>
              <button
                onClick={() => setShowAddProduct((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-white dark:border-gray-700 dark:text-white/90 dark:hover:bg-gray-800"
              >
                <BoxIcon className="h-4 w-4 text-gray-800 dark:text-white/90" />
                {showAddProduct ? "Hide" : "Add Product"}
              </button>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-wide text-gray-500">Grand Total</p>
              <p className="text-2xl font-bold text-brand-600">
                LKR {grandTotal.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {showAddProduct && (
          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">Add New Product</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Product Name
                </label>
                <input
                  type="text"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                  placeholder="e.g., Sausage Bun"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Default Price (LKR)
                </label>
                <input
                  type="number"
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(e.target.value)}
                  min={0}
                  step="0.01"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="mt-3 flex gap-3">
              <button
                onClick={addNewProduct}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                <PlusIcon className="h-4 w-4 text-white" />
                Add Product
              </button>
              <button
                onClick={() => setShowAddProduct(false)}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-white dark:border-gray-700 dark:text-white/90 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:opacity-70"
          >
            <DownloadIcon className="h-5 w-5" />
            {isSaving ? "Saving..." : "Save Daily Sales"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailySalesTablePage;
