import React, { useState, useEffect } from "react";
import "../standard.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { useParams } from "react-router-dom";
import { TranslateOperation } from "../../utils/methods";
import {useAuth} from '../../context/auth-context'

const RegisterAsset = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const {user} = useAuth();

  useEffect(() => {
    const fetchJournalists = async () => {
      try {
        console.log("hello 22")
        console.log(user.username)
        const response = await api.get(`/api/internal/getAllProposals/${user.username}`);
        const data = JSON.parse(response.data?.data);
        console.log("data => ", data)
        setRows(data);
      } catch (err) {
        console.error("Failed to fetch journalists:", err);
      }
    };

    fetchJournalists();
  }, [user]);


  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Nome de guerra</TableCell>
              <TableCell align="center">Criado em</TableCell>
              <TableCell align="center">Tipo</TableCell>
              <TableCell align="center">Aprovado por</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.warName}</TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
              <TableCell align="center">{TranslateOperation(row.operation)}</TableCell>
              <TableCell align="center">{row.revisors?.join(", ")}</TableCell>
              <TableCell align="center">
                <ArrowOutwardIcon onClick={() => navigate(`/ApproveRequest/${row.id}/${row.operation}`)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default RegisterAsset;
