import React, { useState } from 'react';
import '../standard.css'
import Grid from '@mui/material/Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import api from "../../api";
import { useNavigate } from "react-router-dom";

const RegisterAsset = () => {
    const [formData, setFormData] = useState({
        civil_status: '',
        gender: '',
        revisors: [],
        updated_at: '',
        cpf: '',
        created_at: '',
        date_of_birth: '',
        name: '',
        warName: '',
        registry: '',
        telephone: '',
        email: '',
        operation: "Create",
        reason: '',
        username: "",
        userId: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: e.target.checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleMultiSelectChange = (e) => {
        const options = Array.from(e.target.selectedOptions, option => option.value);
        setFormData({ ...formData, revisores: options });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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

    return (
        <div className="standard-container">
            <form onSubmit={handleSubmit} className="standard-form-container">
                <h2>Cadastro de Informações</h2>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid size={6}>
                        <div className="standard-input-group">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">estadoCivil</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="civil_status"
                                    type="text"
                                    value={formData.civil_status}
                                    label="estadoCivil"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"casado"}>casado</MenuItem>
                                    <MenuItem value={"solteiro"}>solteiro</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="gender"
                                    type="text"
                                    value={formData.gender}
                                    label="Genero"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"masculino"}>masculino</MenuItem>
                                    <MenuItem value={"feminino"}>feminino</MenuItem>
                                    <MenuItem value={"indefinido"}>indefinido</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Atualizado em:</label>
                            <input
                                type="date"
                                name="updated_at"
                                value={formData.updated_at}
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
                                name="created_at"
                                value={formData.created_at}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Data de Nascimento:</label>
                            <input
                                type="date"
                                name="date_of_birth"
                                value={formData.date_of_birth}
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
                </Grid>
                <button type="submit" className="btn-submit">Enviar</button>
            </form>
        </div>
    );
};

export default RegisterAsset;
