const express = require(`express`);
const cors = require(`cors`);
const ctrl = require(`./controller`);
const app = express();
app.use(cors());
app.use(express.json());

// Endpoints

app.get(`/api/houses`, ctrl.getHouses);
app.post(`/api/houses`, ctrl.createHouses);
app.put(`/api/houses/:id`, ctrl.updateHouses);
app.delete(`/api/houses/:id`, ctrl.deleteHouses);

const PORT_NUMBER = 4004;
app.listen(PORT_NUMBER, () => console.log(`Server is up on ${PORT_NUMBER}`));
