import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

// Define the structure for a single line item in the journal
interface Entry {
  account: string;
  amount: number;
  isDebitRow: boolean;
  isCreditRow: boolean;
  accountType?:
    | "Asset"
    | "Liability"
    | "Equity"
    | "Contra-asset"
    | "Contra-liability"
    | "Contra-equity";
}

// Define the props for our component
interface JournalEntryProps {
  code: string;
}

// Mapping for account type codes
const accountTypeMap = {
  a: "Asset",
  l: "Liability",
  e: "Equity",
  ca: "Contra-asset",
  cl: "Contra-liability",
  ce: "Contra-equity",
};

// A more robust parser for the journal entry format
const parseJournalEntry = (
  code: string
): { date?: string; entries: Entry[] } => {
  const lines = code
    .trim()
    .split("\n")
    .filter((line) => line.trim() !== "");
  let date: string | undefined = undefined;

  // 1. Check for an optional date in the first line
  const firstLineTrimmed = lines[0]?.trim();
  if (
    firstLineTrimmed &&
    !firstLineTrimmed.startsWith("Dr.") &&
    !firstLineTrimmed.startsWith("Cr.")
  ) {
    date = lines.shift()?.trim();
  }

  const entries: Entry[] = [];

  for (const line of lines) {
    // 2. Trim leading whitespaces for each entry
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;

    const isDebitRow = trimmedLine.startsWith("Dr.");
    const isCreditRow = trimmedLine.startsWith("Cr.");

    // Remove the 'Dr.' or 'Cr.' prefix
    let content = trimmedLine.replace(/^(Dr\.|Cr\.)\s*/, "");

    // 3. Extract the amount from the end of the line
    const amountMatch = content.match(/\s+([$.,\d]+)$/);
    if (!amountMatch) continue;

    const amountStr = amountMatch[1].replace(/[$,]/g, ""); // Remove '$' and ','
    const amount = parseFloat(amountStr);

    // The rest of the string is the account part
    let accountPart = content.substring(0, amountMatch.index).trim();

    // 4. Extract the account type, if present
    let account = accountPart;
    let accountType: Entry["accountType"] | null = null;

    const typeMatch = accountPart.match(/^(.*?)\[(a|l|e|ca|cl|ce)\]$/);
    if (typeMatch) {
      account = typeMatch[1].trim();
      const typeCode = typeMatch[2] as keyof typeof accountTypeMap;
      accountType = accountTypeMap[typeCode] as Entry["accountType"];
    }

    if (account && !isNaN(amount)) {
      entries.push({ account, amount, isDebitRow, isCreditRow, accountType });
    }
  }

  // You can access the stored account type later, for example:
  // console.log(entries.map(e => ({ acc: e.account, type: e.accountType })));

  return { date, entries };
};

export default function JournalEntry({
  code,
}: JournalEntryProps): React.JSX.Element {
  const { date, entries } = parseJournalEntry(code);

  if (entries.length === 0) {
    return null;
  }

  const hasDate = Boolean(date);

  const firstDebitIndex = entries.findIndex((entry) => !entry.isCreditRow);
  const firstCreditIndex = entries.findIndex((entry) => entry.isCreditRow);

  return (
    <div className={styles.journalContainer}>
      <div
        className={clsx(
          styles.journalGrid,
          hasDate ? styles.withDate : styles.withoutDate
        )}
      >
        {/* Header Row */}
        {hasDate && <div className={styles.headerDate} />}
        <div className={styles.headerAccount} />
        <div className={clsx(styles.headerAmount, styles.headerDebit)}>
          Debit
        </div>
        <div className={clsx(styles.headerAmount, styles.headerCredit)}>
          Credit
        </div>

        {/* Date cell */}
        {hasDate && (
          <div
            className={styles.dateCell}
            style={{ gridColumn: 1, gridRow: `2 / span ${entries.length}` }}
          >
            {date}
          </div>
        )}

        {/* Entry rows */}
        {entries.map((entry, index) => {
          const rowIndex = 2 + index;
          const isFirstDebit = !entry.isCreditRow && index === firstDebitIndex;
          const isFirstCredit = entry.isCreditRow && index === firstCreditIndex;
          const hasDecimals = entry.amount % 1 !== 0;

          const options: Intl.NumberFormatOptions = {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: hasDecimals ? 2 : 0,
            maximumFractionDigits: hasDecimals ? 2 : 0,
          };

          const parts = new Intl.NumberFormat("en-US", options).formatToParts(
            entry.amount
          );
          const currencySymbol =
            isFirstDebit || isFirstCredit
              ? parts.find((p) => p.type === "currency")?.value
              : "";
          const numberValue = parts
            .filter((p) => p.type !== "currency")
            .map((p) => p.value)
            .join("");

          // MODIFICATION: Build class names instead of using inline styles
          const accountCellClasses = clsx(styles.accountCell, {
            [styles.isCreditRow]: entry.isCreditRow,
            [styles.isDebitRow]: entry.isDebitRow,
            [styles.firstRow]: index === 0,
            [styles.entryRowSeparator]: index > 0,
            [styles.lastRow]: index === entries.length - 1,
          });

          const amountCellClasses = clsx(styles.amountCell, {
            [styles.isCreditRow]: entry.isCreditRow,
            [styles.isDebitRow]: entry.isDebitRow,
            [styles.firstRow]: index === 0,
            [styles.entryRowSeparator]: index > 0,
            [styles.lastRow]: index === entries.length - 1,
          });

          return (
            <React.Fragment key={index}>
              <div className={accountCellClasses} style={{ gridRow: rowIndex }}>
                {entry.account}
              </div>
              <div
                className={clsx([amountCellClasses, styles.debit])}
                style={{ gridRow: rowIndex }}
              >
                {!entry.isCreditRow && (
                  <>
                    <span className={styles.currencySymbol}>
                      {currencySymbol}
                    </span>
                    <span>{numberValue}</span>
                  </>
                )}
              </div>
              <div
                className={clsx([amountCellClasses, styles.credit])}
                style={{ gridRow: rowIndex }}
              >
                {entry.isCreditRow && (
                  <>
                    <span className={styles.currencySymbol}>
                      {currencySymbol}
                    </span>
                    <span>{numberValue}</span>
                  </>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
