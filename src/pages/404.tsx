import Head from 'next/head';
import PageError from '../components/PageError';

const Page404 = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <PageError />
    </>
  );
};

export default Page404;
