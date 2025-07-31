function validaFormulario()

{
     if(document.fmrcadastro.txtnome.value=="")
        {
            alert("Opa, você nao preencha o campo Nome");
            document.fmrcadastro.txtnome.focus();
                return false;
        }
        else if(document.fmrcadastro.txtfone.value=="")
            {
                alert("Opa, você nao preencha o campo Telefone");
                document.fmrcadastro.txtfone.focus();
                    return false;
            }
                else if(document.fmrcadastro.txtemail.value=="")
                {
                    alert("Opa, você nao preencha o campo E-mail");
                    document.fmrcadastro.txtemail.focus();
                        return false;
                }
                    else
                    {
                            alert("tudo certo, ate a proxima");
                            return false;
                        
                    }
    function validarEmail(email) {
                    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                        return regex.test(email);
                      }
                      
                      const email = "exemplo@dominio.com";
                      if (validarEmail(email)) {
                        console.log("E-mail válido");
                      } else {
                        console.log("E-mail inválido");
                      }

}
