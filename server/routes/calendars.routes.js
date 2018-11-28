let express = require('express')
let router = express.Router()
let pool = require('../config/connections')
let bcrypt = require('bcrypt')
let calendars = require('../models/calendar.model')

router.post('/calendars', (req, res)=>{
    calendars.addCal({
        id: req.body.id,
        name: req.body.name,
        userId: req.body.userId
    }, (err, results)=>{
        if(err){
            return res.send({err:err})
        } else {
            res.send("Success!")
        }
    })
})

router.get('/all', async (req,res)=>{
    calendars.getAllcals((err, results)=>{
        if(err) return res.status(402).send({err:err});
        return res.send(results);
    })
  })

router.get('/byid/:id', (req,res)=>{
    calendars.getCalsById(req.params.id, (err, results)=>{
    if(err) return res.status(402).send({err:err});
    return res.send(results);
    })
})

module.exports = router

