import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

interface Props {
  children?: React.ReactNode;
  myTitle?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;
export const Layout: FC<Props> = ({ children, myTitle }) => {
  return (
    <>
      <Head>
        <title>{myTitle || 'Pokemon App'}</title>
        <meta name='author' content='Felipe Apablaza' />
        <meta name='description' content={`Info sobre pokemon ${myTitle}`} />
        <meta name='keywords' content={`pokemon, ${myTitle}`} />
        <meta property='og:title' content={`Info sobre pokemon ${myTitle}`} />
        <meta
          property='og:description'
          content={`estaa es la pagina sobre pokemon ${myTitle}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  );
};
