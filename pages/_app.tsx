import type { AppProps, AppContext } from 'next/app';
import 'styles/libraryStyles.css';
import { globalStyles } from 'styles/globals';
import { Providers } from 'context';
import { routeProtection } from 'utils';

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
  return routeProtection(appContext);
};
