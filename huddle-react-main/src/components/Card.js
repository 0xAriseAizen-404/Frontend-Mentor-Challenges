import React from "react";
import { StyledCard } from "./styles/Card.styled";

export const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard direction={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt={title} />
      </div>
    </StyledCard>
  );
};
