
import NextImage from '@/components/NextImage'

type PostCardProps = {
  post: any
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {

  const {
    title,
    feature_image,
    authors,
    excerpt
  } = post || {}

  return (
    <div className="course-box-1 h-full rounded-lg border
     hover:border-white  bg-white hover:shadow-lg hover:-translate-y-1 group p-6 duration-300">
      <div className="feature-image mb-6 rounded-lg overflow-hidden relative">
        <img className="w-full h-72 object-cover group-hover:scale-105 duration-300  before:bg-blue-800" src={feature_image} alt="Data Project - Election Analysis Part" />
      </div>
      <div className="course-content">
        <h4 className="text-xl text-gray-800 hover:text-blue-600 font-bold duration-300">
          <a href="#">{title}</a>
        </h4>
        <p className="text-base font-normal mb-6 text-gray-600 line-clamp-2">{excerpt}
        </p>
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