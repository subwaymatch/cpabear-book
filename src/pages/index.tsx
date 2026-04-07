import {
  BookOpen,
  FileText,
  Scale,
  Shield,
  Users,
  Calculator,
} from "lucide-react";
import { SectionCard } from "@site/src/components/SectionCard";
import styles from "./index.module.css";
import Layout from "@theme/Layout";

export default function App() {
  const sections = [
    {
      id: "far",
      title: "FAR",
      fullName: "Financial Accounting and Reporting",
      description:
        "Master GAAP, financial statements, and government/nonprofit accounting standards.",
      icon: FileText,
      color: "lime",
      link: "/far",
    },
    {
      id: "aud",
      title: "AUD",
      fullName: "Auditing and Attestation",
      description:
        "Learn audit procedures, professional standards, and attestation ethics.",
      icon: Shield,
      color: "blue",
      link: "/aud",
    },
    {
      id: "reg",
      title: "REG",
      fullName: "Regulation",
      description:
        "Study federal taxation, business law, and professional ethics.",
      icon: Scale,
      color: "emerald",
      link: "/reg",
    },
    {
      id: "isc",
      title: "ISC",
      fullName: "Information Systems and Controls",
      description:
        "Understand IT controls, cybersecurity, and data governance frameworks.",
      icon: Calculator,
      color: "orange",
      link: "/docs/isc",
    },
    {
      id: "tcp",
      title: "TCP",
      fullName: "Tax Compliance and Planning",
      description:
        "Deep dive into tax planning strategies and compliance requirements.",
      icon: BookOpen,
      color: "rose",
      link: "/docs/tcp",
    },
    {
      id: "bar",
      title: "BAR",
      fullName: "Business Analysis and Reporting",
      description:
        "Explore financial analysis, planning, and performance metrics.",
      icon: Users,
      color: "violet",
      link: "/docs/bar",
    },
  ];

  return (
    <Layout title="Home">
      <div className={styles.homePage}>
        <main className={styles.container}>
          {/* Hero Section */}
          <div className={styles.heroSection}>
            <h1 className={styles.heroTitle}>CPA Exam Preparation Textbook</h1>
            <p className={styles.heroSubtitle}>
              An experimental open-source textbook utilizing software
              engineering principles to provide a comprehensive and up-to-date
              resource for CPA exam candidates. This project is designed to be a
              living document, continuously updated to reflect the latest
              changes in the CPA exam content and structure, ensuring that
              students have access to the most relevant and effective study
              materials available.
            </p>
          </div>

          {/* Sections Grid */}
          <div className={styles.sectionsGrid}>
            {sections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </div>

          {/* Additional Info */}
          <div className={styles.infoBox}>
            <h2>Getting Started</h2>
            <p className={styles.infoDescription}>
              Each section contains detailed chapters, practice questions, and
              study guides designed to help you master the material and pass the
              CPA exam. The content is organized following the AICPA blueprint
              to ensure comprehensive coverage of all tested topics.
            </p>
            <div className={styles.infoBadges}>
              <div className={styles.badge}>
                <div className={styles.badgeDot}></div>
                <span>Updated for 2026</span>
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeDot}></div>
                <span>AICPA Blueprint Aligned</span>
              </div>
              <div className={styles.badge}>
                <div className={styles.badgeDot}></div>
                <span>Practice Questions Included</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
