import { useRouter } from 'next/router';
import useSWR from 'swr'
import axios from "axios";
import Seo from '@/components/Seo';

export default function PostDetail(props: any) {
  const post = props.data.posts[0];

  const seoMeta = {
    title: post?.title,
    siteName: 'HanaCare',
    description: post?.excerpt,
    type: 'article',
    robots: 'follow, index',
    image: post?.feature_image,
  };


  console.log(post)
  return (
    <>
      <Seo {...seoMeta} />
      <div className="hero-area  relative pt-10 xl:pt-20 pb-10 xl:pb-20 ">
        <div className="container mx-auto">
          <div className="hero-box-3 relative grid gap-8 grid-cols-1 lg:grid-cols-12 text-left">
            <div className="lg:col-span-8">
              <div className="hero-content lg:flex flex-wrap text-left relative lg:pr-14">
                {post.tags.map((tag: any, index: number) =>
                  <a key={index} href={`/topic/${tag.slug}`} className="mr-2 inline-block px-6 py-2 text-sm font-medium border rounded-full hover:text-blue-800 group duration-300 mb-4">{tag.name}</a>
                )}
                <h1 className="w-full font-serif !leading-tight text-4xl lg:text-5xl text-gray-800 font-bold  mb-6">{post.title}</h1>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="feature-image relative aos-init aos-animate" data-aos="fade" data-aos-delay="100">
                <img className="rounded-xl w-full object-cover" style={{ maxHeight: 271 }} src={post.feature_image} alt="The century of climate migration" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-are pb-20">
        <div className='gh-content gh-canvas pb-20 xl:pb-20 max-w-4xl mx-auto' dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const { slug } = context.query
  const url = `https://ghost.hanacare.vn/ghost/api/content/posts/slug/${slug}/?key=942efd06374ce7156d0bf617c4&include=tags`;
  const fetcher = async () => await axios.get(url).then((res) => res.data);
  const data = await fetcher();
  return {
    props: {
      data
    }
  };
}