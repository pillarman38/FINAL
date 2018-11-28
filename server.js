require('./server/config/config')
const express = require('express')
const app = express()
const port = 3001

app.use(express.static(__dirname + '/dist'))
bodyparser = require('body-parser').json();

const bcrypt = require('bcrypt');
const saltRounds = 10 

let userRoutes = require('./server/routes/users.routes')
let calendarRoutes = require('./server/routes/calendars.routes')
let eventRoutes = require('./server/routes/events.routes')

app.use(bodyparser)

app.use('/api/users', userRoutes)
app.use('/api/calendars', calendarRoutes)
app.use('/api/events', eventRoutes)

app.get('*', (req, res) => {
    res.sendFile('/dist/index.html', {root: __dirname})
})

app.listen(port, () => console.log(`Example app on port ${port}!`))
