import type { AppProps } from 'next/app';
import 'styles/libraryStyles.css';
import { globalStyles } from 'styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
