import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import HeroSection from '@/components/layout/HeroSection';
import PostCard from '@/components/cards/PostCard';
import useSWR from 'swr'
import axios from "axios";
import TopicCard from '@/components/cards/TopicCard';

const sectionTopics = [
  { image: '/images/topic.svg', title: 'Luyện tập thói quen hàng ngày' },
  { image: '/images/topic.svg', title: 'Thử thách nâng cao sức khoẻ' },
  { image: '/images/topic.svg', title: 'Chăm sóc sức khoẻ tiện lợi cùng Đối tác MiniApp' }
]

export default function HomePage() {
  const url = `https://hanacare.vn/ghost/api/content/posts?key=942efd06374ce7156d0bf617c4&limit=6&include=tags,authors`;
  const fetcher = async () => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher);
  const { posts = [] } = data || {}

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
    <Layout>
      <Seo />
      <main>
        <div className="container mx-auto">
          <HeroSection />
          <section className="topics-area py-20 xl:py-28">
            <div className="container mx-auto">
              <div className="section-title text-center max-w-xl mx-auto mb-6 lg:mb-16">
                <h4 className="font-serif text-4xl lg:text-5xl text-gray-800 font-bold mb-6">Trải nghiệm cùng HanaCare</h4>
                <p className="text-lg text-gray-400 font-normal">Chúng tôi cung cấp nội dung sức khoẻ phù hợp vào đúng thời điểm</p>
              </div>
              <div className="grid grid-cols-3 mb-8 gap-8">
                {sectionTopics.map((item, index) => (
                  <TopicCard key={index} title={item.title} image={item.image} />
                ))}
              </div>
            </div>
          </section>
          <section className="articles-area">
            <div className="section-title text-center max-w-xl mx-auto mb-6 lg:mb-16">
              <h4 className="font-serif text-4xl lg:text-5xl text-gray-800 font-bold mb-6">Blog HanaCare</h4>
              <p className="text-lg text-gray-600 font-normal">Khám phá các bài viết về những thông tin bổ ích đến sức khoẻ và các thói quen lành mạnh hàng ngày</p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 posts'>
              {
                posts.map((post: any, index: number) => <PostCard key={index} post={post} />)
              }
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
