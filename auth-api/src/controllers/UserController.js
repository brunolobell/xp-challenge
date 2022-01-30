const User = require('../model/User');

module.exports = {
    async index(req, res) {
        const id = req.params.id;

        if (!!!id)
            return res.status(406).json({"Error": "Need return user id or all"});
        
        try{
            if (id === "all")
                var users = await User.findAll();
            else
                var users = await User.findOne({ where: { id } });

            if (!!!users || users.length === 0)
                return res.status(404).json({"Error": "User not found!"});

            return res.json(users);
        } catch(err){
            return res.status(500).json(err);
        }
    },

    async store(req, res) {
        const { name, email, phoneNumber, password, balance = 0 } = req.body;

        if (password.length < 8)
            return res.status(406).json({ "Message": "Password is less than 8!" })

        try {
            const user = await User.create({ name, email, phoneNumber, password, balance });
            return res.json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async update(req, res) {
        const { name, email, phoneNumber, password, balance } = req.body;
        try {
            await User.update({ name, email, phoneNumber, password, balance }, {
                where: {
                    id: req.params.id
                }
            });
            return res.json({ name, email, phoneNumber, password, age, social });
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async delete(req, res) {
        const { id } = req.body;
        try {
            const user = await User.destroy({
                where: {
                    id
                }
            });
            if (user) return res.json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async checkLogin(req, res) {

        const { email, password, phoneNumber } = req.body;
        if (phoneNumber) {
            try {
                const user = await User.findOne({ where: { phoneNumber, password } });
                if (user) {
                    return res.json(user);
                }
                return res.sendStatus(401);
            } catch (err) {
                return res.status(500).json(err);
            }
        } else {
            try {
                const user = await User.findOne({ where: { email, password } });
                if (user) {
                    return res.json(user);
                }
                return res.sendStatus(401);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
    },
};