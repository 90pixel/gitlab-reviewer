import type { AppProps } from 'next/app';
import 'styles/libraryStyles.css';
import { globalStyles } from 'styles/globals';

import { Providers } from 'context';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Providers>
      <Component {...pageProps} />;
    </Providers>
  );
}

export default MyApp;
