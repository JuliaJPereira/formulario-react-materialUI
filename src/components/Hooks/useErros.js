import React, { useState } from "react";

function useErros(validacoes) {
  const [erros, setErros] = useState({
    cpf: { valido: true, texto: "" },
    senha: { valido: true, texto: "" },
  });

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampos, possoEnviar];
}

export default useErros;
