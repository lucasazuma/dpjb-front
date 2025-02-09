import React, { useState } from 'react';
import './AssetInfo.css';  // Certifique-se de importar o arquivo CSS
import '../standard.css'
import Grid from '@mui/material/Grid2';
import { useSelector, useDispatch } from 'react-redux'
import {api} from '../../api'

const UserInfo = () => {
  const [formData, setFormData] = useState({
    estadoCivil: 'Casado',
    genero: 'Masculino',
    revisores: ['Revisor 1', 'Revisor 2'],
    usuario: 'usuario123',
    aprovado: true,
    atualizadoEm: '2025-02-01',
    cpf: '123.456.789-00',
    criadoEm: '2025-01-01',
    dataNascimento: '1990-01-01',
    diploma: 'imagem_diploma.png',
    foto: 'imagem_foto.png',
    nome: 'João',
    nomeGuerra: 'Joãozinho',
    registro: '12345',
    sobrenome: 'Silva',
    telefone: '(11) 98765-4321',
  });
  const user = useSelector(state => state.user)
  console.log(user)

  return (
    <div className="standard-container">
      <div className="standard-form-container">
        <h2>Dados Cadastrados</h2>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            <div className="standard-input-group">
              <label>Estado Civil:</label> {formData.estadoCivil}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Gênero:</label> {formData.genero}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Revisores:</label> {formData.revisores.join(', ')}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Usuário:</label> {formData.usuario}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Aprovado:</label> {formData.aprovado ? 'Sim' : 'Não'}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Atualizado em:</label> {formData.atualizadoEm}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>CPF:</label> {formData.cpf}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Criado em:</label> {formData.criadoEm}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Data de Nascimento:</label> {formData.dataNascimento}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Diploma:</label> <img src={formData.diploma} alt="Diploma" className="imagem" />
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Foto:</label> <img src={formData.foto} alt="Foto" className="imagem" />
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Nome:</label> {formData.nome}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Nome de Guerra:</label> {formData.nomeGuerra}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Registro:</label> {formData.registro}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Sobrenome:</label> {formData.sobrenome}
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Telefone:</label> {formData.telefone}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UserInfo;
