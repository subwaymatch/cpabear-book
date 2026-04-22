import { useEffect, useState } from "react";
import {
  BookOpen,
  FileText,
  Scale,
  Shield,
  Users,
  Calculator,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  type SectionCardProps,
  SectionCard,
} from "@site/src/components/SectionCard";
import styles from "./index.module.css";
import Layout from "@theme/Layout";

const ROTATING_WORDS = [
  "FAR",
  "AUD",
  "REG",
  "ISC",
  "TCP",
  "BAR",
  "the CPA Exam",
];

const FLOATING_SYMBOLS = [
  { char: "$", top: "12%", left: "6%", delay: "0s", duration: "14s" },
  { char: "%", top: "22%", left: "88%", delay: "2s", duration: "18s" },
  { char: "Σ", top: "68%", left: "4%", delay: "4s", duration: "16s" },
  { char: "∫", top: "78%", left: "92%", delay: "1s", duration: "20s" },
  { char: "π", top: "44%", left: "94%", delay: "3s", duration: "15s" },
  { char: "§", top: "8%", left: "46%", delay: "5s", duration: "19s" },
  { char: "¢", top: "86%", left: "40%", delay: "2.5s", duration: "17s" },
  { char: "€", top: "34%", left: "2%", delay: "6s", duration: "21s" },
];

const TICKER_TERMS = [
  "GAAP",
  "IFRS",
  "FASB",
  "AICPA",
  "SOX",
  "COSO",
  "EBITDA",
  "ASC 606",
  "ASC 842",
  "GASB",
  "PCAOB",
  "IRS §263A",
];

export default function App() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const sections: SectionCardProps["section"][] = [
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
      link: "/isc",
    },
    {
      id: "tcp",
      title: "TCP",
      fullName: "Tax Compliance and Planning",
      description:
        "Deep dive into tax planning strategies and compliance requirements.",
      icon: BookOpen,
      color: "rose",
      link: "/tcp",
    },
    {
      id: "bar",
      title: "BAR",
      fullName: "Business Analysis and Reporting",
      description:
        "Explore financial analysis, planning, and performance metrics.",
      icon: Users,
      color: "violet",
      link: "/bar",
    },
  ];

  return (
    <Layout title="Home">
      <div className={styles.homePage}>
        {/* Hero Section */}
        <section className={styles.hero} aria-label="Hero">
          <div className={styles.heroBackdrop} aria-hidden="true">
            <div className={`${styles.blob} ${styles.blobA}`} />
            <div className={`${styles.blob} ${styles.blobB}`} />
            <div className={`${styles.blob} ${styles.blobC}`} />
            <div className={styles.grid} />
            {FLOATING_SYMBOLS.map((s, i) => (
              <span
                key={i}
                className={styles.floatingSymbol}
                style={{
                  top: s.top,
                  left: s.left,
                  animationDelay: s.delay,
                  animationDuration: s.duration,
                }}
              >
                {s.char}
              </span>
            ))}
          </div>

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>
                <Sparkles className={styles.eyebrowIcon} />
                <span>Open-source · Updated for 2026</span>
              </div>

              <h1 className={styles.heroTitle}>
                <span className={styles.titleLine}>Pass</span>{" "}
                <span className={styles.rotatorWrap} aria-live="polite">
                  <span className={styles.rotatorSizer} aria-hidden="true">
                    the CPA Exam
                  </span>
                  {ROTATING_WORDS.map((word, i) => (
                    <span
                      key={word}
                      className={`${styles.rotatorWord} ${
                        i === wordIndex ? styles.rotatorActive : ""
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
                <br />
                <span className={styles.titleGradient}>
                  with a book that keeps up.
                </span>
              </h1>

              <p className={styles.heroSubtitle}>
                An experimental, open-source CPA textbook built like software —
                versioned, reviewed, and continuously updated. Every chapter
                tracks the latest AICPA blueprint so you study what&rsquo;s
                actually tested.
              </p>

              <div className={styles.ctaRow}>
                <a href="#sections" className={styles.primaryCta}>
                  Start studying
                  <ArrowRight className={styles.ctaIcon} />
                </a>
                <a href="/blueprint/2026" className={styles.secondaryCta}>
                  Browse the blueprint
                </a>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>6</div>
                  <div className={styles.statLabel}>Exam sections</div>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <div className={styles.statNumber}>2026</div>
                  <div className={styles.statLabel}>Blueprint aligned</div>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Open source</div>
                </div>
              </div>
            </div>

            <div className={styles.heroArt} aria-hidden="true">
              <div className={styles.bearHalo} />
              <div className={styles.bearRing} />
              <div className={styles.bearOrbit}>
                <span className={`${styles.orbitDot} ${styles.orbitDot1}`} />
                <span className={`${styles.orbitDot} ${styles.orbitDot2}`} />
                <span className={`${styles.orbitDot} ${styles.orbitDot3}`} />
              </div>
              <img
                src="/img/logo-variants/cpabear-lime.svg"
                alt=""
                className={styles.bear}
              />
              <div className={`${styles.chip} ${styles.chipFar}`}>FAR</div>
              <div className={`${styles.chip} ${styles.chipAud}`}>AUD</div>
              <div className={`${styles.chip} ${styles.chipReg}`}>REG</div>
              <div className={`${styles.chip} ${styles.chipBar}`}>BAR</div>
            </div>
          </div>

          <div className={styles.ticker} aria-hidden="true">
            <div className={styles.tickerTrack}>
              {[...TICKER_TERMS, ...TICKER_TERMS].map((term, i) => (
                <span key={i} className={styles.tickerItem}>
                  {term}
                </span>
              ))}
            </div>
          </div>
        </section>

        <main className={styles.container}>
          {/* Sections Grid */}
          <div id="sections" className={styles.sectionsIntro}>
            <h2 className={styles.sectionsHeading}>Six sections. One book.</h2>
            <p className={styles.sectionsSubhead}>
              Jump into any section — each has chapters, practice questions,
              and study guides aligned to the AICPA blueprint.
            </p>
          </div>
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
