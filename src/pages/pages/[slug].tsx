import { useRouter } from 'next/router';
import axios from 'axios';
import Seo from '@/components/Seo';

export default function PageDetail(props: any) {
  const page = props.data.pages[0];

  const { query } = useRouter();
  const isWebViewMode = query?.is_webview === 'true';
  const seoMeta = {
    meta_title: page?.title,
    meta_description: page?.excerpt,
    og_image: page?.feature_image,
  };

  return (
    <>
      <Seo metaData={seoMeta} />
      <div className='hero-area relative pt-10 pb-10 xl:pt-20 xl:pb-20 '>
        <div className='container mx-auto'>
          <h1 className='mb-6 w-full text-center text-4xl font-bold !leading-tight text-gray-800  lg:text-5xl'>
            {page.title}
          </h1>
        </div>
      </div>
      <div className='single-are pb-20'>
        <div
          className='gh-content gh-canvas mx-auto max-w-4xl pb-10'
          dangerouslySetInnerHTML={{
            __html: isWebViewMode
              ? page.html.replace(/<\/?a[^>]*>/g, '')
              : page.html,
          }}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const url = `https://ghost.hanacare.vn/ghost/api/content/pages/slug/${slug}/?key=942efd06374ce7156d0bf617c4&include=tags,authors`;
  const fetcher = async () => await axios.get(url).then((res) => res.data);
  const data = await fetcher();
  return {
    props: {
      data,
    },
  };
}
