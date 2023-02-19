const BlocksContent = [
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fGNvZGV8ZW58MHx8fHwxNjYwMzc0MzMx&ixlib=rb-1.2.1&q=80&w=2000',
    slug: '',
    title: 'Câu chuyện về HanaCare Super App',
    description: 'Câu chuyện được trải nghiệm bởi chính Nhà sáng lập và niềm tin từ những  đồng đội HanaCare'
  },
  {
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fEhUTUwlMjBjb2RlfGVufDB8fHx8MTY2MDM3NDIzMQ&ixlib=rb-1.2.1&q=80&w=2000',
    slug: '',
    title: '2. Chính sách bảo mật thông tin',
    description: 'LHD nghiêm túc thực hiện trách nhiệm của mình liên quan đến bảo mật thông tin theo các quy định về bảo vệ bí mật thông tin cá nhân của pháp luật Việt Nam (“Luật riêng tư”) và cam kết tôn trọng quyền riêng tư và sự quan tâm của tất cả người dùng đối với website và ứng dụng di động của chúng tôi.....'
  },
  {
    img: 'https://images.unsplash.com/photo-1564865878688-9a244444042a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGNvZGV8ZW58MHx8fHwxNjYwMzc0MzMx&ixlib=rb-1.2.1&q=80&w=2000',
    slug: '',
    title: 'Điều khoản sử dụng',
    description: 'Điều khoản này sẽ xác định các hướng dẫn và quy tắc cho việc sử dụng ứng dụng, bao gồm cả việc sử dụng các tính năng và dịch vụ của ứng dụng.'
  },
  {
    img: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDR8fFVJJTIwZGVzaWdufGVufDB8fHx8MTY2MDM1OTg4Nw&ixlib=rb-1.2.1&q=80&w=2000',
    slug: '',
    title: 'Quy chế hoạt động',
    description: 'Các quy định về các vấn đề như quản lý, hoạt động kinh doanh, quản lý tài chính, và các vấn đề liên quan đến nhân viên và các đối tác. Quy chế hoạt động cung cấp một cấu trúc cho hoạt động của tổ chức và giúp đảm bảo rằng tất cả hoạt động được thực hiện một cách hợp lý và trung thực.'
  }
]
const AboutHanacare = () => {

  return (
    <>
      <div className="hero-area relative pt-20  topic-">
        <div className="container mx-auto">
          <div className="page-title-box">
            <div className="section-title max-w-4xl ">
              <h4 className="tag-name font-serif text-4xl lg:text-5xl text-gray-800 font-bold ">Chúng tôi hướng đến cuộc sống tốt đẹp</h4>
              <p className="tag-description text-lg text-gray-600 !leading-normal font-normal pt-8">Tại HanaCare, chúng tôi cung cấp ứng dụng CSSK tiện lợi cho mọi người làm chủ cuộc sống hạnh phúc và khỏe mạnh hơn. Bằng cách thu hút họ theo những hoạt động cá nhân, hoạt động nhóm, bổ ích trong suốt hành trình sức khỏe và lợi ích của họ.</p>
            </div>
          </div>
        </div>
      </div>
      <section className="course-area py-20 ">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 posts">
            {
              BlocksContent.map((item: any, index: number) => {
                return (
                  <div className="course-box-1 h-full rounded-lg border
     hover:border-white  bg-white hover:shadow-lg hover:-translate-y-1 group p-6 duration-300">
                    <div className="feature-image mb-6 rounded-lg overflow-hidden relative">
                      <img className="w-full h-72 object-cover group-hover:scale-105 duration-300  before:bg-blue-800" src={item.img} alt="Data Project - Election Analysis Part" />
                    </div>
                    <div className="course-content">
                      <h4 className="text-xl text-gray-800 hover:text-blue-600 font-bold duration-300">
                        <a href={`/post/${item.slug}`}>{item.title}</a>
                      </h4>
                      <p className="text-base font-normal mb-4 text-gray-600 line-clamp-2">{item.description}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>


  )
}

export default AboutHanacare