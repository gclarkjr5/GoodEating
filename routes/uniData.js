`use strict`

const univ = require(`../modules/uniData`);
const yelp = require(`../modules/yelpSearch`);

module.exports = (req, res) => {
    let state;
    if (req.method === `GET`) {
        state = `TX`
        univ(state, x => {
            res.status(200).json(x)
        });
    } else {
        state = req.body.selected;
        let data = {};
        univ(state, x => {
            data.uniData = x;
            yelp(state, y => {
                data.yelpData = y
                res.status(200).json(data)
            });
        });
    }

}