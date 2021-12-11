import type { AppProps, AppContext } from 'next/app';
import { SWRConfig } from 'swr';
import 'styles/libraryStyles.css';
import { globalStyles } from 'styles/globals';
import { ConfigProvider } from 'antd';
import trTR from 'antd/lib/locale/tr_TR';
import { Providers } from 'context';
import { routeProtection, fetcher } from 'utils';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ConfigProvider locale={trTR}>
      <SWRConfig value={{ fetcher }}>
        <Providers>
          <Component {...pageProps} />;
        </Providers>
      </SWRConfig>
    </ConfigProvider>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  return routeProtection(appContext);
};
