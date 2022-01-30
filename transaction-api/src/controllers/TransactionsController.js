const { Op } = require('sequelize');
const Transaction = require("../app/models/Transactions");
const User = require("../app/models/Users");

module.exports = {
    // Request to get the transactions
    async index(req, res) {
        const { initialDate, finalDate, userId } = req.query;

        if (!!!userId){
            return res.status(406).json({"Error": "User Id need to be send!"});
        }

        try {
            if (initialDate && finalDate){
                var Transactions = await Transaction.findAll({
                    where: {
                        "createdAt": {[Op.between]: [initialDate, finalDate]},
                        userId
                    }
                });
            } else{
                var Transactions = await Transaction.findAll({
                    where: {
                        userId
                    }
                });
            }
            return res.json(Transactions);
        } catch(err) {
            return res.status(500).json({"Error": {"Status": err.status, "Message": err}});
        }
    },

    // Request to post a new transaction
    async store(req, res) {
        const { type, value, userId } = req.body;

        try{
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ error: "User not found!"})
            }

            if (type === 'C') {
                var balance = (user["balance"] + value).toFixed(2);   
            } else {
                var balance = (user["balance"] - value).toFixed(2);
            }

            User.update({ balance }, { where: { "id": userId } });

            const transaction = await Transaction.create({ type, "value": value.toFixed(2), userId });
            
            return res.json(transaction)

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
};