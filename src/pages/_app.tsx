import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import '@/styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        defaultTitle="Project Casco"
        titleTemplate="%s - Project Casco"
        additionalMetaTags={[
          {
            name: `author`,
            content: `uunw`,
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
