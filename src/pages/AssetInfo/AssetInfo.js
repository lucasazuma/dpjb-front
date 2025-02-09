import React, { useState, useEffect } from 'react';
import './AssetInfo.css';  // Certifique-se de importar o arquivo CSS
import '../standard.css'
import Grid from '@mui/material/Grid2';
import { useSelector, useDispatch } from 'react-redux'
import api from '../../api'

const UserInfo = () => {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isDataReady, setIsDataReady] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsDataLoading(true);
        setIsDataReady(false);
        const response = await api.get('/query/ReadAsset/journalist1');
        setIsDataLoading(false);
        setIsDataReady(true);
        setData(JSON.parse(response.data.data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <> {
      isDataReady && <div className="standard-container">
        <div className="standard-form-container">
          <h2>Dados Cadastrados</h2>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid size={6}>
              <div className="standard-input-group">
                <label>Estado Civil:</label> {data.civilStatus}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Gênero:</label> {data.gender}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Revisores:</label> {data.revisors.join(', ')}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Usuário:</label> {data.username}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Aprovado:</label> {data.approved ? 'Sim' : 'Não'}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Atualizado em:</label> {data.updatedAt}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>CPF:</label> {data.cpf}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Criado em:</label> {data.createdAt}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Data de Nascimento:</label> {data.dateOfBirth}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Diploma:</label> <img src={data.diplome} alt="Diploma" className="imagem" />
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Foto:</label> <img src={data.photo} alt="Foto" className="imagem" />
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Nome:</label> {data.name}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Nome de Guerra:</label> {data.warName}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Registro:</label> {data.registry}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Email:</label> {data.email}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Telefone:</label> {data.telephone}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    }
    </>
  );
};

export default UserInfo;
