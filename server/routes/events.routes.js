let express = require('express')
let router = express.Router()
let pool = require('../config/connections')
let bcrypt = require('bcrypt')
let events = require('../models/events.model')

router.post ('/events', (req, res)=>{
    events.addEvent({
        id: req.body.id,
        body: req.body.body,
        date: req.body.date,
        startTime: req.body.startTime,
        durration: req.body.durration,
        calendarId: req.body.calendarId
    }, (err, results)=>{
        if(err){
            return res.send({err:err})
        } else {
            res.send("Success!")
        }
    })
})

router.get('/all', async (req,res)=>{
    events.getAllEvents((err, results)=>{
        if(err) return res.status(402).send({err:err});
        return res.send(results);
    })
  })

router.get('/byid/:id', (req,res)=>{
    events.getEventsById(req.params.id, (err, results)=>{
    if(err) return res.status(402).send({err:err});
    return res.send(results);
    })
})

module.exports = router