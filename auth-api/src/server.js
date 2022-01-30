require('dotenv/config');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./config/swagger/swagger_output.json');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(process.env.PORT || 3333);