import React, { useState, useEffect } from "react";
import "../standard.css";
import Grid from "@mui/material/Grid2";
import { useParams } from "react-router-dom";
import { Journalists } from "../../api";

const UserInfo = () => {
  const { cpf } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJournalist = async () => {
      try {
        const response = await Journalists.getByCpf(cpf);
        const fetchedData = JSON.parse(response?.data);
        setData(fetchedData);
      } catch (err) {
        console.error("Failed to fetch journalist:", err);
      } finally {
        setLoading(false);
      }
    };

    if (cpf) {
      fetchJournalist();
    }
  }, [cpf]);

  if (loading) return <div className="standard-container">Carregando...</div>;
  if (!data)
    return <div className="standard-container">Nenhum dado encontrado</div>;

  return (
    <>
      <div className="standard-container">
        <div className="standard-form-container">
          <h2>Dados Cadastrados</h2>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
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
                <label>Revisores:</label> {data.revisors.join(", ")}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Usuário:</label> {data.username}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Aprovado:</label> {data.approved ? "Sim" : "Não"}
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
                <label>Diploma:</label>{" "}
                <img src={data.diplome} alt="Diploma" className="imagem" />
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Foto:</label>{" "}
                <img src={data.photo} alt="Foto" className="imagem" />
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
    </>
  );
};

export default UserInfo;
