import { Link } from "react-router-dom";
import "./trangchinh.css";
import Menu from "./menu";
import Phimnoibat from "./phimnoibat";
import Footer from "./footer";
import { useState } from "react";

const Trangchinh = () => {
  // const location = useLocation(); // Lấy data được truyền qua state
  // const user = location.state?.loai;

  const dsphim = [
    { id: 1, name: "Galaxy S23 Ultra 256GB", gia: "24.990.000", hang: "Samsung", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-s23-ulatra_2__1.png" },
    { id: 2, name: "Galaxy S24 Ultra 12GB 256GB", gia: "42.490.000", hang: "Samsung", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png" },
    { id: 3, name: "iPhone 13 128GB", gia: "13.590.000", hang: "Apple", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/air_m2.png" },
    { id: 4, name: "iPhone 15 128GB", gia: "19.090.000", hang: "Apple", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-13-pro-plus_9_.png" },
    { id: 5, name: "Redmi Note 13 Pro Plus 5G", gia: "9.990.000", hang: "Xiaomi", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-asus-vivobook-s-14-flip-tp3402va-lz025w-thumbnails.png" },
    { id: 6, name: "13T Pro 5G", gia: "14.790.000", hang: "Xiaomi", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-13-pro-thumb-xanh-la9.jpg" },
    { id: 7, name: "Reno11 F 5G", gia: "8.490.000", hang: "OPPO", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-oppo-reno-11-f-2.png" },
    { id: 8, name: "Find X5 Pro 12GB", gia: "16.790.000", hang: "OPPO", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/o/download_1__6_6.png" },
    { id: 9, name: "Xperia 1 V", gia: "28.990.000", hang: "Sony", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/o/sony-xperia-1-v.png" },
    { id: 10, name: "Xperia 10 V", gia: "9.690.000", hang: "Sony", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/o/sony-xperia-10-v_1_.png" },
    { id: 11, name: "Laptop Gaming Acer Nitro V ANV15-51-75GS", gia: "28.990.000", hang: "Acer", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_26__1_10.png" },
    { id: 12, name: "Laptop Acer Swift Go 14 AI", gia: "23.490.000", hang: "Acer", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-msi-sword-16-hx-b14vfkg-045vn_33_.png" },
    { id: 13, name: "Apple MacBook Air M1", gia: "18.390.000", hang: "Apple", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/air_m2.png" },
    { id: 14, name: "Macbook Air M3", gia: "27.290.000", hang: "Apple", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple_m3_slot.png" },
    { id: 15, name: "Laptop ASUS VivoBook S 14 FLIP", gia: "11.490.000", hang: "ASUS", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-asus-vivobook-s-14-flip-tp3402va-lz025w-thumbnails.png" },
    { id: 16, name: "Laptop ASUS Gaming ROG ZEPHYRUS G16", gia: "77.990.000", hang: "ASUS", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-asus-gaming-rog-zephyrus-g16-gu605mi-qr116w_2.png" },
    { id: 17, name: "Laptop MSI Cyborg 15", gia: "29.990.000", hang: "msi", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-msi-cyborg-15-a1vek-053vn_5_.png" },
    { id: 18, name: "Laptop MSI Pulse 17 AI", gia: "50.490.000", hang: "msi", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-msi-sword-16-hx-b14vfkg-045vn_8_.png" },
    { id: 19, name: "Laptop Lenovo Legion 5", gia: "39.590.000", hang: "Lenovo", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-lenovo-legion-5-16irx9-83dg004xvn-thumbnail_2_.png" },
    { id: 20, name: "Laptop Lenovo IdeaPad Slim 5", gia: "18.490.000", hang: "Lenovo", link_img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/a/laptop-lenovo-ideapad-slim-5-14irl8-82xd008lvn-1_1_.jpg" }
];

  const [dsphim1, setdsphim1] = useState(dsphim);
  function loc(e) {
    const dstam = dsphim.filter((el) => {
      return el.hang?.includes(e.target.value);
    });
    setdsphim1(dstam);
  }
  function tim(e) {
    const dstam = dsphim.filter((el) => {
      return el.name.includes(e.target.value);
    });
    setdsphim1(dstam);
  }
  return (
    <div className="trangchu">
      {<Menu />}
      
      {<Phimnoibat />}
      <div className="tim">
      <form role="search" id="form">
            <input
              type="search"
              id="query"
              name="q"
              placeholder="Search.."
              onChange={tim}
            ></input>
          </form>
          </div>
      <div className="chuaphimvaloc">
        <div className="nensang"></div>
        <div className="column1" style={{}}>
          {dsphim1.map((phim) => (
            <Link to={`/xemphim/${phim.id}`} state={{ phim }} id="link">
              <div
                key={phim.id}
                className="column15"
                // style={{
                //   backgroundImage: `url("${phim.link_img}")`,
                //   backgroundPosition: "center center",
                //   backgroundRepeat: "no-repeat",
                //   backgroundSize: "cover",
                // }}
              >
                <img
                  className="anhphim"
                  src={phim.link_img}
                  id="image"
                  alt="Movie Thumbnail"
                />
                <h5 id="title">{phim.name}</h5>
                <span>{phim.hang}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="loc">
          <ul className="ulloc">
            <span>Thể loại Hãng thiết bị</span>
            <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={"Sony"}
              />
              Sony
            </li>
            <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={"Acer"}
              />
              Acer
            </li> <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={"ASUS"}
              />
              ASUS
            </li> <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={"Lenovo"}
              />
              Lenovo
            </li>
             <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={"msi"}
              />
              msi
            </li>
            <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={"Samsung"}
              />
              Samsung
            </li>
            <li>
              <input type="radio" name="loc" onClick={loc} value={"Apple"} />
              Apple
            </li>
            <li>
              <input type="radio" name="loc" onClick={loc} value={"Xiaomi"} />
              Xiaomi
            </li>
            <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={"OPPO"}
                
              />
              OPPO
            </li>
            <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={''}
                defaultChecked
              />
              ALL
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trangchinh;
