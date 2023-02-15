import { useRouter } from 'next/router';
import useSWR from 'swr'
import axios from "axios";
import useSWRInfinite from 'swr/infinite'
import PostCard from '@/components/cards/PostCard';
import { flatten } from '@/lib/helper';

const getKey = (pageIndex: number, tag: any) => {
  return `https://hanacare.vn/ghost/api/content/posts?key=942efd06374ce7156d0bf617c4&filter=tag:${tag}&include=tags&page=${pageIndex + 1}`;
}

export default function Topic() {
  const router = useRouter()
  const { tag } = router.query
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
  const { data, size, setSize, isValidating } = useSWRInfinite((pageIndex) => getKey(pageIndex, tag), fetcher)

  if (!data) return null

  console.log(data)

  const posts = flatten((data || []).map(batch => batch.posts))

  const tagName = posts[0].primary_tag.name;

  return (
    <>
      <div className="hero-area relative pt-20  topic-">
        <div className="container mx-auto">
          <div className="page-title-box">
            <div className="section-title max-w-4xl ">
              <h4 className="tag-name font-serif text-4xl lg:text-5xl text-gray-800 font-bold ">{tagName}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-20 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 posts">
          {
            posts.map((post: any, index: number) => <PostCard key={index} post={post} />)
          }
        </div>
        <div className="text-center">
          <button disabled={isValidating} onClick={() => setSize(size + 1)} type="button" className="relative load-more-btn inline-flex items-center px-12 py-4 text-base font-medium text-gray-600  rounded-full border border-slate-100 bg-slate-100 hover:text-blue-500 hover:border-blue-800 duration-300 mt-14">
            {isValidating ? 'Loading' : 'Load More'}
          </button>
        </div>
      </div>
    </>

  )
}