const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Log d'initialisation inutile
console.log(`[${new Date().toISOString()}] [INIT] Chargement des modules requis...`)
console.log(`[${new Date().toISOString()}] [INIT] Express chargé avec succès.`)

app.get('/', (req, res) => {
    console.log(`[${new Date().toISOString()}] [REQUEST] Incoming GET request on '/'`)
    console.log(`[DEBUG] Headers: ${JSON.stringify(req.headers)}`)
    console.log(`[DEBUG] Query params: ${JSON.stringify(req.query)}`)

    res.json({message: 'Mon API DevOps'})

    console.log(`[${new Date().toISOString()}] [RESPONSE] Sent 200 OK for '/'`)
    console.log(`[VERBOSE] Payload delivered: {"message": "Mon API DevOps"}`)
})

app.get('/health', (req, res) => {
    console.warn(`[${new Date().toISOString()}] [HEALTH] Monitoring check triggered by ${req.ip}`)
    console.log(`[DEBUG] Checking internal state...`)
    console.log(`[DEBUG] CPU Usage: ${JSON.stringify(process.cpuUsage())}`)
    console.log(`[DEBUG] Memory Usage: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`)

    res.json({status: 'ok'})

    console.log(`[${new Date().toISOString()}] [HEALTH] Status 'ok' returned. All systems nominal.`)
})

if (require.main === module) {
    console.log(`[${new Date().toISOString()}] [BOOTSTRAP] Attempting to bind to port ${port}...`)
    app.listen(port, () => {
        console.log('---------------------------------------------------------')
        console.log(`🚀 API running on http://localhost:${port}`)
        console.log(`[${new Date().toISOString()}] [SUCCESS] Server is listening.`)
        console.log(`[INFO] Process ID: ${process.pid}`)
        console.log(`[INFO] Node Version: ${process.version}`)
        console.log('---------------------------------------------------------')
    })
}

// Un petit log au cas où quelqu'un require le module
console.log(`[${new Date().toISOString()}] [MODULE] API module exported. Ready to be tested.`)

module.exports = app