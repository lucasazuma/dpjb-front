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

const RegisterAsset = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchJournalists = async () => {
      try {
        const response = await api.get("/api/internal/getAllProposals");
        const data = JSON.parse(response.data?.data);
        setRows(data);
      } catch (err) {
        console.error("Failed to fetch journalists:", err);
      }
    };

    fetchJournalists();
  }, []);


  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Nome de guerra</TableCell>
            <TableCell align="center">Creado em</TableCell>
            <TableCell align="center">Aprovado por</TableCell>
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
              <TableCell align="center">{row.revisors?.join(", ")}</TableCell>
              <TableCell align="center">
                <ArrowOutwardIcon onClick={() => navigate(`/ApproveRequest/${row.id}`)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegisterAsset;
