require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    port: process.env.DB_PORT || '5432',
    define: {
        timestamps: true,
    },
    // dialectOptions: {
    //     options: {
    //         requestTimeout: 5000
    //     },
    //     // ssl: {
    //     //      require: true,
    //     //      rejectUnauthorized: false
    //     // }
    // },
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
};
