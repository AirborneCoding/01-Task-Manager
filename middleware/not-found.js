const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound

// const express = require('express');

// const notFound = (req, res, next) => {
//  res.status(404).send('Route does not exist');
// };

// module.exports = notFound;

