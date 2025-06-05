import "../layout/Footer.css";
import { MdOutlineAnnouncement } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <hr style={{ marginTop: "150px" }} />
      <div className="footTop">
        <div className="footSelect">
          <MdOutlineAnnouncement style={{ margin: "5px" }} />
          <div>공지사항</div>
        </div>
        <hr style={{ width: "98%" }} />
        <div className="footSelect">
          <RiCustomerService2Fill style={{ margin: "5px" }} />
          <div>고객센터</div>
        </div>
        <hr style={{ width: "98%" }} />
      </div>
      <div className="footContatiner">
        <h2> ringle </h2>
        <p> 2025 최윤진 핸드크림 페이지 포트폴리오 </p>
        <p> 사용 기술 : React.js, React-Bootstrap, Vite, css </p>
      </div>
    </>
  );
}

export default Footer;
