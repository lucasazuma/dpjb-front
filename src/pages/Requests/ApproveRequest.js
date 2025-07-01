import React, { useState, useEffect } from "react";
import "../../stylesheets/AssetInfo.css"; // Certifique-se de importar o arquivo CSS
import "../standard.css";
import Grid from "@mui/material/Grid2";
import api from "../../api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const ApproveRequest = () => {
  const { id } = useParams();
  const [proposal, setProposal] = useState({});
  const { user } = useAuth();
    const navigate = useNavigate();

  useEffect(() => {
    const fetchJournalists = async () => {
      try {
        const response = await api.get(`/api/internal/getProposal/${id}`);
        setProposal(JSON.parse(response.data?.data));
      } catch (err) {
        console.error("Failed to fetch journalists:", err);
      }
    };

    fetchJournalists();
  }, []);

  const handleApproval = async () => {
    console.log("handle approval")
    try {
      const response = await api.post("/api/internal/approveProposal", {
        id: id,
        approved: true,
        revisor: user.name
      });
      if (response && response.status === 200) {
        navigate(`/Requests`)
        alert("approved")
      } else {
        throw new Error("Não foi possivel aprovar");
      }
    } catch (error) {
      console.error("Não foi possivle aprovar", error);
      throw new Error("Não foi possivel aprovar");
    }
  };

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
                <label>Estado Civil:</label> {proposal.civilStatus}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Gênero:</label> {proposal.gender}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Revisores:</label> {proposal.revisors?.join(", ")}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Usuário:</label> {proposal.username}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Aprovado:</label> {proposal.approved ? "Sim" : "Não"}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Atualizado em:</label> {proposal.updatedAt}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>CPF:</label> {proposal.cpf}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Criado em:</label> {proposal.createdAt}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Data de Nascimento:</label> {proposal.dateOfBirth}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Nome:</label> {proposal.name}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Nome de Guerra:</label> {proposal.warName}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Registro:</label> {proposal.registry}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Email:</label> {proposal.email}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Telefone:</label> {proposal.telephone}
              </div>
            </Grid>
          </Grid>
          <div>
            <button style={{ backgroundColor: "green", borderRadius: "10px" }} onClick={() => handleApproval()}>
              Aprovar
            </button>
          </div>
          <div>
            <button style={{ backgroundColor: "red", borderRadius: "10px" }}>
              Reprovar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApproveRequest;
