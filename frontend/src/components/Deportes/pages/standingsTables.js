// src/Deportes/pages/standingsTables.js

import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// Función para determinar el icono basado en la posición
const getPositionIcon = (index, isNBA) => {
  const playoffTeams = isNBA ? 16 : 12; // NBA tiene 16 equipos en playoffs, MLB 12

  if (index < playoffTeams) {
    return <ArrowUpwardIcon style={{ color: "green" }} />; // Flecha hacia arriba
  } else {
    return <ArrowDownwardIcon style={{ color: "red" }} />; // Flecha hacia abajo
  }
};

// Función para renderizar la tabla de posiciones de la NBA
export const NbaStandingsTable = ({ nbaStandings, visibleTeams }) => {
  const [hoveredRow, setHoveredRow] = useState(null); // Estado para manejar el hover

  return (
    <Paper sx={{ width: "65rem"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="deportes-row">Posición</TableCell>
            <TableCell className="deportes-row">Equipo</TableCell>
            <TableCell className="deportes-row">Partidos Jugados</TableCell>
            <TableCell className="deportes-row">Ganados</TableCell>
            <TableCell className="deportes-row">Perdidos</TableCell>
            <TableCell className="deportes-row">Porcentaje de Victorias</TableCell>
            <TableCell className="deportes-row">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nbaStandings.slice(0, visibleTeams).map((team, index) => (
            <TableRow
              key={team.TeamID}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: hoveredRow === index ? "scale(1.05)" : "scale(1)",
                boxShadow:
                  hoveredRow === index
                    ? "0 8px 16px rgba(0, 0, 0, 0.2)"
                    : "none",
              }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                {team.City} {team.Name}
              </TableCell>
              <TableCell>{team.Wins + team.Losses}</TableCell>
              <TableCell>{team.Wins}</TableCell>
              <TableCell>{team.Losses}</TableCell>
              <TableCell>{(team.Percentage * 100).toFixed(1)}%</TableCell>
              <TableCell>{getPositionIcon(index, true)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

// Función para renderizar la tabla de posiciones de la MLB
export const MlbStandingsTable = ({ mlbStandings, visibleTeams }) => {
  const [hoveredRow, setHoveredRow] = useState(null); // Estado para manejar el hover

  return (
    <Paper sx={{ width: "65rem"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="deportes-row">Posición</TableCell>
            <TableCell className="deportes-row">Equipo</TableCell>
            <TableCell className="deportes-row">Partidos Jugados</TableCell>
            <TableCell className="deportes-row">Ganados</TableCell>
            <TableCell className="deportes-row">Perdidos</TableCell>
            <TableCell className="deportes-row">Victorias en Casa</TableCell>
            <TableCell className="deportes-row">Derrotas en Casa</TableCell>
            <TableCell className="deportes-row">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mlbStandings
            .sort((a, b) => b.WinPercentage - a.WinPercentage)
            .slice(0, visibleTeams)
            .map((team, index) => (
              <TableRow
                key={team.TeamID}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                sx={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: hoveredRow === index ? "scale(1.05)" : "scale(1)",
                  boxShadow:
                    hoveredRow === index
                      ? "0 8px 16px rgba(0, 0, 0, 0.2)"
                      : "none",
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{team.Name}</TableCell>
                <TableCell>{team.Wins + team.Losses}</TableCell>
                <TableCell>{team.Wins}</TableCell>
                <TableCell>{team.Losses}</TableCell>
                <TableCell>{team.HomeWins}</TableCell>
                <TableCell>{team.HomeLosses}</TableCell>
                <TableCell>{getPositionIcon(index, false)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
