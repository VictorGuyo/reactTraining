-- SQLBook: Code
-- Active: 1701552274622@@127.0.0.1@3306@express_quests

CREATE TABLE
    items (
        id int primary key NOT NULL AUTO_INCREMENT,
        title varchar(255) NOT NULL,
        price INT NOT NULL,
        description varchar(350) NOT NULL,
        category varchar(255) NOT NULL,
        image varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

INSERT INTO
    items (
        title,
        price,
        description,
        category,
        image
    )
VALUES
        (
        "Mens Casual Premium Slim Fit T-Shirts ",
        22.3,
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric. ",
        "men's clothing",
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    ), (
        "Mens Cotton Jacket",
        55.99,
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. ",
        "men s clothing",
        "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    ), (
        "Mens Casual Slim Fit",
        15.99,
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "men's clothing",
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    ), (
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        695,
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "jewelery",
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    ), (
        "Solid Gold Petite Micropave ",
        168,
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "jewelery",
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    ), (
        "White Gold Plated Princess",
        9.99,
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "jewelery",
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
    );


