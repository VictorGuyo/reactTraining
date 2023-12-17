const request = require("supertest");
const app = require("../src/app");
const database = require("../database");
afterAll(() => {
  database.end();
});

describe("GET /items", () => {
  it("should return items", async () => {
    const response = await request(app).get("/items");

    expect(response.header["content-type"]).toMatch(/json/);

    expect(response.status).toEqual(200);
  });
});

describe("GET /items/:id", () => {
  it("should return one item", async () => {
    const response = await request(app).get("/items/1");

    expect(response.header["content-type"]).toMatch(/json/);

    expect(response.status).toEqual(200);
  });
  it("should return no item", async () => {
    const response = await request(app).get("/items/0");

    expect(response.status).toEqual(404);
  });
});

describe("PUT/items/:id", () => {
  it("should return new item", async () => {
    const newItem = {
      title: "Milka",
      price: 22.5,
      description: `Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric.`,
      category: "choco",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    };

    const [result] = await database.query(
      "INSERT INTO items(title, price, description, category, image) VALUES (?, ?, ?, ?, ?)",
      [
        newItem.title,
        newItem.price,
        newItem.description,
        newItem.category,
        newItem.image,
      ]
    );

    const id = result.insertId;

    const updatedItem = {
      title: "Lindt",
      price: 91,
      description: `Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric.`,
      category: "choco",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    };

    const response = await request(app).put(`/items/${id}`).send(updatedItem);

    expect(response.status).toEqual(204);

    const [resulte] = await database.query(
      "SELECT * FROM items WHERE id=?",
      id
    );
    const [itemInDatabase] = resulte;

    expect(itemInDatabase).toHaveProperty("id");

    expect(itemInDatabase).toHaveProperty("title");
    expect(itemInDatabase).toHaveProperty("price");
    expect(itemInDatabase).toHaveProperty("description");
    expect(itemInDatabase).toHaveProperty("category");
    expect(itemInDatabase).toHaveProperty("image");
    expect(itemInDatabase.title).toStrictEqual(updatedItem.title);
    expect(itemInDatabase.price).toStrictEqual(updatedItem.price);
    expect(itemInDatabase.description).toStrictEqual(updatedItem.description);
    expect(itemInDatabase.category).toStrictEqual(updatedItem.category);
    expect(itemInDatabase.image).toStrictEqual(updatedItem.image);
  });

  it("should return an error", async () => {
    const itemWithMissingProps = { title: "R" };

    const response = await request(app)
      .put(`/items/1`)
      .send(itemWithMissingProps);

    expect(response.status).toEqual(422);
  });

  it("should return no items", async () => {
    const newItem = {
      title: "Lindt",
      price: 90.5,
      description: `Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric.`,
      category: "choco",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    };

    const response = await request(app).put("/items/0").send(newItem);

    expect(response.status).toEqual(404);
  });
});

describe("POST /items", () => {
  it("should return create item", async () => {
    const newItem = {
      title: "Renault Megane V",
      price: 20899,
      description: "Nouvelle renault megane V 100% éléctrique.",
      category: "Vehicule",
      image:
        "https://images.caradisiac.com/logos-ref/modele/modele--renault-megane-5/S0-modele--renault-megane-5.jpg",
    };
    
    const id = result.resultId;

    const response = await request(app).post("/items").send(newItem);

    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty("id");
    expect(typeof response.body.id).toBe("number");

    const [result] = await database.query(
      "SELECT * FROM items WHERE id=?",
      response.body.id
    );

    const [itemInDatabase] = result;

    expect(itemInDatabase).toHaveProperty("id");

    expect(itemInDatabase).toHaveProperty("title");
    expect(itemInDatabase).toHaveProperty("price");
    expect(itemInDatabase).toHaveProperty("description");
    expect(itemInDatabase).toHaveProperty("category");
    expect(itemInDatabase).toHaveProperty("image");
    expect(typeof itemInDatabase.title).toBe("string");
    expect(typeof itemInDatabase.price).toBe("number");
    expect(typeof itemInDatabase.description).toBe("string");
    expect(typeof itemInDatabase.category).toBe("string");
    expect(typeof itemInDatabase.image).toBe("string");
    expect(itemInDatabase.title).toStrictEqual(newItem.title);
    expect(itemInDatabase.price).toStrictEqual(newItem.price);
    expect(itemInDatabase.description).toStrictEqual(newItem.description);
    expect(itemInDatabase.category).toStrictEqual(newItem.category);
    expect(itemInDatabase.image).toStrictEqual(newItem.image);
  });

  it("should return an error", async () => {
    const itemWithMissingProps = { title: "Audi" };

    const response = await request(app)
      .post("/items")
      .send(itemWithMissingProps);

    expect(response.status).toEqual(422);
  });
});

describe("DELETE /items/:id", () => {
  it("should delete item", async () => {
    const newItem = {
      title: "Renault Megane V",
      price: 20899,
      description: "Nouvelle renault megane V 100% éléctrique.",
      category: "Vehicule",
      image:
        "https://images.caradisiac.com/logos-ref/modele/modele--renault-megane-5/S0-modele--renault-megane-5.jpg",
    };

    const [insertResult] = await database.query(
      "INSERT INTO users(title, price, description, category, image) VALUES (?, ?, ?, ?, ?)",
    [
      newItem.title, 
      newItem.price,
      newItem.description,
      newItem.category,
      newItem.image
    ]
    );
    const id = insertResult.insertId
  const response = await request(app).delete(`/items/${id}`);

  expect(response.status).toEqual(204);
  });

  it("should return no items", async () => {
  const response = await request(app).delete("/items/0");

    expect(response.status).toEqual(404);
  });
});



// describe("DELETE /api/users/:id", () => {
//   it("should delete user", async () => {
//     const newUser = {
//       firstname: "Alice",
//       lastname: "O'Neil",
//       email: `${crypto.randomUUID()}@wild.co`,
//       city: "Toronto",
//       language: "English",
//     };

//     const [result] = await database.query(
//       "INSERT INTO users(firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
//       [
//         newUser.firstname,
//         newUser.lastname,
//         newUser.email,
//         newUser.city,
//         newUser.language,
//       ]
//     );

//     const id = result.insertId;

//     const response = await request(app).delete(`/api/users/${id}`);

//     expect(response.status).toEqual(204);
//   });

//   it("should return no user", async () => {
//     const response = await request(app).delete("/api/users/0");

//     expect(response.status).toEqual(404);
//   });
// });
