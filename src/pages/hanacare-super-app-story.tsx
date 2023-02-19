import TopicCard from "@/components/cards/TopicCard"

const contentBoxs = [
  {
    icon: '/images/topic.svg',
    title: 'Tầm nhìn: Mỗi người được sử dụng dịch vụ và sản phẩm CSSK tốt nhất để họ có cuộc sống hạnh phúc trọn vẹn'
  },
  {
    icon: '/images/topic.svg',
    title: 'Sứ mệnh: Cung cấp ứng dụng CSSK dành cho mọi người để giải quyết vấn đề một cách tiện lợi'
  },
  {
    icon: '/images/topic.svg',
    title: 'Giá trị cốt lõi: Integrity - Gốc rễ vấn đề - Data driven - Khoẻ mạnh - Truyền cảm hứng'
  }
]

const HanacareSuperAppStory = () => {
  return (
    <>
      <div className="hero-area  relative pt-10 xl:pt-20 pb-10 xl:pb-20 ">
        <div className="container mx-auto">
          <div className="hero-box-3 relative grid gap-8 grid-cols-1 lg:grid-cols-12 text-left">
            <div className="lg:col-span-8">
              <div className="hero-content lg:flex flex-wrap text-left relative lg:pr-14">
                <h1 className="w-full font-serif !leading-tight text-4xl lg:text-5xl text-gray-800 font-bold  mb-6">Câu chuyện về HanaCare - Nguồn cảm hứng khởi đầu</h1>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="feature-image relative aos-init aos-animate" data-aos="fade" data-aos-delay="100">
                <img className="rounded-xl w-full object-cover" style={{ maxHeight: 271 }} src="/images/hanacare-founder.jpg" alt="The century of climate migration" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-are pb-20">
        <div className='gh-content gh-canvas pb-20 xl:pb-20 max-w-4xl mx-auto'>
          <p>
            Đầu năm 2021, khi dịch bệnh Covid-19 đang xảy, Những hình ảnh về những đội ngũ y bác sĩ và những người tình nguyện viên hi sinh để chăm sóc cho người bệnh, từ chăm sóc sức khỏe cho người gặp khó khăn đến gọi điện trấn an cho người cách ly, tạo ra ý tưởng cho việc xây dựng một eco system về chăm sóc sức khỏe.
          </p>
          <p>
            Nơi có thể cung cấp những dịch vụ chăm sóc sức khỏe đa dạng, từ tư vấn sức khỏe đến chăm sóc theo địa điểm và đặt hẹn với bác sĩ, từ giảm cân và tập gym đến điều trị tâm lý và tăng cường sức khỏe tinh thần. Nó cũng hỗ trợ người dùng trong việc quản lý tài chính sức khỏe và giải quyết những vấn đề về bảo hiểm y tế.
          </p>
          <p>
            Vì thế ngay khi hết giãn cách, tôi đã tập họp anh em trong team lại và chia sẽ ý tưởng của mình. Mọi người nhanh chóng đồng thuận và bắt tay vào thực hiện xây những viên gạch đầu tiên để xây dựng HanaCare.
          </p>
          <p>
            Tên HanaCare được chọn vì Hana có nghĩa là hạnh phúc, bởi mục tiêu của chúng tôi là xây dựng một ứng dụng tiện lợi mang lại sức khỏe và hạnh phúc cho mọi người.
          </p>
          <div className="flex justify-end">
            <p className="italic">Đạt Nguyễn - Founder</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid sm:grid-col-2 md:grid-cols-3 mb-8 gap-8">
          {contentBoxs.map((item, index) => (
            <TopicCard key={index} title={item.title} image={item.icon} />
          ))}
        </div>
      </div>
    </>
  )
}

export default HanacareSuperAppStory