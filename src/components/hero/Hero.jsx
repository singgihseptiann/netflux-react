import React from "react";
import Layouts from "../layouts/Layouts";
import { Col, Image } from "react-bootstrap";
import SpiderMan from "../../assets/images/hero/spiderman.png";
import ButtonReusable from "../reusable/button/button";

const Hero = () => {
  return (
    <>
      <Layouts rowClassName="my-5">
        <Col>
          <div className="text-white">
            <h1 style={{ fontSize: "4em", marginTop: "110px" }}>Nikmati Tontonan Dimana Saja, Dan Kapan Saja</h1>
            <p>
              Tonton apa saja secara online dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, dan gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet.
            </p>
            <ButtonReusable text="Daftar Sekarang" />
          </div>
        </Col>
        <Col>
          <Image src={SpiderMan} fluid className="float-end" />
        </Col>
      </Layouts>
    </>
  );
};

export default Hero;
