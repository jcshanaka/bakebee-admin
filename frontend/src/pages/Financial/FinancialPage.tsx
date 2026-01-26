import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

type FinancialPageProps = {
  title: string;
  description: string;
  details?: string[];
};

const FinancialPage = ({ title, description, details = [] }: FinancialPageProps) => {
  return (
    <div>
      <PageMeta
        title={`${title} | Financial Management`}
        description={description}
      />
      <PageBreadcrumb pageTitle={title} />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[720px]">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            {title}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            {description}
          </p>

          {details.length > 0 ? (
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              {details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FinancialPage;
