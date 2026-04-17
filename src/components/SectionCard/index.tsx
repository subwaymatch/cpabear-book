import { LucideIcon, ArrowRight } from "lucide-react";
import styles from "./section-card.module.css";

export interface SectionCardProps {
  section: {
    id: string;
    title: string;
    fullName: string;
    description: string;
    icon: LucideIcon;
    color: "lime" | "blue" | "emerald" | "orange" | "rose" | "violet";
    link: string;
  };
}

export function SectionCard({ section }: SectionCardProps) {
  const Icon = section.icon;

  return (
    <a
      href={section.link}
      className={`${styles.sectionCard} ${styles[section.color]}`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} strokeWidth={2} />
        </div>

        <div className={styles.headerContent}>
          <div className={styles.titleRow}>
            <h3>{section.title}</h3>
            <ArrowRight className={styles.arrow} />
          </div>

          <p className={styles.subtitle}>{section.fullName}</p>
        </div>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.description}>{section.description}</p>
      </div>
    </a>
  );
}
