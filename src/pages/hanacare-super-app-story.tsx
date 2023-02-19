import TopicCard from "@/components/cards/TopicCard"

const contentBoxs = [
  {
    icon: '/images/tam-nhin.png',
    title: 'Tầm nhìn',
    description: 'Mỗi người được sử dụng dịch vụ và sản phẩm CSSK tốt nhất để họ có cuộc sống hạnh phúc trọn vẹn'
  },
  {
    icon: '/images/su-menh.png',
    title: 'Sứ mệnh',
    description: 'Cung cấp ứng dụng CSSK dành cho mọi người để giải quyết vấn đề một cách tiện lợi'
  },
  {
    icon: '/images/gia-tri-cot-loi.png',
    title: 'Giá trị cốt lõi',
    description: 'Integrity - Gốc rễ vấn đề - Data driven - Khoẻ mạnh - Truyền cảm hứng'
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
                <div className="rounded-xl bg-left-top w-full bg-[url('/images/hanacare-founder.jpg')]" style={{ height: 272, backgroundSize: '100% 160%', backgroundPosition: '0px -50px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-are pb-20">
        <div className='gh-content gh-canvas pb-20 xl:pb-20 max-w-4xl mx-auto'>
          <p>
            Vào giữa năm 2021, khi mà covid-19 đang hoành hành, đau thương mất mát xảy ra ở khắp nơi, khiến nhiều người hoang mang tuyệt vọng. Lúc đó hình ảnh các thiên thần áo trắng, chiến đấu quên bản thân chăm sóc cho mọi người đã cho tôi niềm tin vào tương lai, rằng dịch bệnh sẽ qua đi, mọi người sẽ lại có cuộc sống an yên.
          </p>
          <p>
            Và cũng từ đó, ý tưởng về xây dựng app chăm sóc sức khỏe và hạnh phúc cho mọi người được hình thành. Tôi muốn xây dựng một ứng dụng như thiên thần áo trắng bên cạnh mọi người, cung cấp những dịch vụ chăm sóc sức khỏe đa dạng và tiện lợi.
          </p>
          <p>
            Từ tư vấn sức khỏe đến chăm sóc bệnh nhân, đặt hẹn với bác sĩ. Từ giảm cân, tập gym đến điều trị tâm lý và tăng cường sức khỏe tinh thần. Từ bảo hiểm, quản lý tài chính đến việc kết nối cộng đồng. Giúp xây dựng một môi trường trong lành và phát triển bản thân.
          </p>
          <p>
            Tôi muốn ứng dụng này có thể giúp mọi người có một cuộc sống an yên trọn vẹn.
          </p>
          <p>
            Sau khi ghi chép lại ý tưởng xong, tôi lập tức chia sẻ ý tưởng với các thành viên trong đội  Mọi người nhanh chóng đồng thuận vì mỗi thành viên, ai cũng đang ấp ủ xây dựng được một ứng dụng có thể đóng góp cho cộng đồng đặc biệt là về vấn đề sức khỏe. Chính vì thế, mà chúng tôi bắt tay vào sắp xếp những viên gạch đầu tiên để xây dựng ứng dụng ngay.
          </p>
          <p>
            Hana có nghĩa là hạnh phúc cũng có nghĩa là hoa. Hoa tặng người mình yêu quý, hoa chữa lành vết thương người được tặng. Chúng tôi muốn xây dựng HanaCare thành một ứng dụng biết chăm sóc, chia sẻ, quan tâm mọi người và được mọi người yêu mến. Vậy nên chúng tôi đã đặt tên app là HanaCare, app chăm sóc sức khỏe và hạnh phúc cho mọi người.
          </p>
          <div className="flex justify-end">
            <p className="italic">Đạt Nguyễn - Founder</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid sm:grid-col-2 md:grid-cols-3 mb-8 gap-8">
          {contentBoxs.map((item, index) => (
            <TopicCard key={index} title={item.title} description={item.description} image={item.icon} />
          ))}
        </div>
      </div>
    </>
  )
}

export default HanacareSuperAppStory