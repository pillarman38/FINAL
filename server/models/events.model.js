let pool = require('../config/connections')

let eventFunctions = {
    addEvent: (eventObj, callback)=>{
        pool.query('INSERT INTO events SET ?', eventObj, (err, results)=>{
            callback(err, results)
        })
    },
    getAllEvents: (callback)=>{
        pool.query('SELECT * from events', (err, results)=>{
            callback(err, results)
        })
    },
    getEventsById: (id, callback)=>{
        pool.query('SELECT * from events where id = ? ', id, (err, results)=>{
            callback(err, results)
        })
    },
    deleteEvent: (id)=>{
        pool.query('DELETE * from events where id = ?', id, (err, results)=>{
            callback(err, results)
        })
    },
    updateEvent: (id, update, callback)=>{
        pool.query('UPDATE events SET ? where id = ?', [update, id], (err, results)=>{
            callback(err, results)
        })
    },
}

module.exports = eventFunctions
