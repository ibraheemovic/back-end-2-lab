const houses = require(`./db.json`);
let index = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },
  deleteHouses: (req, res) => {
    const { id } = req.params;
    const index = houses.findIndex((ele) => ele.id === +id);
    houses.splice(index, 1);
    res.status(200).send(houses);
  },
  createHouses: (req, res) => {
    const { address, price, imageURL } = req.body;
    const newHouse = {
      id: index,
      address,
      price,
      imageURL,
    };
    houses.push(newHouse);
    res.status(200).send(houses);
    index++;
  },
  updateHouses: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    const index = houses.findIndex((ele) => ele.id === +id);
    if (type === `plus`) {
      houses[index].price += 10000;
    } else if (type === `minus` && houses[index].price > 10000) {
      houses[index].price -= 10000;
    } else {
      res.status(400).send(`Cannot go below zero`);
    }
    res.status(200).send(houses);
  },
};
