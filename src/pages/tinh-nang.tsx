import TopicCard from "@/components/cards/TopicCard"
import { features } from "@/config"

const HanacareFeature = () => {
  return (
    <>
      <div className="hero-area  relative pt-10 xl:pt-20">
        <div className="container mx-auto">
          <div className="hero-box-3 relative grid gap-8 grid-cols-1 lg:grid-cols-12 text-left">
            <div className="lg:col-span-8">
              <div className="hero-content lg:flex flex-wrap text-left relative lg:pr-14">
                <h1 className="w-full font-serif !leading-tight text-4xl lg:text-5xl text-gray-800 font-bold  mb-6">Tính năng của Hanacare</h1>
                <p className="text-md lg:text-lg text-gray-600 font-normal">HanaCare làm gì để hướng đến mục tiêu: "Mọi người đều khoẻ mạnh và hạnh phúc".</p>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="feature-image relative aos-init aos-animate" data-aos="fade" data-aos-delay="100">
                <img className="rounded-xl w-full object-cover" style={{ maxHeight: 271 }} src="/images/hanacare-features-banner.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="topics-area py-20">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <TopicCard key={index} title={item.title} description={item.description} image={item.image} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default HanacareFeature 