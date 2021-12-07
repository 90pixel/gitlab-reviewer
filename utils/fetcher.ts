// /* eslint-disable max-len */
import { parseCookies } from 'nookies';

interface IOptions {
  customUrl?: string;
  customToken?: string;
}

const fetcher = async (resource: string, options?: IOptions) => {
  const { privateToken, gitlabUrl } = parseCookies(null);
  const computedUrl = options?.customUrl || gitlabUrl;
  const computedToken = options?.customToken || privateToken;

  try {
    const request = await fetch(`${computedUrl}/api/v4/${resource}`, {
      headers: {
        'private-token': computedToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options,
      },
    });
    // istekten gelebilecek datayı bilmediğim için
    // ve any/unknown için bilinmeyen tiplerin diğer yerlerde
    // set edilmesine izin vermediği için type null belirledim

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: null = await request.json();
    return response;
  } catch (error) {
    return error;
  }
};

// function fetcher<TResponse>(
//   url: string,
//   config: RequestInit
// ): Promise<TResponse> {
//   return (
//     fetch(url, config)
//       // When got a response call a `json` method on it
//       .then((response) => response.json())
//       // and return the result data.
//       .then((data) => data as TResponse)
//   );
// }

export default fetcher;
