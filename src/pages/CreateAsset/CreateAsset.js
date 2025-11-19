import React, { useState, useEffect } from "react";
import "../standard.css"; // Import standard CSS
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import api from "../../api";
import { useParams } from "react-router-dom";

const CreateAsset = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [proposal, setProposal] = useState({})
    const [termsAccepted, setTermsAccepted] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJournalists = async () => {
            try {
                const response = await api.get(`/api/internal/getProposal/${id}`);
                setProposal(response.data.data)
                console.log("response => ", response)
            } catch (err) {
                console.error("Failed to fetch journalists:", err);
            }
        };

        fetchJournalists();
    }, []);

    const handleSubmit = async () => {
        try {
            let data = JSON.parse(proposal)
            let response = await api.post(`/api/orjp/createJournalist`, {
                name: data.name,
                warName: data.warName,
                telephone: data.telephone,
                email: data.email,
                password: password,
                username: username,
                civilStatus: data.civilStatus,
                gender: data.gender,
                revisors: data.revisors,
                updatedAt: data.updatedAt,
                cpf: data.cpf,
                createdAt: data.createdAt,
                dateOfBirth: data.dateOfBirth,
                registry: data.registry,
                role: "normal"
            });
            if (response && response.status === 200) {
                navigate(`/Requests`)
                alert("Criado com sucesso")
            } else {
                throw new Error("Não foi possivel aprovar");
            }
        } catch (err) {
            console.error("Failed to fetch journalists:", err);
        }
    }

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Cadastrar</h2>
                <div className="input-group">
                    <label>username:</label>
                    <input
                        type="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            required
                            style={{ marginRight: '8px' }}
                        />
                        <label htmlFor="terms" style={{ textAlign: 'left', margin: 0 }}>
                            Eu concordo com os termos de uso e políticas de privacidade
                        </label>
                    </div>
                </div>
                <button type="button" onClick={handleSubmit} disabled={!termsAccepted}>
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default CreateAsset;
