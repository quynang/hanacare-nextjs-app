import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import HeroSection from '@/components/layout/HeroSection';
import PostCard from '@/components/cards/PostCard';
import useSWR from 'swr';
import axios from 'axios';
import TopicCard from '@/components/cards/TopicCard';
import { features } from '@/config';

const sectionForYourEmployees = [
  { image: '/images/mobile-feature-1.png', title: 'Đánh giá chỉ số hạnh phúc' },
  {
    image: '/images/mobile-feature-2.png',
    title: 'Tổ chức hoạt động đội nhóm',
  },
  { image: '/images/mobile-feature-3.png', title: 'Báo cáo chỉ số ENPS' },
];

export default function HomePage() {
  const url = `https://ghost.hanacare.vn/ghost/api/content/posts?key=942efd06374ce7156d0bf617c4&limit=6&include=tags,authors`;
  const fetcher = async () => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher);
  const { posts = [] } = data || {};

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
    <Layout>
      <Seo />
      <main>
        <div className='container mx-auto'>
          <HeroSection />
          <section className='topics-area pt-20 xl:pt-28'>
            <div className='container mx-auto'>
              <div className='section-title mx-auto mb-6 max-w-xl text-center lg:mb-16'>
                <h4 className='mb-6 text-4xl font-bold text-gray-800 lg:text-5xl'>
                  Trải nghiệm cùng HanaCare
                </h4>
                <p className='text-lg font-normal text-gray-600'>
                  Chúng tôi cung cấp nội dung sức khoẻ phù hợp vào đúng thời
                  điểm
                </p>
              </div>
              <div className='flex flex-wrap justify-center'>
                {features.map((item, index) => (
                  <div
                    key={index}
                    className='m-4 w-full md:w-[calc(33.33%-2rem)]'
                  >
                    <TopicCard title={item.title} image={item.image} />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className='for-your-employees-area py-20 xl:py-28'>
            <div className='container mx-auto'>
              <div className='section-title mx-auto max-w-xl text-center'>
                <h4 className='mb-6 text-4xl font-bold text-gray-800 lg:text-5xl'>
                  Dành cho nhân viên của bạn
                </h4>
                <p className='text-lg font-normal text-gray-600'>
                  Tạo điều kiện và cung cấp cho nhân viên của bạn cùng tham gia
                  vào các chương trình, hoạt động nhằm nâng cao và hỗ trợ tất cả
                  các nhu cầu về sức khỏe của họ
                </p>
              </div>
              <div className='relative grid gap-4 md:grid-cols-3'>
                {sectionForYourEmployees.map((item, index) => (
                  <div
                    key={index}
                    className='relative flex flex-col justify-center p-10'
                  >
                    <img
                      style={{
                        width: 'auto',
                        maxHeight: 350,
                        objectFit: 'contain',
                      }}
                      src={item.image}
                    />
                    <div className='mt-6 w-full text-center text-xl font-bold text-gray-800'>
                      {item.title}
                    </div>
                  </div>
                ))}
                <img
                  className='absolute top-1/2 left-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 transform md:block'
                  src='/images/wave.svg'
                ></img>
              </div>
            </div>
          </section>
          <section className='articles-area'>
            <div className='section-title mx-auto mb-6 max-w-xl text-center lg:mb-16'>
              <h4 className='mb-6 text-4xl font-bold text-gray-800 lg:text-5xl'>
                Blog HanaCare
              </h4>
              <p className='text-lg font-normal text-gray-600'>
                Khám phá các bài viết về những thông tin bổ ích đến sức khoẻ và
                các thói quen lành mạnh hàng ngày
              </p>
            </div>
            <div className='posts grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {posts.map((post: any, index: number) => (
                <PostCard key={index} post={post} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
