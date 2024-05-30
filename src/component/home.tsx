import /*React,*/ { useState } from "react";

//import Home1 from './home-ads.tsx'

import { NavLink, Route, Routes } from "react-router-dom";
import TrangChu from './trangchinh.tsx'
// Trong tệp my-global.d.ts
declare global {
  interface Window {
  //  id: number;
    tenTK: string;
  //  pass: string;
    loai: string;
  }
}


const Home = () => {
  let user='';
  let pass='';
  const [showForm, setShowForm] = useState<boolean>(false);
  
  const handleClick = () => {
    setShowForm(!showForm);
  };


  const manguser = [
    { id:0,tenTK: 'vu', pass: '1' ,loai:"admin"},
    { id:1,tenTK: 'dat', pass: '1',loai:"admin" },
    { id:2,tenTK: 'thay', pass: '1' ,loai:"user"},
    //...
  ];
  
 // const nopClick = () => {};
    
  return (

    <div id="home">
       <Routes>
    <Route path='/trangchu' element={<TrangChu/>}/>
</Routes> 
      
      
      <div className="chuabtn-dn">
      <button
        onClick={handleClick}
        className="dn"
        id="btn-dn"
      >
        Đăng nhập
      </button></div>
      {showForm && (
        <div id="form-dn">
          <form>
            <div className="mb-3" id="f">
              <label className="form-label">Email address</label>
              <input onChange={(e)=>{
                  user=e.target.value;
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
                 onChange={(e)=>{
                  pass=e.target.value;
                 }}
              ></input>
              <button id="btnCancle" onClick={handleClick}>Cancle</button>
            </div>
            
            <NavLink id="dangnhap"
  to="/Trangchu" 
  className={({ isActive }) => (isActive ? "active" : "")}
  onClick={(event) => {
    if (user) {
      for(let i=0;i<manguser.length;i++) {
        if(manguser[i].tenTK === user && manguser[i].pass === pass) {
          // Nếu thông tin đăng nhập đúng, cho phép chuyển hướng
          window.tenTK=manguser[i].tenTK;
          window.loai=manguser[i].loai;
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
        <img src="https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2022/2/3/photo1643861468728-1643861468806281325325.png" alt="" />
        <p id="gt">phút giây giải trí gắn kết gia đình</p>
        <p style={{
          top:'40%'
        }}>Đăng nhập để có những phút giây giải trí </p>
      </div>
    </div>
  );
};

export default Home;
