const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.Products.findAll()
        .then(products => {
            return res.json({
                totalCount: products.length,
                users: products,
                /* countByCategory */
            });
        })
    },
    detail: (req, res) =>{
        db.Products.findByPk(req.params.id)
        .then(product => {
            return res.json({
                data: product
            });
        })
    }
}