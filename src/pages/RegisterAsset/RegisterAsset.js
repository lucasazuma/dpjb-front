import React, { useState } from 'react';
import './RegisterAsset.css';  // Certifique-se de importar o arquivo CSS
import '../standard.css'
import Grid from '@mui/material/Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

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
    });

    const names = ['revisor1', 'revisor2', 'revisor3']

    const handleChange = (e) => {
        console.log(e.target)
        const { name, value, type } = e.target;
        console.log(`name: ${name} value: ${value} type: ${type}`)
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: e.target.checked });
        } else {
            console.log("jajjajajajajajajajaj")
            setFormData({ ...formData, [name]: value });
        }
        console.log(formData);
    };

    const handleMultiSelectChange = (e) => {
        const options = Array.from(e.target.selectedOptions, option => option.value);
        setFormData({ ...formData, revisores: options });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Revisores</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="revisors"
                                    multiple
                                    type="text"
                                    value={formData.revisors}
                                    label="Revisores"
                                    onChange={handleChange}
                                >
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Usuário:</label>
                            <input
                                type="text"
                                name="usuario"
                                value={formData.usuario}
                                onChange={handleChange}
                            />
                        </div>

                    </Grid>


                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Atualizado em:</label>
                            <input
                                type="date"
                                name="atualizadoEm"
                                value={formData.atualizadoEm}
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
                                name="criadoEm"
                                value={formData.criadoEm}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Data de Nascimento:</label>
                            <input
                                type="date"
                                name="dataNascimento"
                                value={formData.dataNascimento}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Nome:</label>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Nome de Guerra:</label>
                            <input
                                type="text"
                                name="nomeGuerra"
                                value={formData.nomeGuerra}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>
                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Registro:</label>
                            <input
                                type="text"
                                name="registro"
                                value={formData.registro}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Sobrenome:</label>
                            <input
                                type="text"
                                name="sobrenome"
                                value={formData.sobrenome}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Telefone:</label>
                            <input
                                type="text"
                                name="telefone"
                                value={formData.telefone}
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
