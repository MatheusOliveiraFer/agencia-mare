import { useState } from "react";
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as C from '../components/Contato';

export const Contato = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''

  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  //Receber os dados do formulário
  const valueInput = (e: { target: { name: any; value: any; }; }) => setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar os dados para o back-end
  const addUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'success',
        mensagem: "Solicitação recebida com sucesso!!"
      });
      setUser({
        name: '',
        email: '',
        password: ''
      });
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Não foi possível enviar!"
      });
    }
  }

  function validate() {
    if (!user.name) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!' });
    if (!user.email) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!' });
    // if(!user.password) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo senha!'});
    // if(user.password.length < 6) return setStatus({type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!'});

    return true;
  }





  //Consulta API
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e: any) => {
    console.log(e);
  }

   const limpa_formulário_cep = (e: any) => {
    //Limpa valores do formulário de cep.
    const cep = e.target.value = ("");
}


  const checkCEP = (e: any) => {
    //Pega o valor digitado pelo usuário
    const cep = e.target.value.replace(/\D/g, '');
    console.log("Busca do cep com somente números: "+cep);

     //Expressão regular para validar o CEP.
     var validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        console.log(data);
        // register({ name: 'address', value: data.logradouro });
        setValue('address', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('uf', data.uf);
        setFocus('addressNumber');
      });
    } else {
      //cep é inválido.
      limpa_formulário_cep(e);
      alert("O CEP informado é inválido. Sugestão: 00000-000");
    }
  }

  return (
    <C.Header>
        <div className="white-box">
          <h1 className="header-title">Entrar em contato</h1>

          {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
          {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

          <form className="cep-box" onSubmit={addUser}>
            <div id="cep" className="form-box">
              <label className="cep" >Cep</label>
              <input type="text"  {...register("cep")} onBlur={checkCEP} onChange={valueInput} />
            </div>
            <div className="form-box">
              <label>Rua</label>
              <input type="text" {...register("address")} onChange={valueInput}  />
            </div>
            <div className="form-box">
              <label>Bairro</label>
              <input type="text" {...register("neighborhood")}onChange={valueInput}  />
            </div>
            <div className="form-box">
              <label>Cidade</label>
              <input type="text" {...register("city")} onChange={valueInput} />
            </div>
            <div className="form-box">
              <label>Estado</label>
              <input type="text" {...register("uf")} onChange={valueInput}  />
            </div>
            <div className="form-box">
              <div className="required-field">
                <label>Nome</label>
                <p>*</p>
              </div>

              <input type="text" name="name" placeholder="Nome completo do usuário" onChange={valueInput} value={user.name} required/>
            </div>
            <div className="form-box">
              <div className="required-field">
                <label>E-mail</label>
                <p>*</p>
              </div>
              <input type="email" name="email" placeholder="Melhor e-mail do usuário" onChange={valueInput} value={user.email} required/>
            </div>
            {/* <label>Senha*: </label>
         <input type="password" name="password" placeholder="Senha para acessar o sistema" autoComplete="on" onChange={valueInput} value={user.password} /><br /><br /> */}

            * Campo obrigatório<br /><br />

            <div className="button-box">
              <button  type="submit">Enviar seu contato</button>
            </div>
          </form>
        </div>
    </C.Header>
  );
}

