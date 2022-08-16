import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormCart = ({cart, cartTotal, clearCart}) => {

    const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    nombre: "",
    telefono: "",
  });

  const [loading, setLoading] = useState(false);

  const URL = "https://fake-products-eric.herokuapp.com/api/orders";

  const order = async () => {
    setLoading(true);

    const sendInfo = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
        total: cartTotal,
        user: dataForm.nombre,
        phone: dataForm.telefono,
      }),
    });

    const response = await sendInfo.json();
    setLoading(true)
    clearCart();
    navigate(`/checkout/${response.id}`)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    order();
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          value={dataForm.nombre}
        />
        <input
          type="text"
          name="telefono"
          placeholder="Ingresa tu telefono"
          onChange={handleChange}
          value={dataForm.telefono}
        />
        <button>{loading ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </div>
  );
};

export default FormCart;
