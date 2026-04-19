// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars = {
    farSidebar: [
        "far/index",
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
            items: ["far/equity/stockholders-equity", "far/equity/partnerships"],
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
            items: [
                "far/accounting-basics/types-of-accounts",
                "far/accounting-basics/adjusting-journal-entries",
            ],
        },
    ],
    audSidebar: [
        "aud/index",
        {
            type: "category",
            label: "Ethics, Professional Responsibilities, and General Principles",
            items: [
                "aud/ethics-professional-responsibilities-and-general-principles/code-of-professional-conduct",
                "aud/ethics-professional-responsibilities-and-general-principles/professional-skepticism-and-professional-judgment",
                "aud/ethics-professional-responsibilities-and-general-principles/sec-pcaob-and-other-independence-rules",
                "aud/ethics-professional-responsibilities-and-general-principles/nature-and-scope-of-engagements",
                "aud/ethics-professional-responsibilities-and-general-principles/engagement-acceptance-and-terms",
                "aud/ethics-professional-responsibilities-and-general-principles/engagement-documentation",
                "aud/ethics-professional-responsibilities-and-general-principles/communication-with-management-and-governance",
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
                "aud/internal-control/limitations-of-controls-and-management-override",
                "aud/internal-control/information-technology-controls",
                "aud/internal-control/soc-reports",
            ],
        },
        {
            type: "category",
            label: "Audit Evidence and Procedures",
            items: [
                "aud/audit-evidence-and-procedures/audit-evidence",
                "aud/audit-evidence-and-procedures/reliability-of-data-and-information",
                "aud/audit-evidence-and-procedures/tests-of-controls",
                "aud/audit-evidence-and-procedures/substantive-procedures",
                "aud/audit-evidence-and-procedures/analytical-procedures",
                "aud/audit-evidence-and-procedures/audit-data-analytics",
                "aud/audit-evidence-and-procedures/external-confirmations",
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
                "aud/auditing-specific-accounts-and-transactions/litigation-claims-and-assessments",
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
                "aud/completing-the-audit-and-reporting/supplementary-information",
                "aud/completing-the-audit-and-reporting/reporting-on-internal-control",
                "aud/completing-the-audit-and-reporting/communications-with-audit-committees",
                "aud/completing-the-audit-and-reporting/misstatements-and-internal-control-deficiencies",
                "aud/completing-the-audit-and-reporting/comparative-statements-and-consistency",
                "aud/completing-the-audit-and-reporting/other-information-in-audited-documents",
                "aud/completing-the-audit-and-reporting/review-of-interim-financial-information",
                "aud/completing-the-audit-and-reporting/special-purpose-frameworks",
            ],
        },
        {
            type: "category",
            label: "Attestation and Review Engagements",
            items: [
                "aud/attestation-and-review-engagements/attestation-engagements",
                "aud/attestation-and-review-engagements/accounting-and-review-services",
                "aud/attestation-and-review-engagements/governmental-auditing",
                "aud/attestation-and-review-engagements/uniform-guidance-for-single-audits",
                "aud/attestation-and-review-engagements/reporting-on-compliance",
            ],
        },
    ],
    regSidebar: [
        "reg/index",
        {
            type: "category",
            label: "Ethics, Professional Responsibilities, and Federal Tax Procedures",
            items: [
                "reg/ethics-and-federal-tax-procedures/ethics-and-responsibilities-in-tax-practice",
                "reg/ethics-and-federal-tax-procedures/licensing-and-disciplinary-systems",
                "reg/ethics-and-federal-tax-procedures/federal-tax-procedures",
                "reg/ethics-and-federal-tax-procedures/legal-duties-and-responsibilities",
            ],
        },
        {
            type: "category",
            label: "Business Law",
            items: [
                "reg/business-law/agency",
                "reg/business-law/contracts",
                "reg/business-law/debtor-creditor-relationships",
                "reg/business-law/government-regulation-of-business",
                "reg/business-law/business-structures",
                "reg/business-law/sales-article-of-the-ucc",
            ],
        },
        {
            type: "category",
            label: "Federal Taxation of Property Transactions",
            items: [
                "reg/property-transactions/determination-of-basis",
                "reg/property-transactions/gains-and-losses",
                "reg/property-transactions/cost-recovery-depreciation-and-amortization",
            ],
        },
        {
            type: "category",
            label: "Federal Taxation of Individuals",
            items: [
                "reg/taxation-of-individuals/gross-income",
                "reg/taxation-of-individuals/filing-status",
                "reg/taxation-of-individuals/adjustments-and-deductions",
                "reg/taxation-of-individuals/pass-through-entity-reporting",
                "reg/taxation-of-individuals/loss-limitations",
                "reg/taxation-of-individuals/tax-computation-and-credits",
                "reg/taxation-of-individuals/other-individual-taxes",
            ],
        },
        {
            type: "category",
            label: "Federal Taxation of Entities",
            items: [
                "reg/taxation-of-entities/book-tax-differences",
                "reg/taxation-of-entities/sole-proprietorship",
                "reg/taxation-of-entities/general-partnership",
                "reg/taxation-of-entities/limited-partnership",
                "reg/taxation-of-entities/limited-liability-company",
                "reg/taxation-of-entities/c-corporation",
                "reg/taxation-of-entities/s-corporation",
                "reg/taxation-of-entities/tax-exempt-organizations",
                "reg/taxation-of-entities/state-and-local-taxation",
                "reg/taxation-of-entities/venture-capital-and-emerging-growth-structures",
            ],
        },
    ],
    barSidebar: [
        "bar/index",
        {
            type: "category",
            label: "Business Analysis",
            items: [
                "bar/business-analysis/financial-statement-analysis",
                "bar/business-analysis/non-financial-and-non-gaap-measures",
                "bar/business-analysis/managerial-and-cost-accounting",
                "bar/business-analysis/budgeting-forecasting-and-projection",
                "bar/business-analysis/capital-structure",
                "bar/business-analysis/investment-alternatives",
                "bar/business-analysis/risk-management",
                "bar/business-analysis/economic-and-market-influences",
            ],
        },
        {
            type: "category",
            label: "Technical Accounting and Reporting",
            items: [
                "bar/technical-accounting-and-reporting/indefinite-lived-intangible-assets",
                "bar/technical-accounting-and-reporting/internally-developed-software",
                "bar/technical-accounting-and-reporting/revenue-recognition",
                "bar/technical-accounting-and-reporting/stock-compensation",
                "bar/technical-accounting-and-reporting/research-and-development-costs",
                "bar/technical-accounting-and-reporting/business-combinations",
                "bar/technical-accounting-and-reporting/consolidated-financial-statements",
                "bar/technical-accounting-and-reporting/derivatives-and-hedge-accounting",
                "bar/technical-accounting-and-reporting/leases",
                "bar/technical-accounting-and-reporting/public-company-reporting-topics",
                "bar/technical-accounting-and-reporting/employee-benefit-plans",
            ],
        },
        {
            type: "category",
            label: "State and Local Governments",
            items: [
                "bar/state-and-local-governments/government-wide-financial-statements",
                "bar/state-and-local-governments/governmental-funds-financial-statements",
                "bar/state-and-local-governments/proprietary-funds-financial-statements",
                "bar/state-and-local-governments/fiduciary-funds-financial-statements",
                "bar/state-and-local-governments/notes-to-financial-statements",
                "bar/state-and-local-governments/managements-discussion-and-analysis",
                "bar/state-and-local-governments/budgetary-comparison-reporting",
                "bar/state-and-local-governments/required-supplementary-information",
                "bar/state-and-local-governments/financial-reporting-entity",
                "bar/state-and-local-governments/deriving-government-wide-financial-statements",
                "bar/state-and-local-governments/net-position-and-components",
                "bar/state-and-local-governments/fund-balances-and-components",
                "bar/state-and-local-governments/capital-assets-and-infrastructure",
                "bar/state-and-local-governments/general-and-proprietary-long-term-liabilities",
                "bar/state-and-local-governments/interfund-activity-and-transfers",
                "bar/state-and-local-governments/nonexchange-revenue-transactions",
                "bar/state-and-local-governments/expenditures-and-expenses",
                "bar/state-and-local-governments/budgetary-accounting-and-encumbrances",
            ],
        },
    ],
    iscSidebar: [
        "isc/index",
        {
            type: "category",
            label: "Information Systems and Data Management",
            items: [
                "isc/information-systems-and-data-management/it-infrastructure",
                "isc/information-systems-and-data-management/enterprise-and-accounting-information-systems",
                "isc/information-systems-and-data-management/availability",
                "isc/information-systems-and-data-management/change-management",
                "isc/information-systems-and-data-management/data-management",
            ],
        },
        {
            type: "category",
            label: "Security, Confidentiality, and Privacy",
            items: [
                "isc/security-confidentiality-and-privacy/regulations-standards-and-frameworks",
                "isc/security-confidentiality-and-privacy/threats-and-attacks",
                "isc/security-confidentiality-and-privacy/mitigation",
                "isc/security-confidentiality-and-privacy/security-testing",
                "isc/security-confidentiality-and-privacy/confidentiality-and-privacy",
                "isc/security-confidentiality-and-privacy/incident-response",
            ],
        },
        {
            type: "category",
            label: "System and Organization Controls (SOC) Engagements",
            items: [
                "isc/soc-engagements/planning-and-performing-soc-engagements",
                "isc/soc-engagements/reporting-on-soc-engagements",
            ],
        },
    ],
    tcpSidebar: [
        "tcp/index",
        {
            type: "category",
            label: "Tax Compliance and Planning for Individuals and Personal Financial Planning",
            items: [
                "tcp/individual-tax-compliance-and-planning/individual-compliance-and-tax-planning",
                "tcp/individual-tax-compliance-and-planning/passive-activity-and-at-risk-loss-limitations",
                "tcp/individual-tax-compliance-and-planning/gift-taxation",
                "tcp/individual-tax-compliance-and-planning/personal-financial-planning",
            ],
        },
        {
            type: "category",
            label: "Entity Tax Compliance",
            items: [
                "tcp/entity-tax-compliance/c-corporations",
                "tcp/entity-tax-compliance/s-corporations",
                "tcp/entity-tax-compliance/partnerships",
                "tcp/entity-tax-compliance/trusts",
                "tcp/entity-tax-compliance/tax-exempt-organizations",
            ],
        },
        {
            type: "category",
            label: "Entity Tax Planning",
            items: [
                "tcp/entity-tax-planning/formation-and-liquidation",
                "tcp/entity-tax-planning/tax-planning-for-c-corporations",
                "tcp/entity-tax-planning/tax-planning-for-s-corporations",
                "tcp/entity-tax-planning/tax-planning-for-partnerships",
            ],
        },
        {
            type: "category",
            label: "Property Transactions (Disposition of Assets)",
            items: [
                "tcp/property-transactions/nontaxable-disposition-of-assets",
                "tcp/property-transactions/gains-and-losses-on-asset-disposition",
                "tcp/property-transactions/related-party-transactions",
            ],
        },
    ],
};
export default sidebars;
