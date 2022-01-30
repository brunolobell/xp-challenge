const { Op } = require('sequelize');
const Transaction = require("../app/models/Transactions");
const User = require("../app/models/Users");

module.exports = {
    // Request to get the transactions
    async statement(req, res) {
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

    //Request to get user balance
    async balance(req, res) {
        try {
            const { userId } = req.query;

            if (!!!userId)
                return res.status(406).json({"Error": "User Id need to be send!"});

            const user = await User.findOne({ where: { "id": userId } });

            if (!!!user)
                return res.status(404).json({"Error": "User not found!"});

            return res.json( user.balance );
        } catch(err) {
            return res.status(500).json(err);
        }
    }
};