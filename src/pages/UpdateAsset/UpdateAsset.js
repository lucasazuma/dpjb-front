import React, { useState, useEffect } from 'react';
import '../standard.css';
import Grid from '@mui/material/Grid2';
import { useParams, useNavigate } from "react-router-dom";
import { Journalists, Proposals } from "../../api";

const UpdateAsset = () => {
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
    operation: "Update",
    reason: "",
    userId: "",
  });
  console.log(formData)

  useEffect(() => {
    const fetchJournalist = async () => {
      try {
        const response = await Journalists.get(id);
        const data = JSON.parse(response.data);
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
          operation: "Update",
          reason: "",
          username: data.username || '',
          userId: data.id || '',
        });
      } catch (err) {
      }
    };

    fetchJournalist();
  }, [id]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Proposals.createProposal({
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

  return (
    <div className="standard-container">
      <form onSubmit={handleSubmit} className="standard-form-container">
        <h2>Cadastro de Informações</h2>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            <div className="standard-input-group">
              <label>Estado Civil:</label>
              <input
                type="text"
                name="civilStatus"
                value={formData.civilStatus}
                onChange={handleChange}
              />
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Gênero:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="indefinido">Indefinido</option>
              </select>
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Usuário:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Atualizado em:</label>
              <input
                type="date"
                name="updatedAt"
                value={formData.updatedAt}
                onChange={handleChange}
              />
            </div>

          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>CPF:</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
              />
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Criado em:</label>
              <input
                type="date"
                name="createdAt"
                value={formData.createdAt}
                onChange={handleChange}
              />
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Data de Nascimento:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Nome:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Nome de Guerra:</label>
              <input
                type="text"
                name="warName"
                value={formData.warName}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid size={6}>
            <div className="standard-input-group">
              <label>Registro:</label>
              <input
                type="text"
                name="registry"
                value={formData.registry}
                onChange={handleChange}
              />
            </div>
          </Grid>

          <Grid size={6}>
            <div className="standard-input-group">
              <label>Telefone:</label>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>
          </Grid>

          <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Email:</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
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
        </Grid>
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
    </div>
  );
};

export default UpdateAsset;