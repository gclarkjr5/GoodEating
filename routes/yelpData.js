`use strict`

const router = require(`express`);
const app = router();
const yelp = require(`../modules/yelpSearch`);


module.exports = (req, res) => {
    let state;
    if(req.body.selected === undefined) {
        state = `TX`
    } else {
        state = req.body.selected;
    }

    yelp(state, x => {
        res.status(200).json(x)
    });
}