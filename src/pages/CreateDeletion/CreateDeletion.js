import React, { useState, useEffect } from 'react';
import '../standard.css'
import Grid from '@mui/material/Grid2';
import { useSelector, useDispatch } from 'react-redux'
import api from '../../api'
import { electorUser } from '../../utils/mock'
import { useParams, useNavigate } from "react-router-dom";


const UserInfo = () => {
  const data = electorUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    civilStatus: '',
    gender: '',
    revisors: [],
    username: '',
    approved: false,
    updatedAt: '',
    cpf: '',
    createdAt: '',
    dateOfBirth: '',
    diploma: null,
    photo: null,
    name: '',
    warName: '',
    registry: '',
    lastName: '',
    telephone: '',
    operation: "Deletion",
    reason: "",
    username: "",
    userId: "",
  });

  useEffect(() => {
    const fetchJournalists = async () => {
      try {
        const response = await api.get(`/api/orjp/getJournalist/${id}`);
        const data = JSON.parse(response.data.data);
        setFormData({
          civilStatus: data.civilStatus || '',
          gender: data.gender || '',
          revisors: [],
          updatedAt: data.updatedAt || '',
          cpf: data.cpf || '',
          createdAt: data.createdAt || '',
          dateOfBirth: data.dateOfBirth || '',
          name: data.name || '',
          warName: data.warName || '',
          registry: data.registry || '',
          telephone: data.telephone || '',
          email: data.email || '',
          operation: "Deletion",
          reason: "",
          username: data.username || '',
          userId: data.id || '',
        });
      } catch (err) {
      }
    };

    fetchJournalists();
  }, []);

  const handleSubmit = async (e) => {
    try {
      const response = await api.post("/api/internal/createProposal", {
        formData
      });
      if (response && response.status === 200) {
        navigate(`/Requests`)
        alert("Pedido registrado com sucesso")
      } else {
        throw new Error("Não foi possivel registrar o pedido");
      }
    } catch (err) {
      console.error("Failed to fetch journalists:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <>
      <div className="standard-container">
        <div className="standard-form-container">
          <h2>Dados Cadastrados</h2>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid size={6}>
              <div className="standard-input-group">
                <label>Estado Civil:</label> {formData.civilStatus}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Gênero:</label> {formData.gender}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Usuário:</label> {formData.username}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Atualizado em:</label> {formData.updatedAt}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>CPF:</label> {formData.cpf}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Criado em:</label> {formData.createdAt}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Data de Nascimento:</label> {formData.dateOfBirth}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Nome:</label> {formData.name}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Nome de Guerra:</label> {formData.warName}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Registro:</label> {formData.registry}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Email:</label> {formData.email}
              </div>
            </Grid>

            <Grid size={6}>
              <div className="standard-input-group">
                <label>Telefone:</label> {formData.telephone}
              </div>
            </Grid>
          </Grid>
          <div className="input-group">
            <label>Motivo:</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            />
          </div>
           <button type="submit" className="btn-submit" onClick={() => handleSubmit()}>Enviar</button>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
