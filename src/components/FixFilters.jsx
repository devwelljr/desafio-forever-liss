import React from "react";
import { Link } from "react-router-dom";

import FixFiltersContainer from "../styles/fixFilters";

function FixFilters() {
  const arrayFilters = [
    "PERFUME INFANTIL",
    "SABONETES",
    "PÓS-BANHO",
    "ASSADURAS",
    "HIDRATANTES",
    "LENÇOS UMEDECIDOS",
  ];

  return (
    <FixFiltersContainer>
      {arrayFilters.map((filter, index) => (
        <Link to='/' key={index} style={{ textDecoration: "none" }}>
          <h3 className='fixFilters'>{filter}</h3>
        </Link>
      ))}
    </FixFiltersContainer>
  );
}

export default FixFilters;
