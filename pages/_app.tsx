import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import nookies from 'nookies';
import 'styles/libraryStyles.css';
import { globalStyles } from 'styles/globals';
import { Providers } from 'context';
import { fetchUser } from 'utils';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Providers>
      <Component {...pageProps} />;
    </Providers>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
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
