import * as React from 'react';

export interface INumberProps {
  n?: number;
  format?: 'decimal' | 'percent';
  digits?: number;
}

export const toPercent = (part?: number, total?: number) => {
  return part && total ? part / total : 0;
};

const formatters: { [key: string]: Intl.NumberFormat } = {};
const getFormatter = (options: Intl.NumberFormatOptions) => {
  const k = JSON.stringify(options);
  if (!formatters[k]) {
    formatters[k] = new Intl.NumberFormat(undefined, options);
  }
  return formatters[k];
};

export const formatNumber = ({ n, format, digits }: INumberProps): string => {
  const c = n || 0;
  const f = format || 'decimal';
  const d = digits || 0;
  if (Intl && Intl.NumberFormat) {
    return getFormatter({
      style: f,
      maximumFractionDigits: d,
    }).format(c);
  }

  if (f === 'percent') {
    return `${(c * 100).toFixed(digits)}%`;
  }
  return c.toFixed(digits);
};

export const getPlusMinus = (n: number) => {
  if (n === 0) {
    return '±';
  }
  return n > 0 ? '+' : '-';
};

// Here we can also do some more formatting to deal better with large numbers
export const Number = (props: INumberProps) => (
  <span>{formatNumber(props)}</span>
);

export const formatCurrency = (cents: number, currency: string) => {
  return (cents / 100).toLocaleString('en-US', { style: 'currency', currency });
};

export const Currency: React.FC<{
  cents: number;
  currency: string;
  zeroState?: string;
}> = ({ cents, currency, zeroState }) => (
  <>{cents === 0 && zeroState ? zeroState : formatCurrency(cents, currency)}</>
);
