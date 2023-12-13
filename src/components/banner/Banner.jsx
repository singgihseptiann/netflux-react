import React from "react";
import Layouts from "../layouts/Layouts";
import { Col, Image } from "react-bootstrap";
import BannerFoto from "../../assets/images/banner/Bannerfoto.png";
const Banner = () => {
  return (
    <>
      <Layouts>
        {" "}
        <Col>
          <Image src={BannerFoto} fluid className="float-end" />
        </Col>
        <Col>
          <div className="text-white">
            <h1 style={{ fontSize: "4em", marginTop: "100px" }}>Tonton Film, Acara TV Tak Terbatas, dan Lebih Banyak Lagi</h1>
          </div>
        </Col>
      </Layouts>
    </>
  );
};

export default Banner;
