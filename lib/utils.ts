import qs from "query-string";


export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}

interface UrlQueryParams {
    params: string;
    key: string;
    value: string;
  }
  
export function formUrlQuery({ params, key, value }: UrlQueryParams) {
    const currentUrl = qs.parse(params);
  
    currentUrl[key] = value;
  
    return qs.stringifyUrl(
      {
        url: window.location.pathname,
        query: currentUrl,
      },
      { skipNull: true }
    );
  }