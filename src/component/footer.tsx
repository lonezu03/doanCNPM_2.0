//import { FontAwesomeIcon } from '../../node_modules/@fortawesome/fontawesome-free'


//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
const footer = () => {
  function cun(){
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Cuộn mềm mại
    });
  }
  return (
    <div className="footer">
      <div className="chua3ul">
      <div style={{margin:'10px'}} className="chuaul  "> 
        
        <ul className="LienHe">
          <li id="dau"><p> Contact us :</p></li>
            <li> <i className="fa-solid fa-envelope"></i> phanthanhvu8548@gmail.com</li>
            <li> <i className="fa-solid fa-phone"></i> lonezu03@gmail.com </li>
            <li> <i className="fa-solid fa-envelope"></i> dannytang540@gmail.com</li>
            <li> <i className="fa-solid fa-phone"></i> 0386165820</li>
        </ul>
      </div>

      <div >       
        <ul className="diachi">
        <li id="dau"><p> Address:</p></li>

          <li><p> <i className="fa-solid fa-map-location"></i> 180 Cao Lỗ , Phường 4, Quận 8, TP. Hồ Chí Minh</p></li>
          <li><p> <i className="fa-solid fa-map-location"></i> 3/34 Hoàng Hoa Thám , Quận Đống Đa, TP. Hà Nội</p></li>
          <li><p> <i className="fa-solid fa-map-location"></i>127B1/4 Đường T11 ấp 2 xã An Phú Tây Bình Chánh </p></li>
        </ul>
      </div>

      <div className="fb">
        <ul>
          <li><button onClick={cun} id="btt"> Back to top </button></li>
          <li><a href="https://www.facebook.com/profile.php?id=100011468771607"><i className  ="fa-brands fa-facebook fa-2xl"></i>Phan Thanh Vũ DH52112108</a></li>
          <li><a href="https://www.facebook.com/hashe.ichi"><i className="fa-brands fa-instagram fa-2xl"></i>Tăng Cẩm Đạt DH52110786</a></li>
          
          
          
        </ul>
      </div>
      </div>
    </div>
  );
};
export default footer
