const express = require('express');

module.exports = (server)=>{

    // API ROUTES
    const router = express.Router();
    server.use('/api',router);

    // TODO ROUTES
    const todoService = require('../services/todoService');
    todoService.register(router,'/todos');
}