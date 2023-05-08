module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        price: {
            type: Sequelize.STRING
        }
    });

    return Products;
};
