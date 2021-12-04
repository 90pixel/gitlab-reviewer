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

  if (ctx.pathname !== '/login') {
    if (!gitlabUrl && !privateToken) {
      ctx?.res?.writeHead(307, {
        location: '/login',
      });
      return ctx?.res?.end();
    } else {
      const response = await fetchUser(gitlabUrl, privateToken);
      if ('error' in response) {
        ctx?.res?.writeHead(307, {
          location: '/login',
        });
        return ctx?.res?.end();
      }
    }
  }

  return { ...appProps };
};
