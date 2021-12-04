// /* eslint-disable max-len */
import { parseCookies } from 'nookies';

interface IFetcher {
  resource: string;
  customUrl?: string;
  customToken?: string;
}

const fetcher = async ({ resource, customUrl, customToken }: IFetcher) => {
  const { privateToken, gitlabUrl } = parseCookies(null);
  const computedUrl = customUrl || gitlabUrl;
  const computedToken = customToken || privateToken;

  try {
    const request = await fetch(`${computedUrl}/api/v4/${resource}`, {
      headers: {
        'private-token': computedToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
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

export default fetcher;
