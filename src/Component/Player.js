// src/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';
import messi from '../image/messi.jpg';
import ronaldo from '../image/Cristiano.jpg';
import mbappe from '../image/mape.jpg';
import neymar from '../image/neymar.jpg';
const images = {
    "Lionel Messi": messi,
    "Cristiano Ronaldo": ronaldo,
    "Kylian Mbappé": mbappe,
    "Neymar Jr": neymar
}

const Player = ({ nom, 
    equipe,
    nationalite,
    numero_de_maillot,
    age,
  imageUrl }) => {
    const imagePath = require(`../image/${imageUrl}`).default;

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={images[nom]} alt={nom} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          <strong>Équipe:</strong> {equipe} <br />
          <strong>Nationalité:</strong> {nationalite} <br />
          <strong>Numéro:</strong> {numero_de_maillot} <br />
          <strong>Âge:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


Player.defaultProps = {
  nom: "Nom inconnu",
  equipe: "Équipe inconnue",
  nationalite: "Nationalité inconnue",
  numero_de_maillot: "N/A",
  age: "N/A",
  imageUrl: ""
};

export default Player;
