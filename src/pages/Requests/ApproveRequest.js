import React, { useState, useEffect } from "react";
import "../standard.css";
import Grid from "@mui/material/Grid2";
import { Proposals } from "../../api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const ApproveRequest = () => {
  const { id } = useParams();
  const [proposal, setProposal] = useState({});
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProposal = async () => {
      try {
        const response = await Proposals.getProposal(id);
        setProposal(JSON.parse(response?.data));
      } catch (err) {
        console.error("Failed to fetch proposal:", err);
      }
    };

    fetchProposal();
  }, [id]);

  const handleApproval = async () => {
    try {
      const response = await Proposals.approveProposal({
        id: id,
        approved: true,
        revisor: user.username
      });
      if (response && response.status === 200) {
        navigate(`/Requests`)
        alert("approved")
      } else {
        throw new Error("Não foi possivel aprovar");
      }
    } catch (error) {
      console.error("Não foi possivle aprovar", error);
    }
  };

  const handleRejection = async () => {
    try {
      const response = await Proposals.deleteProposal({
        id: proposal.id,
      });
      if (response && response.status === 200) {
        navigate(`/Requests`)
        alert("deleted")
      } else {
        throw new Error("Não foi possivel reporvar");
      }
    } catch (error) {
      console.error("Não foi possivle reprovar", error);
      throw new Error("Não foi possivel reprovar");
    }
  }

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
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              fontSize: "14px",
              color: "#333"
            }}
          >
            <strong>Motivação:</strong> {proposal.reason}
          </div>
          <div>
            <button style={{ backgroundColor: "green", borderRadius: "10px" }} onClick={() => handleApproval()}>
              Aprovar
            </button>
          </div>
          <div>
            <button style={{ backgroundColor: "red", borderRadius: "10px" }} onClick={() => handleRejection()}>
              Reprovar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApproveRequest;
