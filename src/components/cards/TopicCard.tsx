

type TopicCardProps = {
  title: string
  image: string
  description?: string
}

const TopicCard: React.FC<TopicCardProps> = ({ title, image, description }) => {
  return (
    <div className="topics-box-1 rounded-lg hover:shadow-lg hover:-translate-y-1 border group text-center p-8 duration-300 topic-6 slick-slide slick-current slick-active" >
      <div className="topics-icon flex justify-center mx-auto mb-6">
        <img width={102} src={image} alt="Illustration" />
      </div>
      <div className="topics-content">
        <h4 className="text-xl text-gray-800 hover:text-blue-800 font-bold mb-2 duration-300">
          {title}
        </h4>
        {description &&
          <p className="text-base leading-relaxed text-gray-600 font-normal">{description}
          </p>
        }
      </div>
    </div>
  )
}

export default TopicCard