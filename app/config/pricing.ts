/*
 * AI engagement package prices, shown on /services/ai-development (and
 * referenced in its FAQ). Edit amounts here only.
 *
 * TODO: Confirm final GBP amounts with business owner. The figures were
 * previously shown in USD ($15k / $45k) and have only been switched to GBP.
 */

export const CURRENCY_SYMBOL = "£";

/** Amounts in GBP, excluding VAT. `null` means "quoted after discovery". */
export const AI_PACKAGE_PRICES = {
  starterMvp: 15_000,
  professional: 45_000,
  enterpriseCore: null,
} as const satisfies Record<string, number | null>;

export const VAT_NOTE = "excl. VAT";

/** 15000 -> "£15k", 12500 -> "£12.5k", null -> "Custom". */
export function formatPackagePrice(amount: number | null): string {
  if (amount === null) return "Custom";
  if (amount >= 1000) return `${CURRENCY_SYMBOL}${Number((amount / 1000).toFixed(1))}k`;
  return `${CURRENCY_SYMBOL}${amount}`;
}
