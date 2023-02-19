import TopicCard from "@/components/cards/TopicCard"

const features = [
  {
    icon: '/images/topic.svg',
    title: 'Luyện tập thói quen hàng ngày',
    description: 'HanaCare sẽ đồng hành và nhắc nhở bạn cùng luyện tập thói quen tích cực mỗi ngày.'
  },
  {
    icon: '/images/topic.svg',
    title: 'Thử thách nâng cao sức khoẻ',
    description: 'Tham gia các hoạt động fyzical được tổ chức bởi HanaCare cũng có thể theo dõi sức khoẻ và hỗ trợ bạn trong việc tạo ra những thói quen tập luyện tốt hơn.'
  },
  {
    icon: '/images/topic.svg',
    title: 'Chăm sóc sức khoẻ tiện lợi cùng Đối tác MiniApp',
    description: 'Ngoài luyện tập, các đối tác MiniApp sẽ giúp bạn tăng trải nghiệm bảo vệ sức khoẻ tiện lợi từ tư vấn khám chữa bệnh đến mua thuốc và hỗ trợ bảo hiểm.'
  },
  {
    icon: '/images/topic.svg',
    title: 'Đánh giá sức khoẻ',
    description: 'Tính năng sẽ tính toán một chỉ số sức khoẻ cho người dùng và cung cấp một cái nhìn tổng quan về tình trạng sức khoẻ và hỗ trợ trong việc giữ và cải thiện sức khoẻ của bản thân.'
  },
  {
    icon: '/images/topic.svg',
    title: 'HanaCoin',
    description: 'Tham gia thử thách và tích luỹ thật nhiều HanaCoin sẽ giúp bạn đổi được nhiều quà tặng và trải nghiệm các dịch vụ của ứng dụng.'
  },
]

const HanacareFeature = () => {
  return (
    <>
      <div className="hero-area  relative pt-10 xl:pt-20">
        <div className="container mx-auto">
          <div className="hero-box-3 relative grid gap-8 grid-cols-1 lg:grid-cols-12 text-left">
            <div className="lg:col-span-8">
              <div className="hero-content lg:flex flex-wrap text-left relative lg:pr-14">
                <h1 className="w-full font-serif !leading-tight text-4xl lg:text-5xl text-gray-800 font-bold  mb-6">Tính năng của Hanacare</h1>
                <p className="text-md lg:text-lg text-gray-400 font-normal">HanaCare làm gì để hướng đến mục tiêu: "Mọi người đều khoẻ mạnh và hạnh phúc".</p>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="feature-image relative aos-init aos-animate" data-aos="fade" data-aos-delay="100">
                <img className="rounded-xl w-full object-cover" style={{ maxHeight: 271 }} src={'https://learn.gthememarket.com/content/images/2022/09/online-education-1.jpg'} alt="The century of climate migration" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="topics-area py-20">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <TopicCard key={index} title={item.title} description={item.description} image={item.icon} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default HanacareFeature 