import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import CategoryPage from "../../components/basic-data/CategoryPage";
import SubCategoryPage from "../../components/basic-data/SubCategoryPage";

const tabs = [
  { id: "categories", label: "Categories" },
  { id: "subcategories", label: "Sub Categories" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const BasicDataPage = () => {
  const [activeTab, setActiveTab] = useState<TabId>("categories");

  const tabButtonClass = (tabId: TabId) =>
    activeTab === tabId
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

  return (
    <>
      <PageMeta title="Basic Data" description="Manage categories and sub categories" />
      <PageBreadcrumb pageTitle="Basic Data" />

      <ComponentCard title="Basic Data" desc="Manage categories and sub categories">
        <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white ${tabButtonClass(
                tab.id
              )}`}
              aria-pressed={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "categories" && <CategoryPage />}

        {activeTab === "subcategories" && <SubCategoryPage />}
      </ComponentCard>
    </>
  );
};

export default BasicDataPage;
