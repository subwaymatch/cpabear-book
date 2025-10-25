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
        "far/specialized-reporting/modified-cash-basis",
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
    "aud/intro",
    {
      type: "category",
      label: "Ethics, Professional Responsibilities, and General Principles",
      items: [
        "aud/ethics-professional-responsibilities-and-general-principles/code-of-professional-conduct",
        "aud/ethics-professional-responsibilities-and-general-principles/sec-pcaob-and-other-independence-rules",
        "aud/ethics-professional-responsibilities-and-general-principles/nature-and-scope-of-engagements",
        "aud/ethics-professional-responsibilities-and-general-principles/engagement-acceptance-and-terms",
        "aud/ethics-professional-responsibilities-and-general-principles/quality-management",
      ],
    },
    {
      type: "category",
      label: "Audit Planning and Risk Assessment",
      items: [
        "aud/audit-planning-and-risk-assessment/planning-the-audit",
        "aud/audit-planning-and-risk-assessment/understanding-the-entity-and-its-environment",
        "aud/audit-planning-and-risk-assessment/materiality",
        "aud/audit-planning-and-risk-assessment/risk-assessment-procedures",
        "aud/audit-planning-and-risk-assessment/fraud-risk",
        "aud/audit-planning-and-risk-assessment/compliance-with-laws-and-regulations",
      ],
    },
    {
      type: "category",
      label: "Internal Control",
      items: [
        "aud/internal-control/coso-framework",
        "aud/internal-control/information-technology-controls",
        "aud/internal-control/soc-reports",
      ],
    },
    {
      type: "category",
      label: "Audit Evidence and Procedures",
      items: [
        "aud/audit-evidence-and-procedures/audit-evidence",
        "aud/audit-evidence-and-procedures/tests-of-controls",
        "aud/audit-evidence-and-procedures/substantive-procedures",
        "aud/audit-evidence-and-procedures/analytical-procedures",
        "aud/audit-evidence-and-procedures/using-the-work-of-others",
      ],
    },
    {
      type: "category",
      label: "Audit Sampling",
      items: [
        "aud/audit-sampling/audit-sampling-concepts",
        "aud/audit-sampling/sampling-for-tests-of-controls",
        "aud/audit-sampling/sampling-for-substantive-tests",
      ],
    },
    {
      type: "category",
      label: "Auditing Specific Accounts and Transactions",
      items: [
        "aud/auditing-specific-accounts-and-transactions/auditing-cash-and-investments",
        "aud/auditing-specific-accounts-and-transactions/auditing-receivables-and-revenue",
        "aud/auditing-specific-accounts-and-transactions/auditing-inventory-and-cost-of-sales",
        "aud/auditing-specific-accounts-and-transactions/auditing-property-plant-and-equipment",
        "aud/auditing-specific-accounts-and-transactions/auditing-payables-and-expenses",
        "aud/auditing-specific-accounts-and-transactions/auditing-debt-and-equity",
        "aud/auditing-specific-accounts-and-transactions/auditing-accounting-estimates",
        "aud/auditing-specific-accounts-and-transactions/auditing-related-parties",
      ],
    },
    {
      type: "category",
      label: "Completing the Audit and Reporting",
      items: [
        "aud/completing-the-audit-and-reporting/subsequent-events",
        "aud/completing-the-audit-and-reporting/going-concern",
        "aud/completing-the-audit-and-reporting/written-representations",
        "aud/completing-the-audit-and-reporting/forming-an-opinion-and-reporting",
        "aud/completing-the-audit-and-reporting/audit-reports-unmodified-and-modified-opinions",
        "aud/completing-the-audit-and-reporting/emphasis-of-matter-and-other-matter-paragraphs",
        "aud/completing-the-audit-and-reporting/reporting-on-internal-control",
        "aud/completing-the-audit-and-reporting/communications-with-audit-committees",
      ],
    },
    {
      type: "category",
      label: "Attestation and Review Engagements",
      items: [
        "aud/attestation-and-review-engagements/attestation-engagements",
        "aud/attestation-and-review-engagements/accounting-and-review-services",
        "aud/attestation-and-review-engagements/governmental-auditing",
        "aud/attestation-and-review-engagements/reporting-on-compliance",
      ],
    },
  ],
};

export default sidebars;
