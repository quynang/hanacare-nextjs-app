const HeroSection = () => {
  return (
    <div className="hero-area relative overflow-hidden pt-20 ">
      <div className="container mx-auto">
        <div className="hero-box-1 grid items-center sm:grid-cols-2 lg:grid-cols-12 gap-24">
          <div className="hero-cotent relative lg:col-span-7">
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-bold  mb-12 !leading-tight">Chào mừng đến với HanaCare Super App</h1>
            <h4 className="text-xl text-gray-600 font-normal mb-12">Với mục đích Mọi người đều khoẻ mạnh và hạnh phúc, chúng tôi sẽ luôn không ngừng phát triển các chương trình để hướng đến sức khoẻ của cộng đồng</h4>
            <div className="flex w-full justify-center md:justify-start fade-in">
              <img src="/svg/app-store.svg" className='h-12  text-cyan-200 pr-4' />
              <img src="/svg/play-store.svg" className='h-12' />
            </div>
          </div>
          <div className="feature-image relative lg:col-span-5">
            <img className="w-full h-96 object-cover rounded-xl learn-cover-img" width="750" height="923" src="/images/hero-banner.jpg" alt="Ghost Learning Management System" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection