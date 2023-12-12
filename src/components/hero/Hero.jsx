import React from "react";
import Layouts from "../layouts/Layouts";
import { Image } from "react-bootstrap";
import SpiderMan from "../../assets/images/hero/spiderman.png";
const Hero = () => {
  return (
    <>
      <Layouts colClassName="col-12 col-md-4 col-lg-6">
        <div>
          <h1>Nikmati Tontonan Dimana Saja, Dan Kapan Saja</h1>
        </div>
        <div>
          <Image src={SpiderMan} />
        </div>
      </Layouts>
    </>
  );
};

export default Hero;
