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
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Introduction and Conceptual Framework",
      items: [
        "introduction-and-conceptual-framework/introduction",
        "introduction-and-conceptual-framework/conceptual-framework",
      ],
    },
    {
      type: "category",
      label: "Financial Statement Presentation",
      items: [
        "financial-statement-presentation/income-statement",
        "financial-statement-presentation/comprehensive-income",
        "financial-statement-presentation/balance-sheet",
        "financial-statement-presentation/statement-of-cash-flows",
        "financial-statement-presentation/statement-of-changes-in-stockholders-equity",
        "financial-statement-presentation/notes-to-financial-statements",
      ],
    },
    {
      type: "category",
      label: "Assets",
      items: [
        "assets/cash-and-receivables",
        "assets/inventory",
        "assets/property-plant-and-equipment",
        "assets/investments",
        "assets/intangible-assets",
      ],
    },
    {
      type: "category",
      label: "Liabilities",
      items: [
        "liabilities/current-liabilities-and-contingencies",
        "liabilities/long-term-liabilities-and-bonds",
      ],
    },
    {
      type: "category",
      label: "Equity",
      items: ["equity/stockholders-equity"],
    },
    {
      type: "category",
      label: "Special Topics and Transactions",
      items: [
        "special-topics-and-transactions/revenue-recognition",
        "special-topics-and-transactions/lease-accounting",
        "special-topics-and-transactions/accounting-for-income-taxes",
        "special-topics-and-transactions/accounting-changes-and-error-corrections",
        "special-topics-and-transactions/business-combinations",
        "special-topics-and-transactions/consolidated-financial-statements",
        "special-topics-and-transactions/foreign-currency-issues",
        "special-topics-and-transactions/subsequent-events",
        "special-topics-and-transactions/fair-value-measurement",
      ],
    },
    {
      type: "category",
      label: "Specialized Reporting",
      items: [
        "specialized-reporting/not-for-profit-accounting",
        "specialized-reporting/governmental-accounting",
        "specialized-reporting/public-company-reporting",
        "specialized-reporting/financial-ratio-analysis",
      ],
    },
  ],
};

export default sidebars;
