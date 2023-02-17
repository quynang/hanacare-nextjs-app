

type TopicCardProps = {
  title: string
  image: string
}

const TopicCard: React.FC<TopicCardProps> = ({ title, image }) => {
  return (
    <div className="topics-box-1 shadow rounded-lg hover:shadow-lg hover:-translate-y-1 group text-center p-8 duration-300 topic-6 slick-slide slick-current slick-active" >
      <div className="topics-icon flex justify-center h-16 mx-auto mb-6">
        <img src={image} alt="Illustration" />
      </div>
      <div className="topics-content">
        <h4 className="text-2xl text-gray-600 hover:text-blue-800 font-bold mb-2 duration-300">
          <a href="/topic/illustration/" >{title}</a>
        </h4>
        {/* <p className="text-base leading-relaxed text-gray-400 font-normal">{description}
        </p> */}
      </div>
    </div>
  )
}

export default TopicCard