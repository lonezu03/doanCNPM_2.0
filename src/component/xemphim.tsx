import { useLocation } from "react-router-dom";
import Menu from "./menu";
import Gioithieuphim from "./gioithieuphim";
import Footer from "./footer"
const Xemphim = () => {
  const location = useLocation(); // Lấy data được truyền qua state
  const phim = location.state?.phim;
  console.log(phim.id);
  const gt={id:phim.id,name:phim.name,link_img:phim.link_img,mota:phim.mota}
  
  return (
    <div className="xemphim">
      <Menu />
      <Gioithieuphim data={gt} />
      <div className="phimne">
        <h1>{phim.name}</h1>
        <iframe id="my-iframe"
          width="835"
          height="462"
          src={phim.link}
          title="Tiêu Dao - Hoắc Kiến Hoa Vietsub"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>{" "}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Xemphim;
