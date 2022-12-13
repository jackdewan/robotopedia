import { json } from '@remix-run/node';
import { client } from '../models/contentful.server';

export async function loader() {
  return json(await client.getPage('Home'));
}

export const meta = ({ data }) => {
  const { seoMetadata } = data;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    'og:image': `${seoMetadata?.ogImage?.url ? seoMetadata.ogImage.url : ''}`,
  };
};

export default function Index() {
  return (
    <div className="text-center mt-24 sm:mt-24 dark:text-white">
      <div>
        <h1 className="text-3xl sm:text-6xl mb-4">Robotopedia</h1>
        <h2>Helping Manufacturers find automation Integrators</h2>
      </div>
    </div>
  );
}
