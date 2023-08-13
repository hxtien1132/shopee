import american from 'src/assets/images/americanex.png'
import appgaley from 'src/assets/images/appgalley.png'
import appstore from 'src/assets/images/appstore.png'
import cod from 'src/assets/images/cod.png'
import fb from 'src/assets/images/facebook.png'
import ggplay from 'src/assets/images/ggplay.png'
import linken from 'src/assets/images/in.png'
import insta from 'src/assets/images/insta.png'
import jcb from 'src/assets/images/jcb.png'
import mastercard from 'src/assets/images/mastercard.png'
import paylater from 'src/assets/images/paylater.png'
import qr from 'src/assets/images/qr.png'
import shoppepay from 'src/assets/images/shoppepay.png'
import tragop from 'src/assets/images/tragop.png'
import visa from 'src/assets/images/visa.png'
import viettel from 'src/assets/images/viettel.png'

export default function Footer() {
  return (
    <footer className='bg-slate-100 py-16'>
      <div className='container'>
        <div className='grid grid-cols-4 '>
          <div className='flex flex-col gap-5'>
            <h2 className='font-bold'>ABOUT SHOPEE</h2>
            <ul className='flex flex-col gap-2'>
              <li>About Us</li>
              <li>Shopee Careers</li>
              <li>Shopee Policies</li>
              <li>Privacy Policy</li>
              <li>Shopee Mall</li>
              <li>Seller Centre</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='font-bold'>PAYMENT</h2>
            <div className='grid grid-cols-3 gap-y-3 '>
              <img src={visa} alt='' className='bg-white p-1' />
              <img src={mastercard} alt='' className='bg-white  p-1' />
              <img src={viettel} alt='' className='bg-white  p-1' />
              <img src={jcb} alt='' className='bg-white  p-1' />
              <img src={tragop} alt='' className='bg-white  p-1' />
              <img src={cod} alt='' className='bg-white  p-1' />
              <img src={shoppepay} alt='' className='bg-white  p-1' />
              <img src={paylater} alt='' className='bg-white  p-1' />
              <img src={american} alt='' className='bg-white  p-1' />
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='font-bold'>FOLLOW US</h2>
            <div className=' flex flex-col gap-2'>
              <div className='flex gap-3'>
                <img src={`${fb}`} alt='' className='w-6' />
                <span className=''>Facebook</span>
              </div>
              <div className='flex gap-3'>
                <img src={`${insta}`} alt='' className='w-6' />
                <span>Instagram</span>
              </div>
              <div className='flex gap-3'>
                <img src={`${linken}`} alt='' className='w-6' />
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='font-bold'>SHOPEE APP DOWNLOAD</h2>
            <div className='flex gap-2'>
              <img src={qr} alt='' />
              <div className='flex flex-col justify-between'>
                <img src={appstore} alt='' className='w-[80px] bg-white' />
                <img src={ggplay} alt='' className='w-[80px] bg-white' />
                <img src={appgaley} alt='' className='w-[80px] bg-white' />
              </div>
            </div>
          </div>
        </div>

        {/* <h2>SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE</h2>
        <p>
          Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! Shopee là nền tảng giao dịch trực
          tuyến hàng đầu ở Đông Nam Á, có trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực Singapore, Malaysia,
          Indonesia, Thái Lan, Philippines, Đài Loan, Brazil, México & Colombia. Với sự đảm bảo của Shopee, bạn sẽ mua
          hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!
        </p>
        <h2>MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN</h2>
        <p>
          Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shopee.vn là một sự lựa chọn tuyệt vời
          dành cho bạn. Shopee là trang thương mại điện tử cho phép người mua và người bán tương tác và trao đổi dễ dàng
          thông tin về sản phẩm và chương trình khuyến mãi của shop. Do đó, việc mua bán trên Shopee trở nên nhanh chóng
          và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn
          nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí tưởng dành
          cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm, Shopee Blog - trang blog thông tin chính thức
          của Shopee - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang, review công nghệ, mẹo
          làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ.
        </p>
        <p>
          Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng
          dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tự tạo
          chương trình khuyến mãi trên Shopee để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập
          tại Shopee Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và
          cập nhập ngay các hoạt động của shop.
        </p>
        <h2>TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI</h2>
        <p>
          Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc, mọi nơi. Bạn có thể tải ứng dụng Shopee
          cũng như đăng sản phẩm bán hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng dụng Shopee còn có những ưu
          điểm sau:
        </p>
        <ul>
          <li>
            Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được ngay những sản phẩm nổi bật cũng như dễ
            dàng tìm đến các ô tìm kiếm, giỏ hàng hoặc tính năng chat liền tay.
          </li>
          <li>
            Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi trên cùng một tài khoản. Bạn sẽ vừa là
            người mua hàng, vừa là người bán hàng rất linh hoạt, dễ dàng.
          </li>
          <li>Cập nhập thông tin khuyến mãi, Shopee Flash Sale nhanh chóng và liên tục.</li>
        </ul>
        <h2>MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI SHOPEE</h2>
        <p>
          Mua hàng trên Shopee luôn là một trải nghiệm ấn tượng. Dù bạn đang có nhu cầu mua bất kỳ mặt hàng thời trang
          nam, thời trang nữ, đồng hồ, điện thoại, máy tính & laptop,... thì Shopee cũng sẽ đảm bảo cung cấp cho bạn
          những sản phẩm ưng ý. Bên cạnh đó, Shopee cũng có sự tham gia của các thương hiệu hàng đầu thế giới ở đa dạng
          nhiều lĩnh vực khác nhau. Trong đó có thể kể đến Samsung, OPPO, Xiaomi, Innisfree, Unilever, P&G,
          Biti’s,...Các thương hiệu này hiện cũng đã có cửa hàng chính thức trên Shopee Mall với hàng trăm mặt hàng
          chính hãng, được cập nhập liên tục. Là một kênh bán hàng uy tín, Shopee luôn cam kết mang lại cho khách hàng
          những trải nghiệm mua sắm online giá rẻ, an toàn và tin cậy. Mọi thông tin về người bán và người mua đều được
          bảo mật tuyệt đối. Các hoạt động giao dịch thanh toán tại Shopee luôn được đảm bảo diễn ra nhanh chóng, an
          toàn. Một vấn đề nữa khiến cho các khách hàng luôn quan tâm đó chính là mua hàng trên Shopee có đảm bảo không.
        </p> */}
        {/* <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div>© 2022 Shopee. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México
              Colombia Chile Poland
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <div>Công ty TNHH Shopee</div>
          <div className='mt-6'>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
            phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div className='mt-2'>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
          </div>
          <div className='mt-2'>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
          </div>
          <div className='mt-2'>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div> */}
      </div>
    </footer>
  )
}
