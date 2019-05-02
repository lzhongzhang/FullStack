const path = require('path')
const express = require('express');
const index = express();
const matrix = require('./routes/matrix');
const homeRouter = require('./routes/home');

index.set('views', path.join(__dirname, 'views'));
index.set('view engine', 'ejs');

index.use('/matrix', matrix);
index.use('/', homeRouter);

index.listen(8080);