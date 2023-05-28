import Link from 'next/link';

type PostCardProps = {
  post: any;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const {
    title,
    feature_image,
    excerpt,
    reading_time,
    published_at,
    slug,
    primary_tag,
  } = post || {};

  return (
    <div
      className='course-box-1 group h-full rounded-lg
     border  bg-white p-6 duration-300 hover:-translate-y-1 hover:border-white hover:shadow-lg'
    >
      <div className='feature-image relative mb-6 overflow-hidden rounded-lg'>
        <img
          className='h-72 w-full object-cover duration-300 before:bg-blue-800  group-hover:scale-105'
          src={feature_image}
          alt='Data Project - Election Analysis Part'
        />
      </div>
      {primary_tag && (
        <Link
          href={`/topic/${primary_tag.slug}`}
          className='group mr-2 mb-4 inline-block rounded-full border px-6 py-2 text-xs font-medium duration-300 hover:border-blue-600 hover:text-blue-600'
        >
          {primary_tag.name}
        </Link>
      )}
      <div className='course-content'>
        <h4 className='text-xl font-bold text-gray-800 duration-300 hover:text-blue-600'>
          <Link href={`/${slug}`}>{title}</Link>
        </h4>
        <p className='mb-4 text-base font-normal text-gray-600 line-clamp-2'>
          {excerpt}
        </p>
        <div className='my-2 flex items-center text-gray-700'>
          <span className='dot-after mr-1 text-xs text-gray-500'>
            {new Date(published_at).toLocaleDateString('vi-VN', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className='mr-2 text-xs text-gray-500'>
            {reading_time} min read
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
