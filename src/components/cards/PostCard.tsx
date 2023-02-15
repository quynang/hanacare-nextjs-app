
type PostCardProps = {
  post: any
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {

  const {
    title,
    feature_image,
    excerpt,
    reading_time,
    published_at,
    slug,
    primary_tag
  } = post || {}

  return (
    <div className="course-box-1 h-full rounded-lg border
     hover:border-white  bg-white hover:shadow-lg hover:-translate-y-1 group p-6 duration-300">
      <div className="feature-image mb-6 rounded-lg overflow-hidden relative">
        <img className="w-full h-72 object-cover group-hover:scale-105 duration-300  before:bg-blue-800" src={feature_image} alt="Data Project - Election Analysis Part" />
      </div>
      <a href={`/topic/${primary_tag.slug}`} className="mr-2 inline-block px-6 py-2 text-xs font-medium border rounded-full hover:text-blue-600 group duration-300 mb-4 hover:border-blue-600">{primary_tag.name}</a>
      <div className="course-content">
        <h4 className="text-xl text-gray-800 hover:text-blue-600 font-bold duration-300">
          <a href={`/post/${slug}`}>{title}</a>
        </h4>
        <p className="text-base font-normal mb-4 text-gray-600 line-clamp-2">{excerpt}
        </p>
        <div className="flex items-center my-2 text-gray-700">
          <span className="text-xs text-gray-500 dot-after mr-1">{new Date(published_at).toLocaleDateString('vi-VN', {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
          </span>
          <span className="mr-2 text-xs text-gray-500">{reading_time} min read</span>
        </div>
        {/* <div className="author flex items-center">
          <img className="w-10 h-10 rounded-full object-cover" src="https://learn.gthememarket.com/content/images/2022/08/nature-plant-photography-sunlight-leaf-flower-796565-pxhere-1.png" alt="Jhon Doe" />
          <div className="course-content ml-2">
            <h6 className="author-name text-base text-gray-800 hover:text-blue-800 font-bold duration-300">
              <a href="/instructor/jhon/">{author.name}</a>
            </h6>
            <p className="author-location text-sm text-gray-400 font-normal opacity-60">Dhaka, Bangladesh</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default PostCard;