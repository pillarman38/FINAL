let express = require('express')
let router = express.Router()
let pool = require('../config/connections')
let bcrypt = require('bcrypt')
let users = require('../models/users.model')

router.post('/login', (req, res)=>{
    users.getByUsername(req.body.username, (err, results)=>{

        if(err){
            return res.status(402).send({err:err})
        }   
        
        if(results.length == 0){
            bcrypt.compareSync('lainTextPassword', 'hashedValuedFromDB')
            return res.status(402).send({err: 'incorrect username / password'})
        }
        let matching = bcrypt.compareSync(req.body.password, results[0].password)
        if(matching){return res.send({success: {username: results[0].username, id: results[0].id}})
        }
        return res.status(402).send({err: "Incorrect username/password"})
    })
})

router.post('/signup', (req, res)=>{
    users.getByUsername(req.body.username, (err, results)=>{
    var hash = bcrypt.hashSync(req.body.password, 10);
    if(err){
        return res.status(402).send({err: err})
    }
    if(results.length > 0) return res.status(402).send({err: 'Username already taken'})
    
    let newUser =  {
        username: req.body.username, 
        password: hash
    }
    users.addUser(newUser, (err, results)=>{
        if(err) return res.status(402).send({err: err});
        res.send({success: 'Success!'});
        })
    })
})

router.get('/all', async (req,res)=>{
    users.getAll((err, results)=>{
        if(err) return res.status(402).send({err:err});
        return res.send(results);
    })
  })

router.get('/byid/:id', (req,res)=>{
    users.getById(req.params.id, (err, results)=>{
    if(err) return res.status(402).send({err:err});
    return res.send(results);
    })
})

module.exports = router