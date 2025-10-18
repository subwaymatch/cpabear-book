import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  farSidebar: [
    "far/intro",
    {
      type: "category",
      label: "Introduction and Conceptual Framework",
      items: [
        "far/introduction-and-conceptual-framework/introduction",
        "far/introduction-and-conceptual-framework/conceptual-framework",
      ],
    },
    {
      type: "category",
      label: "Financial Statement Presentation",
      items: [
        "far/financial-statement-presentation/income-statement",
        "far/financial-statement-presentation/comprehensive-income",
        "far/financial-statement-presentation/balance-sheet",
        "far/financial-statement-presentation/statement-of-cash-flows",
        "far/financial-statement-presentation/statement-of-changes-in-stockholders-equity",
        "far/financial-statement-presentation/notes-to-financial-statements",
      ],
    },
    {
      type: "category",
      label: "Assets",
      items: [
        "far/assets/cash-and-receivables",
        "far/assets/inventory",
        "far/assets/property-plant-and-equipment",
        "far/assets/investments",
        "far/assets/intangible-assets",
      ],
    },
    {
      type: "category",
      label: "Liabilities",
      items: [
        "far/liabilities/current-liabilities-and-contingencies",
        "far/liabilities/long-term-liabilities-and-bonds",
      ],
    },
    {
      type: "category",
      label: "Equity",
      items: ["far/equity/stockholders-equity"],
    },
    {
      type: "category",
      label: "Special Topics and Transactions",
      items: [
        "far/special-topics-and-transactions/revenue-recognition",
        "far/special-topics-and-transactions/lease-accounting",
        "far/special-topics-and-transactions/accounting-for-income-taxes",
        "far/special-topics-and-transactions/accounting-changes-and-error-corrections",
        "far/special-topics-and-transactions/business-combinations",
        "far/special-topics-and-transactions/consolidated-financial-statements",
        "far/special-topics-and-transactions/foreign-currency-issues",
        "far/special-topics-and-transactions/subsequent-events",
        "far/special-topics-and-transactions/fair-value-measurement",
      ],
    },
    {
      type: "category",
      label: "Specialized Reporting",
      items: [
        "far/specialized-reporting/not-for-profit-accounting",
        "far/specialized-reporting/governmental-accounting",
        "far/specialized-reporting/public-company-reporting",
        "far/specialized-reporting/financial-ratio-analysis",
      ],
    },
    {
      type: "category",
      label: "Accounting Basics",
      items: ["far/accounting-basics/types-of-accounts"],
    },
  ],
  audSidebar: [
    {
      type: "category",
      label: "Audit",
      items: ["aud/intro"],
    },
  ],
};

export default sidebars;
