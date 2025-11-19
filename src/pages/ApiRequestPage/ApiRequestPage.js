import React, { useState } from 'react';
import './ApiRequestPage.css';
import '../standard.css';
import api from "../../api";
import { useNavigate } from "react-router-dom";

const ApiRequestPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [journalist, setJournalist] = useState({})
    const [proposal, setProposal] = useState({})
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const responseOrjp = await api.get(`/api/orjp/getJournalistByCpf/${inputValue}`);

            const responseInternal = await api.get(`/api/internal/getProposalByCpf/${inputValue}`);
            console.log(responseOrjp)
            console.log(responseInternal)
            
            setJournalist(responseOrjp.data.data === "" ? "": JSON.parse(responseOrjp.data.data))
            setProposal(responseInternal.data.data === "" ? "" : JSON.parse(responseInternal.data.data))
            setInputValue('');
        } catch (error) {
            console.error('Error making requests:', error);
            alert('Error making requests');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="standard-container">
            <div className="api-request-container">
                <h2>Procura de usuario por CPF</h2>

                <form onSubmit={handleSubmit} className="api-request-form">
                    <div className="input-group">
                        <label htmlFor="api-input">Procure por CPF:</label>
                        <input
                            id="api-input"
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Digite o cpf"
                            className="api-input"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? 'Procurando' : 'Procurar'}
                    </button>
                </form>
                <div className="requests-container">
                    <h3>Pedido:</h3>
                    {proposal.name ? (
                        <div className="requests-list">
                            <div className="request-item">
                                <div className="request-content">
                                    <p><strong>Resultado:</strong> {proposal.name}</p>
                                    <div className="request-actions">
                                        <button className="btn-edit" onClick={() => navigate(`/UpdateAsset/${journalist.id}`)}>Editar</button>
                                        <button className="btn-delete" onClick={() => navigate(`/UpdateAsset/${journalist.id}`)}>Deletar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Nenhum resultado foi encontrado</p>
                    )}
                </div>
                <div className="requests-container">
                    <h3>Jornalista</h3>
                    {journalist.name ? (
                        <div className="requests-list">
                            <div className="request-item">
                                <div className="request-content">
                                    <p><strong>Resultado:</strong> {journalist.name}</p>
                                    <div className="request-actions">
                                        <button className="btn-edit" onClick={() => navigate(`/UpdateAsset/${journalist.id}`)}>Editar</button>
                                        <button className="btn-delete" onClick={() => navigate(`/CreateDeletion/${journalist.id}`)}>Deletar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Nenhum resultado foi encontrado</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApiRequestPage;