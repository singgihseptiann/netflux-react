import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const Layouts = ({ containerClassName, rowClassName, children }) => {
  return (
    <Container className={containerClassName}>
      <Row className={rowClassName}>{children}</Row>
    </Container>
  );
};

export default Layouts;
