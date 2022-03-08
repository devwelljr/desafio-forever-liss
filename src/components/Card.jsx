import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import cartCardIcon from "../images/cartCardIcon.png";

function CardPage({ title, price, source }) {
  /* Acao do botao ao ser clicado */
  const handleClick = () => {
    window.alert("Seu produto foi adicionado ao carrinho");
  };

  return (
    <Card
      style={{
        width: "256px",
        heigth: "387px",
        borderBottom: "5px solid #F5717F",
      }}
    >
      <Link to='/'>
        <Card.Img
          src={source}
          alt='cart image'
          style={{ minHeigth: "190px", maxHeight: "190px", maxWidth: "256px" }}
        />
      </Link>
      <Card.Body>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Card.Title
            style={{
              color: "#345C7D",
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "bold",
              lineHeight: "16px",
              textAlign: "left",
            }}
          >
            {title}
          </Card.Title>
        </Link>
        <Card.Text
          style={{
            fontSize: "16px",
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "#BF6B84",
            lineHeight: "19px",
            textAlign: "left",
          }}
        >{`R$ ${price}`}</Card.Text>
        <Rating size='23' style={{ marginBottom: "21px" }} />
        <Button
          variant='primary'
          style={{
            display: "flex",
            backgroundColor: "#FF8A00",
            borderRadius: "3px",
            boxShadow: "inset 0px 4px 10px #FFAD4D",
          }}
          onClick={handleClick}
        >
          <img
            src={cartCardIcon}
            alt='cartCardIcon'
            style={{ display: "inline-flex", width: "25px" }}
          />
          <h3
            style={{
              alignSelf: "center",
              display: "inline-flex",
              fontFamily: "Roboto",
              fontSize: "12px",
              fontWeight: "bold",
              lineHeight: "16px",
              margin: "0px",
            }}
          >
            ADICIONAR AO CARRINHO
          </h3>
        </Button>
      </Card.Body>
    </Card>
  );
}

CardPage.propTypes = {
  price: PropTypes.string,
  source: PropTypes.string,
  title: PropTypes.string,
};

export default CardPage;
