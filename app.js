const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// DATAS
const tasks = [
    {id: 1, title: 'Apprendre Git', done: true},
    {id: 2, title: 'Configurer CI/CD', done: false},
]


// ROUTES
app.get('/', (req, res) => {
    res.json({message: 'Mon API DevOps'})
})

app.get('/health', (req, res) => {
    res.json({status: 'ok'})
})

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

if (require.main === module) {
    app.listen(port, () => {
        console.log(`API running on http://localhost:${port}`)
    })
}

module.exports = app