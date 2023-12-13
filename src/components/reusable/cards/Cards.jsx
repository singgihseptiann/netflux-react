import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const CustomCard = ({ title, description, svg }) => {
  return (
    <Card className="text-white" style={{ backgroundColor: "#1F2127" }}>
      {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />} {/* Display SVG if available */}
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  svg: PropTypes.string, // Properti SVG menggunakan PropTypes.string
};

export default CustomCard;
