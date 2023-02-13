import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import PostCard from '@/components/cards/PostCard';
import useSWR from 'swr'
import axios from "axios";
import Image from 'next/image';
import BlogBanner from '~/images/blog-hero-banner.webp'
import useSWRInfinite from 'swr/infinite'

function flatten(arr: any[]): any[] {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

const getKey = (pageIndex: number, previousPageData: any) => {
  return `https://hanacare.vn/ghost/api/content/posts?key=942efd06374ce7156d0bf617c4&limit=15&include=tags,authors&page=${pageIndex + 1}`;
}

export default function BlogPage() {

  const fetcher = async (key: string) => await axios.get(key).then((res) => res.data);
  const { data, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher)
  if (!data) return null

  const [firstBatch, ...restBatch] = data || []

  const [topPost, leftPost, rightPost, ...restFirstBatch] = firstBatch.posts || []

  const restPosts = [...restFirstBatch, ...flatten(restBatch.map(batch => batch.posts))]

  return (
    <Layout>
      <Seo title='Hanacare Blog' />
      <main>
        <div className="hero-bg relative">
          <Image src={BlogBanner} className="w-full object-cover h-64 bg-white" alt="Hanacare Blog" />
          <span className="overlay-bg absolute left-0 right-0 bottom-0 top-0 bg-blue-800 opacity-10 group-hover:opacity-20  duration-100"></span>
        </div>
        <div className="container mx-auto">
          <section className="articles-area pt-8 ">
            <div className="grid grid-cols-2 gap-8 mb-6 hover:border-white bg-white">
              <div className='w-full relative'>
                <img className="w-full h-96 rounded-lg object-cover before:bg-blue-800" src={topPost?.feature_image} />
              </div>
              <div>
                <h4 className="font-serif text-base text-4xl lg:text-5xl text-gray-800 font-bold mb-6 hover:text-blue-600">
                  <a href="#">
                    {topPost?.title}
                  </a>
                </h4>
                <div className="text-lg text-gray-600 mb-6 font-normal line-clamp-4">{topPost?.excerpt}</div>
                <div className="flex items-center my-2 text-gray-700">
                  <span className="text-sm text-gray-500 dot-after mr-1">{new Date(topPost?.published_at).toLocaleDateString('vi-VN', {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                  </span>
                  <span className="mr-2 text-sm text-gray-500">{topPost?.reading_time} min read</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-8 gap-8">
              <PostCard post={leftPost} />
              <PostCard post={rightPost} />
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 posts'>
              {
                restPosts.map((post: any, index: number) => <PostCard key={index} post={post} />)
              }
            </div>
            <div className="text-center">
              <button disabled={isValidating} onClick={() => setSize(size + 1)} type="button" className="js-load-posts rainbow relative load-more-btn inline-flex items-center px-12 py-4 text-base font-medium text-gray-400  rounded-full border border-blue-100 hover:text-blue-500 hover:border-blue-800 duration-300 mt-14">
                {isValidating ? 'Loading' : 'Load More'}
              </button>
            </div>
          </section>
        </div>
      </main >
    </Layout >
  );
}
