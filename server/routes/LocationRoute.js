const express = require('express');
const LocationRoute = express.Router();
const { Location  } = require('../db/models');

LocationRoute.get('/locations', async(req,res) =>{
    try {
        const locations = await Location.findAll();
        res.send(locations);
    } catch (error) {
        throw error
    }
});

LocationRoute.get('/locations/:id', async (req, res) => {
    try {        
        const locationId = await Location.findByPk(req.params.id)
        res.json(locationId)
    } catch(error) {
        throw error     
    }    

})

LocationRoute.post('/locations/', async (req,res) => {
    try {
        const newLocation = await Location.create(req.body);
        res.send(newLocation)
    }  catch (error) {
        res.status(error.status || 400)
        res.send({msg: error})
    }
})

module.exports = LocationRoute;