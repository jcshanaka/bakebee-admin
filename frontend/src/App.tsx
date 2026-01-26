import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import FinancialPage from "./pages/Financial/FinancialPage";

type FinancialRouteConfig = {
  path: string;
  title: string;
  description: string;
  details?: string[];
};

const financialRoutes: FinancialRouteConfig[] = [
  {
    path: "/financial/dashboard",
    title: "Financial Dashboard",
    description: "Overview of key financial metrics for the business.",
    details: [
      "Financial summary view",
      "Quick stats (total income, expenses, profit)",
      "Recent transactions",
    ],
  },
  {
    path: "/financial/summary",
    title: "Financial Summary",
    description: "Aggregate income, expenses, and profit with period trends.",
    details: [
      "Income vs. expense totals",
      "Profitability snapshots",
      "Period comparisons",
    ],
  },
  {
    path: "/financial/quick-stats",
    title: "Quick Stats",
    description: "Snapshot of headline KPIs for fast checks.",
    details: [
      "Total income, expenses, profit",
      "Period-over-period deltas",
      "Highlight of anomalies",
    ],
  },
  {
    path: "/financial/recent-transactions",
    title: "Recent Transactions",
    description: "Latest recorded income and expense activity.",
    details: [
      "Newest entries first",
      "Links to full transaction details",
      "Filter by source or category",
    ],
  },
  {
    path: "/financial/income/add",
    title: "Add Income",
    description: "Capture a new income entry including category and payment method.",
    details: [
      "Attach supporting notes",
      "Assign category and tags",
      "Select payment method",
    ],
  },
  {
    path: "/financial/income",
    title: "All Income",
    description: "Browse, filter, and manage recorded income entries.",
    details: [
      "Search by keyword or amount",
      "Filter by category",
      "Export or bulk edit",
    ],
  },
  {
    path: "/financial/income/by-category",
    title: "Income by Category",
    description: "Break down income totals by category.",
    details: [
      "Category-level totals",
      "Trend comparisons",
      "Category contribution share",
    ],
  },
  {
    path: "/financial/income/by-payment-method",
    title: "Income by Payment Method",
    description: "View income grouped by payment method.",
    details: [
      "Cash vs. digital split",
      "Payment method performance",
      "Method-specific trends",
    ],
  },
  {
    path: "/financial/expenses/add",
    title: "Add Expense",
    description: "Record a new expense with category and payment details.",
    details: [
      "Attach receipts",
      "Assign cost centers or tags",
      "Select payment method",
    ],
  },
  {
    path: "/financial/expenses",
    title: "All Expenses",
    description: "Browse, filter, and manage recorded expenses.",
    details: [
      "Search by vendor or amount",
      "Filter by category",
      "Export or bulk edit",
    ],
  },
  {
    path: "/financial/expenses/by-category",
    title: "Expenses by Category",
    description: "Break down expenses by category for spend insights.",
    details: [
      "Category-level spend",
      "Budget vs. actual checks",
      "Category contribution share",
    ],
  },
  {
    path: "/financial/expenses/by-payment-method",
    title: "Expenses by Payment Method",
    description: "View expenses grouped by payment method.",
    details: [
      "Cash vs. bank transfer split",
      "Card vs. mobile payments",
      "Method-specific trends",
    ],
  },
  {
    path: "/financial/expenses/pending-payments",
    title: "Pending Payments",
    description: "Track expenses that are approved but not yet paid.",
    details: [
      "Due dates and status",
      "Assigned payment methods",
      "Approval and settlement notes",
    ],
  },
  {
    path: "/financial/transactions",
    title: "All Transactions",
    description: "Combined view of income and expenses.",
    details: [
      "Unified ledger view",
      "Sort and filter by type",
      "Inline drill-down",
    ],
  },
  {
    path: "/financial/transactions/history",
    title: "Transaction History",
    description: "Historical ledger with filters and exports.",
    details: [
      "Date-range filtering",
      "Audit-friendly exports",
      "Immutable log overview",
    ],
  },
  {
    path: "/financial/transactions/search",
    title: "Search Transactions",
    description: "Search across all income and expense entries.",
    details: [
      "Keyword and amount search",
      "Advanced filters",
      "Saveable searches",
    ],
  },
  {
    path: "/financial/cash-flow/statement",
    title: "Cash Flow Statement",
    description: "Track cash inflows and outflows across periods.",
    details: [
      "Operating, investing, financing views",
      "Net cash movement",
      "Period comparisons",
    ],
  },
  {
    path: "/financial/cash-flow/balance",
    title: "Opening/Closing Balance",
    description: "Monitor starting and ending balances for each period.",
    details: [
      "Opening balance roll-forward",
      "Closing balance validation",
      "Variance explanations",
    ],
  },
  {
    path: "/financial/cash-flow/cash-on-hand",
    title: "Cash on Hand",
    description: "Current physical cash position.",
    details: [
      "Location or till breakdown",
      "Denomination tracking",
      "Daily reconciliation notes",
    ],
  },
  {
    path: "/financial/cash-flow/bank-balance",
    title: "Bank Balance",
    description: "Live or reconciled bank balances across accounts.",
    details: [
      "Account-level balances",
      "Reconciliation status",
      "Statement vs. ledger deltas",
    ],
  },
  {
    path: "/financial/categories/income",
    title: "Manage Income Categories",
    description: "Add, edit, or delete income categories.",
    details: [
      "Category hierarchy",
      "Deactivate without losing history",
      "Merge or rename with audit",
    ],
  },
  {
    path: "/financial/categories/expenses",
    title: "Manage Expense Categories",
    description: "Manage expense category taxonomy.",
    details: [
      "Budget-aligned categories",
      "Deactivate or merge",
      "Audit notes on changes",
    ],
  },
  {
    path: "/financial/payment-methods",
    title: "Manage Payment Methods",
    description: "Configure payment methods such as cash, bank transfer, mobile payment, and credit.",
    details: [
      "Enable/disable methods",
      "Default method preferences",
      "Method-specific notes",
    ],
  },
];

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Financial Management */}
            {financialRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <FinancialPage
                    title={route.title}
                    description={route.description}
                    details={route.details}
                  />
                }
              />
            ))}

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
