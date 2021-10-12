function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O CPF deve ter 11 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return {
      valido: false,
      texto: "A senha deve ser maior que 4 e menor que 72 dígitos.",
    };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarSenha };
