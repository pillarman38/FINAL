let pool = require('../config/connections')

let calendarFunctions = {
    addCal: (calendarObj, callback)=>{
        pool.query('INSERT INTO calendar SET ?', calendarObj, (err, results)=>{
            callback(err, results)

        })
    },
    getAllcals: (callback)=>{
        pool.query('SELECT * from calendar', (err, results)=>{
            callback(err, results)
        })
    },
    getCalsById: (id, callback)=>{
        pool.query('SELECT * from users where id = ? ', id, (err, results)=>{
            callback(err, results)
        })
    },
    deleteCal: (id)=>{
        pool.query('DELETE * from calendar where id = ?', id, (err, results)=>{
            callback(err, results)
        })
    },
    updateCal: (id, update, callback)=>{
        pool.query('UPDATE calendar SET ? where id = ?', [update, id], (err, results)=>{
            callback(err, results)
        })
    },
}

module.exports = calendarFunctions