import React from "react";
import { useParams } from "react-router-dom";

export const Checkout = () => {
  const {idCompra} = useParams();

  return <div>Gracias por su compra. El id es: {idCompra}</div>;
};
