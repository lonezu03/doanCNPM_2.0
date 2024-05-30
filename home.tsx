import React, { useState } from "react";

import { NavLink, Route, Routes } from "react-router-dom";
import TrangChu from "./src/component/trangchinh";

const Home = () => {
  let user = "";
  let pass = "";
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const manguser = [
    { id: "vu", pass: "1" },
    { id: "dat", pass: "1" },
    { id: "thay", pass: "1" },
    //...
  ];

  // const nopClick = () => {};

  return (
    <div id="home">
      <Routes>
        <Route path="/trangchu" element={<TrangChu />} />
      </Routes>
      <img
        id="home-bg"
        width="10%"
        height="10%"
        src="https://png.pngtree.com/png-vector/20220723/ourlarge/pngtree-cat-gold-logo-png-image_6034268.png"
        alt=""
      />

      <button
        onClick={handleClick}
        className="btn btn-primary btn-block btn-color-red"
        id="btn-dn"
      >
        đăng nhập
      </button>
      {showForm && (
        <div id="form-dn">
          <form>
            <div className="mb-3" id="f">
              <label className="form-label">Email address</label>
              <input
                onChange={(e) => {
                  user = e.target.value;
                }}
                type="emaail"
                className="form-control form-control-action"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
              {/* <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div> */}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  pass = e.target.value;
                }}
              ></input>
            </div>

            <NavLink
              to="/Trangchu"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={(event) => {
                if (user) {
                  for (const a of manguser) {
                    if (a.id === user && a.pass === pass) {
                      // Nếu thông tin đăng nhập đúng, cho phép chuyển hướng
                      return;
                    }
                  }
                }
                // Nếu thông tin đăng nhập sai, ngăn chặn chuyển hướng và hiển thị thông báo lỗi
                event.preventDefault();
                alert("Thông tin đăng nhập không chính xác. Vui lòng thử lại.");
              }}
            >
              Đăng nhập
            </NavLink>
          </form>
        </div>
      )}
      <div id="bd">

        <p>phút giây giải trí gắn kết gia đình đăng nhập để có những phút giây giải trí</p>
      </div>
    </div>
  );
};

export default Home;
