import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const Layouts = ({ containerClassName, rowClassName, colClassName, children }) => {
  return (
    <Container className={containerClassName}>
      <Row className={rowClassName}>
        <Col className={colClassName}>{children}</Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

Layouts.propTypes = {
  containerClassName: PropTypes.string,
  rowClassName: PropTypes.string,
  colClassName: PropTypes.string,
  children: PropTypes.node,
};

export default Layouts;
