export default function DeleteAccountTutorial() {
  return (
    <>
      <div className='hero-area relative pt-20 xl:pt-28 '>
        <div className='container mx-auto'>
          <div className='page-title-box'>
            <div className='section-title gh-canvas mx-auto mb-20  max-w-4xl'>
              <h1 className='mb-8 w-full text-4xl font-bold !leading-normal text-gray-800 lg:text-5xl'>
                Hướng dẫn xóa tài khoản trên HanaCare
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className='single-area pb-20'>
        <div className='gh-content gh-canvas mx-auto max-w-4xl'>
          <p className='mb-4'>
            Để xóa tài khoản của bạn trên HanaCare app, làm theo các bước sau:
          </p>
          <ol className='list-decimal'>
            <li className='mb-4'>
              Mở ứng dụng và đăng nhập vào tài khoản của bạn.
            </li>
            <li className='mb-4'>
              Tìm và truy cập mục "Cá nhân" trong ứng dụng.
            </li>
            <li className='mb-4'>Tìm và chọn tùy chọn "Xóa tài khoản"</li>
            <li className='mb-4'>
              Đọc các thông tin liên quan và bấm nút "Xác nhận"
            </li>
            <li className='mb-4'>
              Một thông báo sẽ hiển thị, hỏi bạn xác nhận xóa tài khoản. Nhấn
              "Xóa" hoặc "OK" để xác nhận.
            </li>
            <li className='mb-4'>
              Ứng dụng sẽ xóa tài khoản của bạn và tất cả dữ liệu liên quan đến
              tài khoản đó trên ứng dụng.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
