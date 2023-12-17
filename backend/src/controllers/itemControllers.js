const getItems = (req, res) => {
  database
    .query(`SELECT * FROM items`)
    .then(([item]) => {
      res.json(item);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(422);
    });
};

const getItemById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query(`SELECT * FROM items WHERE id = ?`, [id])
    .then(([item]) => {
      console.log(item);
      if (item[0] != null) {
        res.json(item[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(422);
    });
};

const postItems = (req, res) => {
  const { title, price, description, category, image } = req.body;
  database
    .query(
      "INSERT INTO items (title, price, description, category, image) VALUES (?,?,?,?,?)",
      [title, price, description, category, image]
    )
    .then(([result]) => {
      res.sendStatus(201).send({ id: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(422);
    });
};

const updateItems = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, price, description, category, image } = req.body;

  database
    .query(
      "UPDATE items SET title = ?, price = ?, description = ?, category = ?, image = ? WHERE id = ?",
      [title, price, description, category, image, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(422);
    });
};

const deleteItems = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("DELETE FROM items WHERE id = ?", [id])
    .then(([result]) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(422);
    });
};

module.exports = {
  getItems,
  getItemById,
  postItems,
  updateItems,
  deleteItems,
};

const database = require("../../database.js");

// const getItems = (req, res) => {
//   database
//     .query("SELECT * FROM items")
//     .then(([items]) => {
//       res.json(items);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(422);
//     });
// };
