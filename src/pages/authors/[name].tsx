import { useRouter } from 'next/router';
import axios from 'axios';
import useSWRInfinite from 'swr/infinite';
import PostCard from '@/components/cards/PostCard';
import { flatten } from '@/lib/helper';

const getKey = (pageIndex: number, name: any) => {
  return `https://ghost.hanacare.vn/ghost/api/content/posts?key=942efd06374ce7156d0bf617c4&filter=authors:${name}&page=${
    pageIndex + 1
  }`;
};

export default function Author({ author }: { author: any }) {
  const router = useRouter();
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, size, setSize, isValidating } = useSWRInfinite(
    (pageIndex) => getKey(pageIndex, author.slug),
    fetcher
  );

  if (!data) return null;

  const posts = flatten((data || []).map((batch) => batch.posts));

  const lastBatch = data.at(-1);
  const next = lastBatch && lastBatch.meta.pagination.next;

  return (
    <>
      <div className='hero-area topic- relative  pt-20'>
        <div className='container mx-auto'>
          <div className='page-title-box'>
            <div className='section-title max-w-4xl '>
              <h4 className='tag-name text-4xl font-bold text-gray-800 lg:text-5xl '>
                {author.name}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto py-20'>
        <div className='posts grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post: any, index: number) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        {next && (
          <div className='text-center'>
            <button
              disabled={isValidating}
              onClick={() => setSize(size + 1)}
              type='button'
              className='load-more-btn relative mt-14 inline-flex items-center rounded-full border border-slate-100 bg-slate-100  px-12 py-4 text-base font-medium text-gray-600 duration-300 hover:border-blue-800 hover:text-blue-500'
            >
              {isValidating ? 'Loading' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { name } = context.query;
  const url = `https://ghost.hanacare.vn/ghost/api/content/authors/${name}/?key=942efd06374ce7156d0bf617c4`;
  const fetcher = async () => await axios.get(url).then((res) => res.data);
  const data = await fetcher();
  return {
    props: {
      author: data.authors[0],
    },
  };
}
