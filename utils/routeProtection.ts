import { fetchUser } from 'utils';
import type { AppContext } from 'next/app';
import App from 'next/app';

import nookies from 'nookies';

const routeProtection = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const { ctx } = appContext;
  const { gitlabUrl, privateToken } = nookies.get(ctx);

  // Eğer private token ve gitlab url yoksa
  if (!gitlabUrl && !privateToken) {
    // ve mevcut url login değilse (Çok fazla redirect yapmamak için)
    // Login sayfasına yönlendir
    if (ctx.pathname !== '/login') {
      ctx?.res?.writeHead(307, {
        location: '/login',
      });
      return ctx?.res?.end();
    }
  } else {
    // Eğer token ve private token varsa user bilgisini çek
    const response = await fetchUser(gitlabUrl, privateToken);
    // eğer response içinde error varsa ve mevcut sayfa login değlse logine yönlendir
    // eğer mevcut sayfa loginse loginde kal
    if ('error' in response) {
      if (ctx.pathname !== '/login') {
        ctx?.res?.writeHead(307, {
          location: '/login',
        });
        return ctx?.res?.end();
      }
    } else {
      // eğer private token ve gitlab url varolmasına rağmen login sayfasına gitmek istersem
      // anasayfaya yönlendir
      if (ctx.pathname === '/login') {
        ctx?.res?.writeHead(307, {
          location: '/',
        });
        return ctx?.res?.end();
      }
    }
  }

  return { ...appProps };
};

export default routeProtection;
