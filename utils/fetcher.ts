// /* eslint-disable max-len */
import { parseCookies } from 'nookies';

// import Router from 'next/router';
// /**
//  * A fetcher function for all of your api interactions. You can also use this with `useSWR` hook.
//  * @typedef Props
//  * @property {boolean} [json] Sets the `Content-Type` header to `application/json`. Default: true
//  * @property {boolean} [retryUnauthenticated] Re-try unauthenticated requests. Default: true
//  *
//  * @param {string} resource Must start with slash like "/auth/login"
//  * @param {RequestInit & Props} init
//  *
//  * @example
//     try {
//       const response = await fetcher("/auth/login", {
//         method: "POST",
//         body: {
//           email,
//           password
//         },
//       });
//       console.log(response)
//     } catch (err) {
//       console.log(err.info)
//     }
//   };
//  */
// const fetcher = async (resource, init = {}) => {
//   const {
//     accessToken,
//     refreshToken,
//     'x-tindex-token': token,
//   } = parseCookies(null);

//   // Eğer fetcher admin sayfalarında kullanılacaksa tokenlar ona göre ayarlanıyor.
//   const { asPath } = Router;
//   const isAdminRoutes = asPath.includes('/admin');
//   const computedToken = isAdminRoutes ? accessToken : token;

//   const defaults = {
//     json: true,
//     auth: true,
//     retryUnauthenticated: true,
//     ...init,
//   };

//   const requestInit = {
//     ...defaults,
//     headers: {
//       ...(defaults.json && { Accept: 'application/json' }),
//       ...(defaults.json && { 'Content-Type': 'application/json' }),
//       ...(defaults.auth &&
//         computedToken && { Authorization: `Bearer ${computedToken}` }),
//     },
//     body: defaults.json ? JSON.stringify(defaults.body) : defaults.body,
//   };

//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}${resource}`,
//     requestInit
//   );
//   // Admin sayfasında istek atıyorsak ve tokenlar yoksa girişe zorla
//   if (isAdminRoutes && !accessToken && !refreshToken) {
//     Router.push('/admin');
//   }

//   if (!response.ok) {
//     if (response.status === 401 && refreshToken) {
//       const { token } = await fetcher('/auth/refresh', {
//         method: 'POST',
//         retryUnauthenticated: false,
//         body: { refreshToken },
//       });
//       setCookie(null, 'accessToken', token);

//       if (defaults.retryUnauthenticated) {
//         return fetcher(`${resource}`, {
//           ...requestInit,
//           retryUnauthenticated: false,
//         });
//       }
//     }
//   }

//   try {
//     const result = await response.json();
//     return result;
//   } catch (err) {
//     return err;
//   }
// };

// export default fetcher;

interface IFetcher {
  resource: string;
  customUrl?: string;
  customToken?: string;
}

const fetcher = async ({ resource, customUrl, customToken }: IFetcher) => {
  const { privateToken, gitlabUrl } = parseCookies(null);
  const computedUrl = customUrl || gitlabUrl;
  const computedToken = customToken || privateToken;

  const request = await fetch(`${computedUrl}/api/v4/${resource}`, {
    headers: {
      'private-token': computedToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  console.log(request);
};

export default fetcher;
