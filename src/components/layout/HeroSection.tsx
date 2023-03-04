import PlayStore from '~/svg/play-store.svg'
import AppStore from '~/svg/app-store.svg'

const HeroSection = () => {
  return (
    <div className="hero-area relative overflow-hidden pt-20 ">
      <div className="container mx-auto">
        <div className="hero-box-1 grid items-center sm:grid-cols-2 lg:grid-cols-12 gap-24">
          <div className="hero-cotent relative lg:col-span-7">
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-bold mb-12 !leading-tight">
              Chào mừng đến với &nbsp;
              <span style={{ display: 'inline-block' }}>
                <span style={{ color: '#75c905' }}>Hana</span>
                <span style={{ color: '#00b6fd' }}>Care&nbsp;</span>
              </span>
              Super App
            </h1>
            <h4 className="text-xl text-gray-600 font-normal mb-12">Với mục đích Mọi người đều khoẻ mạnh và hạnh phúc, chúng tôi sẽ luôn không ngừng phát triển các chương trình để hướng đến sức khoẻ của cộng đồng</h4>
            <div className="flex w-full justify-start fade-in">
              <AppStore width='auto' className='h-12 w-auto mr-4' />
              <PlayStore width='auto' className='h-12 w-auto' />
            </div>
          </div>
          <div className="feature-image relative lg:col-span-5">
            <img className="w-full object-contain" width="750" height="923" src='/images/hero-banner.png' alt="Ghost Learning Management System" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection