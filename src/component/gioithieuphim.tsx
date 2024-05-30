import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faSquareShareNodes } from '@fortawesome/free-solid-svg-icons';
function gioithieuphim (props) {
  //const {id,name,link_img,mota } = props;
  const phim=props.data
  function cun(){
    window.scrollTo({
      top: 900,
      behavior: "smooth" // Cuộn mềm mại
    });
  }
  console.log (props.data)
  console.log(phim)
  return (
    <div className="gioithieuphim">
      <div>
        <button onClick={cun} id="btnanh">
          <div  id="anh">
            
          <img src={phim.link_img} alt="" />
          </div>
        </button>
      </div>
      <div id="chuacontentvabovochoday">
      <div id="content">
        <p>New Episodes</p>
        <h3 id="title">{phim.name}</h3>{" "}
        <h5>{phim.mota}</h5>

      </div>
      <div id="bovochoday">
      
      <p id="icon"><FontAwesomeIcon icon={faSquareShareNodes} size="3x" style={{ color: 'blue' }}/></p>
            <div>
        <h2>Prime Video</h2>
        <p>Streaming Channels</p>
      </div>
      <button onClick={cun}>WATCH NOW</button>
      </div>
      </div>
      <div id="dow"><p>DOWLOAD</p>
      <FontAwesomeIcon icon={faDownload} />

      </div>
    </div>
  )
}
export default gioithieuphim;
