// Banner.jsx

import React from "react";
import Layouts from "../layouts/Layouts";
import { Col, Image } from "react-bootstrap";
import BannerFoto from "../../assets/images/banner/Bannerfoto.png";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <Layouts containerClassName="mt-5">
        <Col xs={12} md={5} lg={7}>
          <div className="banner-container">
            <Image src={BannerFoto} fluid className="" />
          </div>
        </Col>
        <Col xs={12} md={5} lg={5}>
          <div className="text-white mt-banner">
            <h1>Tonton Film, Acara TV Tak Terbatas, dan Lebih Banyak Lagi</h1>
          </div>
        </Col>
      </Layouts>
    </>
  );
};

export default Banner;
