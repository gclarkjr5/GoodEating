`use strict`

const states = require(`../modules/states`);

module.exports = (req, res) => {
    states(x => {
        res.status(200).json(x)
    });
}