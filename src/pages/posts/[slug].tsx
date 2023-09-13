import { useRouter } from 'next/router';
import axios from 'axios';
import Seo from '@/components/Seo';
import Link from 'next/link';

export default function PostDetail(props: any) {
  const post = props.data.posts[0];
  const author = post.authors[0];
  const { query } = useRouter();
  const isWebViewMode = query?.is_webview === 'true';
  const seoMeta = {
    meta_title: post?.title,
    meta_description: post?.excerpt,
    og_image: post?.feature_image,
  };

  return (
    <>
      <Seo metaData={seoMeta}/>
      <div className='hero-area  relative pt-10 pb-10 xl:pt-20 xl:pb-20 '>
        <div className='container mx-auto'>
          <div className='hero-box-3 relative grid grid-cols-1 gap-8 text-left lg:grid-cols-12'>
            <div className='lg:col-span-8'>
              <div className='hero-content relative flex-wrap text-left lg:flex lg:pr-14'>
                {post.tags.map((tag: any, index: number) => (
                  <Link
                    key={index}
                    href={`/topic/${tag.slug}`}
                    className='group mr-2 mb-4 inline-block rounded-full border px-6 py-2 text-sm font-medium duration-300 hover:text-blue-800'
                  >
                    {tag.name}
                  </Link>
                ))}
                <h1 className='mb-6 w-full text-4xl font-bold !leading-tight text-gray-800  lg:text-5xl'>
                  {post.title}
                </h1>
              </div>
            </div>
            <div className='lg:col-span-4'>
              <div
                className='feature-image aos-init aos-animate relative'
                data-aos='fade'
                data-aos-delay='100'
              >
                <img
                  className='w-full rounded-xl object-cover'
                  style={{ maxHeight: 271 }}
                  src={post.feature_image}
                  alt='The century of climate migration'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='single-are pb-20'>
        <div
          className='gh-content gh-canvas mx-auto max-w-4xl pb-10'
          dangerouslySetInnerHTML={{
            __html: isWebViewMode
              ? post.html.replace(/<\/?a[^>]*>/g, '')
              : post.html,
          }}
        />
        <div className='author container mx-auto flex max-w-4xl justify-end pb-20 xl:pb-20'>
          <Link
            className='text-blue-600 hover:underline'
            href={`/authors/${author.id}`}
          >
            {author.name}
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const url = `https://ghost.hanacare.vn/ghost/api/content/posts/slug/${slug}/?key=942efd06374ce7156d0bf617c4&include=tags,authors`;
  const fetcher = async () => await axios.get(url).then((res) => res.data);
  const data = await fetcher();
  return {
    props: {
      data,
    },
  };
}
