import React, { useState } from 'react';
import './UpdateAsset.css';  // Certifique-se de importar o arquivo CSS
import '../standard.css'
import Grid from '@mui/material/Grid2';

const UpdateAsset = () => {
    const [formData, setFormData] = useState({
        estadoCivil: '',
        genero: '',
        revisores: [],
        usuario: '',
        aprovado: false,
        atualizadoEm: '',
        cpf: '',
        criadoEm: '',
        dataNascimento: '',
        diploma: null,
        foto: null,
        nome: '',
        nomeGuerra: '',
        registro: '',
        sobrenome: '',
        telefone: '',
    });

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
                            <label>Estado Civil:</label>
                            <input
                                type="text"
                                name="estadoCivil"
                                value={formData.estadoCivil}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Gênero:</label>
                            <select
                                name="genero"
                                value={formData.genero}
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
                            <label>Revisores:</label>
                            <select
                                multiple
                                name="revisores"
                                value={formData.revisores}
                                onChange={handleMultiSelectChange}
                            >
                                <option value="revisor1">Revisor 1</option>
                                <option value="revisor2">Revisor 2</option>
                                <option value="revisor3">Revisor 3</option>
                            </select>
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
                            <label>Aprovado:</label>
                            <input
                                type="checkbox"
                                name="aprovado"
                                checked={formData.aprovado}
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
                            <label>Diploma:</label>
                            <input
                                type="file"
                                name="diploma"
                                accept="image/*"
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="standard-input-group">
                            <label>Foto:</label>
                            <input
                                type="file"
                                name="foto"
                                accept="image/*"
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

export default UpdateAsset;
