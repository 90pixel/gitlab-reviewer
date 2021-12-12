/* eslint-disable @typescript-eslint/no-unsafe-return */
// /* eslint-disable max-len */
import { parseCookies } from 'nookies';

interface IOptions {
  customUrl?: string;
  customToken?: string;
  requestInfo?: RequestInit;
}

async function fetcher<T>(
  resource: string,
  options?: IOptions
): Promise<{ response: T; totalPages: number; total: number }> {
  const { privateToken, gitlabUrl } = parseCookies(null);
  const computedUrl = options?.customUrl || gitlabUrl;
  const computedToken = options?.customToken || privateToken;

  try {
    const request = await fetch(`${computedUrl}/api/v4${resource}`, {
      headers: {
        'private-token': computedToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...options?.requestInfo,
    });
    // gitlabde toplam sayfa sayısı headerda geliyor.
    const totalPages = Number(request.headers.get('x-total-pages'));
    const total = Number(request.headers.get('x-total'));
    const response = (await request.json()) as T;
    return { response, totalPages, total };
  } catch (error: any) {
    return error;
  }
}

export default fetcher;
