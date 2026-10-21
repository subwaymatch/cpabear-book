# Formation and Liquidation of Business Entities

Choosing a business entity is one of the most consequential decisions a CPA helps a client make, because the choice decides how income is taxed every year and what it costs to get out. REG teaches each entity on its own. TCP asks you to put them side by side: identify the entity a set of legal characteristics describes, compute the tax cost of forming each type with noncash property, and compare the tax cost of liquidating each type. This chapter starts with the comparison framework, then works through formation and liquidation for C corporations, S corporations, and partnerships, and ends with conversions between them.

Two results of the One Big Beautiful Bill Act (OBBBA, P.L. 119-21, signed July 4, 2025) shape the comparison. The 21% corporate rate is unchanged, and the 20% qualified business income (QBI) deduction for owners of pass-through businesses is now permanent for tax years beginning after December 31, 2025, a change eligible for TCP testing since July 1, 2026.

---

## Choosing an Entity

### Legal Characteristics

The exam may describe an entity and ask what it is, or describe a client and ask which entity fits. Start with these differences:

| Characteristic | C corporation | S corporation | Partnership (general, limited, or LLC) |
|---|---|---|---|
| **Liability protection** | Shareholders protected | Shareholders protected | General partners exposed; limited partners and LLC members protected |
| **Number of owners** | Unlimited | No more than 100 | At least 2 (a single-member LLC is disregarded unless it elects to be taxed as a corporation) |
| **Eligible owners** | Anyone | Individuals who are U.S. citizens or residents, estates, certain trusts, and certain exempt organizations | Anyone |
| **Classes of ownership** | Multiple classes of stock | **One class of stock** (voting differences allowed) | Flexible; special allocations allowed |
| **Entity-level income tax** | Yes, at 21%, and again on dividends | Generally no (exceptions: built-in gains tax and excess passive income tax) | No |
| **Losses** | Stay in the corporation | Pass through, limited by stock and debt basis, at-risk, and passive rules | Pass through, limited by outside basis, at-risk, and passive rules |
| **Basis from entity debt** | Not applicable | Only from **direct shareholder loans** | Yes, recourse and nonrecourse debt |
| **Payroll and self-employment tax** | Salary subject to FICA; dividends are not | Reasonable salary subject to FICA; distributions are not | General partners and active LLC members pay self-employment tax on their distributive share |

### The Annual Tax Comparison

The heart of the decision is a schedule that compares the total tax on the same income under each structure. With a 21% corporate rate and a 23.8% maximum rate on dividends (20% plus the 3.8% net investment income tax), a C corporation that distributes everything costs more than a pass-through whose owner gets the full QBI deduction:

> **Example:** Jordan expects his new business to earn \$100,000 a year. He is in the 37% bracket, and the business would qualify for the full 20% QBI deduction as a pass-through. Ignoring payroll and self-employment taxes:
>
> | Structure | Entity tax | Owner's tax | Total |
> |---|---|---|---|
> | C corporation, all profits paid as dividends | \$21,000 | 23.8% × \$79,000 = \$18,802 | **\$39,802** |
> | C corporation, all profits retained | \$21,000 | None until distributed or the stock is sold | **\$21,000** for now |
> | S corporation or partnership | None | 37% × (\$100,000 - \$20,000 QBI deduction) = \$29,600 | **\$29,600** |
>
> The pass-through wins if profits come out each year. The C corporation can come out ahead only if the business reinvests its profits for a long time, deferring the second tax.

Above an indexed income threshold, the QBI deduction can be limited by the business's W-2 wages and property and can disappear for a specified service business, so the comparison depends on the client's facts.

### Decision Factors

Work through these questions in order. The first one that clearly applies usually drives the answer.

| Question | If yes |
|---|---|
| Will any owner be a nonresident alien, a corporation, or a partnership? | An S corporation is not available; choose a C corporation or a partnership |
| Will the business have losses in its early years? | Choose a pass-through so owners can deduct them; prefer a partnership if the entity will borrow, because partners get basis from entity debt |
| Do the owners want to reduce self-employment tax on active income? | An S corporation lets owners pay payroll tax only on a reasonable salary |
| Will most profits be reinvested for years, or does the business plan to go public? | A C corporation's 21% rate and unlimited classes of stock fit best |
| Do the owners want flexible profit splits or to distribute appreciated property later? | A partnership allows special allocations and has no entity-level gain on distributions |

---

## Formation

### C Corporation (§351)

A transfer of property for stock is tax-free under **§351** if the transferors are in **control** immediately afterward: at least 80% of the voting power and at least 80% of the shares of each other class of stock.

| Item | Rule |
|---|---|
| **Gain** | Recognized only to the extent of boot (cash or other property) received, up to the realized gain, or to the extent liabilities assumed exceed basis (§357(c)) |
| **Loss** | Never recognized |
| **Shareholder's stock basis** | Basis of property transferred - boot received - liabilities assumed + gain recognized |
| **Corporation's basis in property** | Shareholder's basis + gain recognized (limited to FMV for net built-in loss property unless the shareholder elects to reduce stock basis) |
| **Liability assumed with no business purpose** | The entire liability is boot (§357(b)) |

> **Example:** Sam transfers land (FMV \$300,000, adjusted basis \$100,000, subject to a \$130,000 mortgage) to newly formed Bear Co., a C corporation, for all of its stock. The \$130,000 liability exceeds Sam's \$100,000 basis by \$30,000, so Sam recognizes **\$30,000** of gain under §357(c). His stock basis is \$100,000 - \$130,000 + \$30,000 = **\$0**, and Bear Co.'s basis in the land is \$100,000 + \$30,000 = **\$130,000**.

### S Corporation

Forming an S corporation is a §351 transaction exactly like forming a C corporation. The S election is a separate step, made on Form 2553 with the consent of every shareholder. To take effect for the current year, it must be filed no later than 2 months and 15 days after the start of that tax year (or at any time during the preceding year); a later election takes effect the following year. The two corporate forms differ only after formation, in how income, distributions, and liquidation are taxed.

### Partnership (§721)

A contribution of property for a partnership interest is tax-free under **§721**, with **no control requirement**.

| Item | Rule |
|---|---|
| **Gain** | Only if the partner's net liability relief exceeds the basis of everything the partner contributed |
| **Loss** | Never recognized |
| **Partner's outside basis** | Basis of property and cash contributed - liabilities the partnership assumes + the partner's share of partnership liabilities |
| **Partnership's inside basis** | Carryover basis |

> **Example:** Alex and Dana form Kodiak Partners as equal partners. Alex contributes equipment (FMV \$150,000, adjusted basis \$90,000, subject to a \$60,000 liability that the partnership assumes). Dana contributes \$90,000 cash.
>
> | Outside basis | Alex | Dana |
> |---|---|---|
> | Basis of property or cash contributed | \$90,000 | \$90,000 |
> | Less: liability assumed by the partnership | (\$60,000) | \$0 |
> | Plus: 50% share of the partnership's \$60,000 liability | \$30,000 | \$30,000 |
> | **Outside basis** | **\$60,000** | **\$120,000** |
>
> Alex's net liability relief of \$30,000 is less than his \$90,000 basis, so neither partner recognizes gain. Kodiak's basis in the equipment is \$90,000.

### Comparing Formations

| Factor | C corporation (§351) | S corporation (§351) | Partnership (§721) |
|---|---|---|---|
| **Control requirement** | 80% of vote and of each other class | 80% of vote and of each other class | **None** |
| **Boot** | Gain to the extent of boot | Gain to the extent of boot | Cash received soon after may be a disguised sale |
| **Liabilities** | Gain if liabilities exceed basis | Gain if liabilities exceed basis | Gain if net liability relief exceeds basis |
| **Owner's basis** | Substituted basis, reduced by liabilities assumed | Substituted basis, reduced by liabilities assumed | Contributed basis, adjusted for liabilities, including a share of entity debt |
| **Entity's basis** | Carryover plus gain recognized | Carryover plus gain recognized | Carryover |
| **Equity for services** | Ordinary income to the service provider at FMV; stock received only for services does not count toward control; the corporation deducts or capitalizes the cost | Same as a C corporation | A capital interest is ordinary income at FMV; a profits interest generally is not taxed on receipt |

:::warning

The control requirement is the biggest formation difference. A §351 exchange fails if the transferors end up with less than 80%, which can happen when a new investor contributes only services or when transferors who contribute at different times are not part of one plan. A partnership formation has no ownership threshold at all.

:::

---

## Liquidation

### C Corporation

A C corporation's liquidation is usually the most expensive exit, because it triggers **two levels of tax**. The corporation recognizes gain and loss on its assets as if it sold them at FMV (§336), and each shareholder recognizes capital gain or loss equal to the FMV received minus stock basis (§331). The shareholder's basis in the property is FMV.

> **Example:** Panda Industries, a C corporation, owns land (FMV \$500,000, basis \$200,000) and \$63,000 of cash. It liquidates. Its \$300,000 gain on the land produces \$63,000 of corporate tax (21%), which the cash pays. It then distributes the land to its sole shareholder, Dana, whose stock basis is \$150,000. Dana recognizes a \$350,000 capital gain (\$500,000 - \$150,000), and at 23.8% she owes \$83,300. The total tax on the liquidation is **\$146,300**.

Loss recognition is limited. No loss is allowed on property distributed to a shareholder who owns more than 50% if the distribution is not pro rata or the property was acquired in a §351 transfer or capital contribution within the previous 5 years.

**Subsidiary liquidation (§332).** When a parent corporation owns at least 80% of a subsidiary's vote and value, neither recognizes gain or loss, and the parent takes a carryover basis in the assets and inherits the subsidiary's tax attributes.

### S Corporation

An S corporation also recognizes gain and loss on its assets as if it sold them, but the gain passes through to the shareholders and increases their stock basis before they compute their own gain or loss on the stock. The result is **one level of tax**. The character can still differ: the entity-level gain keeps its character (such as ordinary depreciation recapture), while the shareholder's gain or loss on the stock is capital. If the corporation converted from C status within the last 5 years, the built-in gains tax can also apply.

> **Example:** Polar Inc., an S corporation, is owned entirely by Jordan, whose stock basis is \$100,000. Its only asset is equipment (FMV \$180,000, adjusted basis \$100,000). In liquidation, Polar recognizes an \$80,000 gain, which passes through to Jordan and raises his stock basis to \$180,000. Jordan receives the \$180,000 of equipment and has **no further gain**. He is taxed once, on the \$80,000.

### Partnership

A partnership recognizes **no gain or loss** when it distributes property in liquidation. The partner recognizes gain only if cash received exceeds outside basis, and loss only if the partner receives nothing but cash, unrealized receivables, and inventory with a total basis below outside basis. Otherwise, the partner's remaining outside basis becomes the basis of the property received, so any gain is deferred until the partner sells it.

> **Example:** Kodiak Partners distributes \$50,000 cash and land (inside basis \$80,000, FMV \$120,000) to Alex in liquidation of his interest. Alex's outside basis is \$140,000. The cash reduces it to \$90,000, and Alex takes a **\$90,000** basis in the land. No one recognizes gain or loss.

### Comparing Liquidations

| Factor | C corporation | S corporation | Partnership |
|---|---|---|---|
| **Entity-level gain** | Yes, taxed at 21% | Yes, but passes through to shareholders | **No** |
| **Owner-level gain or loss** | Capital gain or loss: FMV - stock basis | Capital gain or loss: FMV - stock basis after the pass-through | Gain only if cash exceeds outside basis; loss only with cash, receivables, and inventory alone |
| **Levels of tax** | **Two** | **One** | **One**, often deferred |
| **Owner's basis in property received** | FMV | FMV | Remaining outside basis |
| **Special rule** | §332 for an 80% subsidiary | Built-in gains tax if within 5 years of conversion | None |

---

## Planning Strategies

### When to Choose Each Entity

| Situation | Usual choice | Reason |
|---|---|---|
| Startup expecting early losses and significant borrowing | Partnership or LLC | Losses pass through, and entity debt adds to partner basis |
| Profitable service business with active owners | S corporation | Payroll tax applies only to a reasonable salary |
| Business with foreign or corporate investors | C corporation or partnership | An S corporation is not available |
| Business reinvesting most profits for years | C corporation | The 21% rate applies while the second tax is deferred |
| Business that expects to distribute appreciated property | Partnership | No entity-level gain on distributions |
| Business needing more than one class of equity | Partnership or C corporation | An S corporation is limited to one class of stock |
| Business planning an initial public offering | C corporation | The standard structure for public companies |

### Converting Between Entities

| Conversion | Tax result |
|---|---|
| **C corporation to S corporation** | No immediate tax, but the built-in gains tax applies to appreciation that existed at conversion and is recognized within 5 years |
| **S corporation to C corporation** | No immediate tax; shareholders can withdraw remaining AAA tax-free during the post-termination transition period; the corporation generally cannot re-elect S status for 5 years |
| **Partnership to corporation** | Tax-free under §351 if the 80% control test is met; gain if liabilities exceed basis |
| **C corporation to partnership or LLC** | Treated as a **liquidation** of the corporation followed by a contribution to the partnership, so it triggers both corporate and shareholder tax on all appreciation |

:::caution

Moving a C corporation's business into a partnership or LLC is the most expensive conversion, because it is taxed as a full liquidation. A client who wants pass-through treatment for an existing C corporation usually does better with an S election, which defers the corporate-level tax and eliminates it for gain recognized after the 5-year recognition period.

:::

---

## Summary

| Topic | Key rule |
|---|---|
| Entity characteristics | C corporations: two levels of tax, unlimited owners and classes; S corporations: 100 eligible shareholders, one class of stock; partnerships: the most flexibility |
| Annual comparison | 21% corporate tax plus 23.8% on dividends (about 39.8% combined) versus 37% on 80% of income with the permanent QBI deduction (29.6%) |
| C or S formation (§351) | Tax-free with 80% control; gain to the extent of boot or liabilities over basis; no loss |
| Partnership formation (§721) | Tax-free with no control test; gain only if net liability relief exceeds basis |
| C liquidation | Corporate gain or loss plus shareholder capital gain or loss: two levels of tax; §332 for subsidiaries |
| S liquidation | Entity gain passes through and raises basis first: one level of tax |
| Partnership liquidation | No entity gain; partner gain only if cash exceeds outside basis; basis carries over to property |
| Conversions | C to partnership is taxed as a liquidation; C to S brings a 5-year built-in gains period; S to C bars re-election for 5 years |
