import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import IConsulta from "../../types/IConsulta";

function Tabela({consultas} : {consultas : IConsulta[] | null}) {
    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="tabela customizada">
                <TableHead>
                    <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>Horário</TableCell>
                        <TableCell>Profisisional</TableCell>
                        <TableCell>Especialidade</TableCell>
                        <TableCell>Paciente</TableCell>
                        <TableCell>Modalidade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {consultas?.map((linha) => {
                        return (
                            <TableRow>
                    <TableCell component="th" scope="row">
                            01/12/2023
                        </TableCell>
                        <TableCell component="th" scope="row">
                            21:01
                        </TableCell>
                        <TableCell>Monica Hillman</TableCell>
                             <TableCell>Clinica Geral</TableCell>
                            <TableCell>Caroline Carvalho</TableCell>
                             <TableCell>Particular</TableCell>
                    </TableRow>
                        )
                    })}
                    
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default Tabela;