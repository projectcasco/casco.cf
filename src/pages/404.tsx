import { NextPage } from 'next';
import NextLink from 'next/link';
import { NextSeo } from 'next-seo';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <NextSeo title="page not found" />

      <div>
        <h1>not found this page</h1>

        <NextLink href={`/`}>{`>> go home click <<`}</NextLink>
      </div>
    </>
  );
};

export default NotFoundPage;
