`use strict`

const express = require(`express`);
const routes = require(`express`).Router();
const bodyParser = require(`body-parser`);

const univ = require(`./uniData`);
const yelp = require(`./yelpData`);
const states = require(`./states`);

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.use(`/states`, states);
routes.use(`/univ`, univ);
routes.use(`/yelp`, yelp);

routes.use(`/`, express.static(`public`));

routes.get(`/`, (req, res) => {
    res.status(200).json({ message: "Hello World" })
});

routes.post(`/getStateData`, univ);


module.exports = routes;