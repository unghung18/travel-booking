import { getCmsToken } from "@/lib/token";

export interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
  isPublicAPI?: boolean;
}

export async function fetcher<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { params, headers, ...rest } = options;

  const query = params
    ? "?" +
      Object.entries(params)
        .filter(([, value]) => value !== undefined)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
        )
        .join("&")
    : "";

  const res = await fetch(`${process.env.API_URL}${url}${query}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCmsToken()}`,
      ...headers,
    },
    ...rest,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Fetch error ${res.status}: ${errorText}`);
  }
  const data = await res.json();
  console.log("dataFetcher", data);
  return data;
}
