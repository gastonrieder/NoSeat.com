import { themesRoutes } from "@utils/themesRoutes";
import { GetServerSideProps } from 'next';

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://noseat.co';
  
  const cities = themesRoutes.flatMap(continent => 
    continent.pages.flatMap(country => 
      country.cities.map(city => ({
        url: `${baseUrl}/cities/${country.slug}/${city.toLowerCase().replace(/\s+/g, '-')}`,
        lastmod: new Date().toISOString(),
      }))
    )
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${cities.map(({ url, lastmod }) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
