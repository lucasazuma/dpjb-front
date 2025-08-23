import React, { useState, useEffect } from "react";
import "../Login/LoginPage.css"; // Import the CSS file for styling
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import api from "../../api";
import { useParams } from "react-router-dom";

const CreateAsset = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [proposal, setProposal] = useState({})
    const { id } = useParams();

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
            console.log("hanlde submit #####")
            let data = JSON.parse(proposal)
            await api.post(`/api/orjp/createJournalist`, {
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
                <button type="button" onClick={handleSubmit}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default CreateAsset;
