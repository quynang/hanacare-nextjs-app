import TopicCard from "@/components/cards/TopicCard"

const features = [
  {
    icon: '/images/happiness-metric.png',
    title: 'Đánh giá chỉ số hạnh phúc',
    description: 'Giúp bạn tìm hiểu những nguồn năng lượng tích cực và tiêu cực trong cuộc sống, và tìm ra cách để tăng mức độ hạnh phúc.'
  },
  {
    icon: '/images/group-activities.png',
    title: 'Tổ chức hoạt động đội nhóm',
    description: 'Tổ chức và quản lý các hoạt động đội nhóm một cách hiệu quả, ngoài việc cung cấp giải pháp sức khoẻ hoạt động còn giúp tối ưu hoá quy trình làm việc đội nhóm, tăng năng suất và giảm thời gian tốn kém.'
  },
  {
    icon: '/images/enps-metric.png',
    title: 'Báo cáo chỉ số ENPS',
    description: 'ENPS là một chỉ số cực kỳ hữu ích cho các công ty để đánh giá mức độ hài lòng của nhân viên và tìm ra các cách cải thiện để giữ nhân viên và tạo ra môi trường làm việc tốt hơn.'
  }
]

const ForEnterprise = () => {
  return (
    <>
      <div className="hero-area  relative pt-10 xl:pt-20">
        <div className="container mx-auto">
          <div className="hero-box-3 relative grid gap-8 grid-cols-1 lg:grid-cols-12 text-left">
            <div className="lg:col-span-8">
              <div className="hero-content lg:flex flex-wrap text-left relative lg:pr-14">
                <h1 className="w-full font-serif !leading-tight text-4xl lg:text-5xl text-gray-800 font-bold  mb-6">Nhân viên là tài sản quý giá nhất của bạn</h1>
                <p className="text-md lg:text-lg text-gray-600 font-normal">Mang đến cho nhân viên của bạn giải pháp sức khỏe và cùng trải nghiệm, họ sẽ sử dụng và yêu thích chúng.</p>
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

export default ForEnterprise 