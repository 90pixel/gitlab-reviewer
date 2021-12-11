import { endpoints } from 'utils';
import { User } from 'types/USER';

const fetchUser = async (gitlabUrl: string, token: string) => {
  try {
    const request = await fetch(`${gitlabUrl}/api/v4/${endpoints.user}`, {
      headers: {
        'private-token': token,
      },
    });
    // JSON için bu kuralı kapatıyorum
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: User = await request.json();

    if (response.name) {
      return response;
    } else {
      return { error: 'Token hatalı' };
    }
  } catch {
    // https://22 gibi veya https://gitlab.123.net gibi şeylerde de bu hatayı alıyoruz.
    return { error: 'Gitlab Urli hatalı' };
  }
};
export default fetchUser;
