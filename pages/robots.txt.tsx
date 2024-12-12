import { GetServerSideProps } from 'next';

const Robots = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const content = `
User-agent: *
Allow: /
Sitemap: https://noseat.co/sitemap.xml
  `;

  res.setHeader('Content-Type', 'text/plain');
  res.write(content);
  res.end();

  return {
    props: {},
  };
};

export default Robots;
