const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static('public'));

const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  res.send('Servidor en funcionamiento 🚀');
});


app.get('/canciones', (req, res) => {
  const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'));
  res.json(canciones);
});


app.post('/canciones', (req, res) => {
  const nuevaCancion = req.body;
  const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'));

  canciones.push(nuevaCancion);
  fs.writeFileSync('repertorio.json', JSON.stringify(canciones, null, 2));

  res.send('Canción agregada con éxito');
});


app.put('/canciones/:id', (req, res) => {
  const { id } = req.params;
  const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'));
  const index = canciones.findIndex((c) => c.id == id);

  if (index !== -1) {
    canciones[index] = { ...canciones[index], ...req.body };
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones, null, 2));
    res.send('Canción actualizada con éxito');
  } else {
    res.status(404).send('Canción no encontrada');
  }
});


app.delete('/canciones/:id', (req, res) => {
  const { id } = req.params;
  const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'));
  const nuevasCanciones = canciones.filter((c) => c.id != id);

  if (canciones.length !== nuevasCanciones.length) {
    fs.writeFileSync('repertorio.json', JSON.stringify(nuevasCanciones, null, 2));
    res.send('Canción eliminada con éxito');
  } else {
    res.status(404).send('Canción no encontrada');
  }
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});