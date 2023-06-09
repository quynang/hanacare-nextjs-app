import axios from 'axios';

export default function DieuKhoanDichVu(props: any) {
  const page = props.data.pages[0];
  return (
    <>
      <div className='hero-area relative pt-20 xl:pt-28 '>
        <div className='container mx-auto'>
          <div className='page-title-box'>
            <div className='section-title gh-canvas mx-auto mb-20  max-w-4xl'>
              <h1 className='mb-8 w-full text-4xl font-bold text-gray-800 lg:text-5xl'>
                {page.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className='single-area pb-20'>
        <div
          className='gh-content gh-canvas  mx-auto max-w-4xl'
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
      </section>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const url = `https://ghost.hanacare.vn/ghost/api/content/pages/slug/dieu-khoan-dich-vu-hanacare?key=942efd06374ce7156d0bf617c4`;
  const fetcher = async () => await axios.get(url).then((res) => res.data);
  const data = await fetcher();
  return {
    props: {
      data,
    },
  };
}
