import React from "react";
import CardPage from "./Card";

import ListContainer from "../styles/listCards";
import baby01 from "../images/products/baby01.jpeg";

function ListCards() {
  const data = [
    { title: "Produtos para banho", price: "99,99", source: baby01 },
    { title: "Fralda", price: "99,99", source: baby01 },
    { title: "Produto para cabelo", price: "99,99", source: baby01 },
    { title: "Roupas", price: "99,99", source: baby01 },
  ];

  return (
    <ListContainer>
      <h2 className='firstPart'>
        FOREVER BABY<p className='secondPart'>DESTAQUES</p>
      </h2>
      <div className="list">
        {data.map(({ title, price, source }, index) => (
          <CardPage key={index} title={title} price={price} source={source} />
        ))}
      </div>
      <h2 className='firstPart'>
        FOREVER BABY<p className='secondPart'>DESTAQUES</p>
      </h2>
      <div className="list">
        {data.map(({ title, price, source }, index) => (
          <CardPage key={index} title={title} price={price} source={source} />
        ))}
      </div>
    </ListContainer>
  );
}

export default ListCards;
