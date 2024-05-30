import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Phimnoibat = () => {
 const dsphim = [
    {
      id: 97,
      name: "Thượng Thực",
      link_img:
        "https://i.imgur.com/il7aizK.jpg",

      link: "https://www.youtube.com/embed/UadMlVdcb7s",
      mota: "Tử Khâm được tuyển vào cung, quyết trở thành bậc thầy ẩm thực. Nàng gặp và phải lòng Chiêm Cơ, viết nên chuyện tình đầy cảm xúc chốn Hoàng cung.",
      theloai: "Cổ Trang",
    },
    {
      id: 98,
      name: "Bầu trời rực đỏ",
      link_img:
        "https://www.youtube.com/embed/fh0SIRK-J8c",

      link: "https://www.youtube.com/embed/fh0SIRK-J8c",
      mota: "Quỷ Vương trùng sinh vào Ha Ram. Nữ thần sinh mệnh lấy đi đôi mắt của cậu để nhường người sẽ giải cứu thế giới. Thiên mệnh 2 đứa trẻ bắt đầu.",
      theloai: "Cổ Trang",
    },
    {
      id: 99,
      name: "Trường nguyệt tẫn minh",
      link_img:
        "https://i.mpcdn.top/poster/truong-nguyet-tan-minh-11140.jpg?1683627748",

      link: "https://www.youtube.com/embed/5XPaB6Gu9XY",
      mota: "Để cứu lấy chúng sinh, con gái tông chưởng môn quay ngược về quá khứ để ngăn cản tên ma thần trước khi hắn bị tà cốt trong người xâm chiếm hoàn toàn.",
      theloai: "Cổ Trang",
    }
  ];
  const dsphimngan = [
    {
      id: 97,
      name: "Thượng Thực",
      link_img:
        "https://i.imgur.com/il7aizK.jpg",

      link: "https://trailer.vieon.vn/Teaser_ThuongThuc.mp4",
      mota: "Tử Khâm được tuyển vào cung, quyết trở thành bậc thầy ẩm thực. Nàng gặp và phải lòng Chiêm Cơ, viết nên chuyện tình đầy cảm xúc chốn Hoàng cung.",
      theloai: "Cổ Trang",
    },
    {
      id: 98,
      name: "Bầu trời rực đỏ",
      link_img:
        "https://i.mpcdn.top/poster/bau-troi-ruc-do-9339.jpg?1636211017",

      link: "https://trailer.vieon.vn/Teaser_BauTroiRucDo.mp4",
      mota: "Quỷ Vương trùng sinh vào Ha Ram. Nữ thần sinh mệnh lấy đi đôi mắt của cậu để nhường người sẽ giải cứu thế giới. Thiên mệnh 2 đứa trẻ bắt đầu.",
      theloai: "Cổ Trang",
    },
    {
      id: 99,
      name: "Trường nguyệt tẫn minh",
      link_img:
        "https://i.mpcdn.top/poster/truong-nguyet-tan-minh-11140.jpg?1683627748",

      link: "https://trailer.vieon.vn/Teaser_TruongNguyetTanMinhv3.mp4",
      mota: "Để cứu lấy chúng sinh, con gái tông chưởng môn quay ngược về quá khứ để ngăn cản tên ma thần trước khi hắn bị tà cốt trong người xâm chiếm hoàn toàn.",
      theloai: "Cổ Trang",
    }
  ];
  const [phim, setPhim] = useState(dsphim[0]);
    const [phimngan, setPhimngan] = useState(dsphimngan[0]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  if (videoRef.current ) {
   videoRef.current.src = phimngan.link;
  } 
  function next() {
    let tam;
    let vt;
    for (let i = 0; i < dsphimngan.length; i++) {
      if (dsphimngan[i].id == phimngan.id + 1)
        { tam = dsphimngan[i];
          vt=dsphim[i];
    }}
    console.log(vt);

    if (tam != null) {
      setPhimngan(tam);
      setPhim(vt)
      if (videoRef.current) {
        videoRef.current.src = phimngan.link;
      }
      // console.log('da set')

      // console.log(tam.link)

      // console.log(phimngan.link)
    } 
    else {
      setPhimngan(dsphimngan[0]);
      setPhim(dsphim[0]);
    }}
  function back() {
    let tam;
    let vt;
    for (let i = 0; i < dsphimngan.length; i++) {
      if (dsphimngan[i].id == phimngan.id - 1)
        { tam = dsphimngan[i];
          vt=dsphim[i];
    }}
   // console.log(tam);

    if (tam != null) {
      setPhimngan(tam);
      setPhim(vt)
      if (videoRef.current) {
        videoRef.current.src = phimngan.link;
      }
    } else
    { setPhimngan(dsphimngan[dsphimngan.length-1]);
      setPhim(dsphim[dsphimngan.length-1])
    }}
  return (
    <div className="phimnoibat">
      <div>
        <div id="noibat">
          <video  ref={videoRef} autoPlay muted loop id="vd">
          <source src={phimngan.link} type="video/mp4" />

          </video>

          <div className="noidungpnb">
            <div id="chuatenvatheloai">
              <p id="tenphim"> {phimngan.name}</p>
              <p id="theloai">Phim {phimngan.theloai}</p>
            </div>
            <Link to={`/xemphim/${phimngan.id}`} state={{ phim }} id="link">
              Watch now
            </Link>
            <p>{phimngan.mota}</p>
          </div>
          <div id="iconnext">
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              size="3x"
              onClick={back}
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              size="3x"
              onClick={next}
            />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};
export default Phimnoibat;
