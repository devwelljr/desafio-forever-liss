import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsContainer from "../styles/newsletter";

function Newsletter() {
  const [Email, setEmail] = useState("");
  const [disable, setDisable] = useState(true);
  const [response, setResponse] = useState({});
  const [emailInput, setEmailInput] = useState("");

  /* Requisicao e atualizacao do estado response */
  useEffect(() => {
    const url =
      "https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php";
    const body = { email: Email };
    axios
      .post(url, body, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => setResponse(err));
  }, [Email]);

  /* salva mudanças do input no estado local e valida o email */
  const handleChange = ({ target }) => {
    const { value } = target;
    const Patt =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const valid = Patt.test(value);

    if (valid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    setEmailInput(value);
  };

  /* Acao do clique faz a requisicao */
  const handleClick = () => {
    setEmail(emailInput);
  };

  return (
    <NewsContainer>
      <h2 id='infoTitle'>NEWSLETTER FOREVER BABY</h2>
      <h3 id='infoSecond'>
        Cadastre-se agora para não perder nenhuma promoção
      </h3>
      <div>
        <input
          type='email'
          name='email'
          id='inputHeader'
          placeholder='Digite aqui o seu melhor e-mail'
          onChange={handleChange}
          pattern='[a-zA-Z0-9]+'
        />
        <span className='input-group-btn'>
          <button
            className='btn btn-default'
            onClick={handleClick}
            type='button'
            disabled={disable}
          >
            CADASTRAR
          </button>
        </span>
        {response.Mensagem ? <span id="reponse">{response.Mensagem}</span> : null}
      </div>
    </NewsContainer>
  );
}

export default Newsletter;
