import { useState } from "react";
import { Routes, Route, Link, Router, useParams } from "react-router-dom";
import "./Detail.css";
import "../styles/fonts.css";

function Detail({ product }) {
  const { id } = useParams();
  // URL에서 변수 형태 값을 가져올 수 있게 해주는 리액트 라우터 훅
  // URL 에 입력되는 id 값을 가져옴 (ex. detail/1 로 접속하면 1을 가져옴 detail/2는 2 가져옴 )

  return (
    <>
      <div className="detailBox">
        <img className="detailImg" src={`/images/${product[id].img}`} />
        <div className="detailContent">
          <p className="detailItem"> {product[id].item}</p>
          <p className="detailPrice"> {product[id].price}</p>
          <button> 주문하기 </button>
        </div>
      </div>

      {/* URL 파라미터를 이용해서 여러 개의 페이지를 만들어보자 */}
    </>
  );
}

export default Detail;
