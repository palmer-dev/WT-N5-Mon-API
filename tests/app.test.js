const request = require('supertest')
const app = require('../app')

test('GET / — retourne un message', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('message')
})

test('GET /health — retourne ok', async () => {
    const res = await request(app).get('/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('ok')
})

test('GET /tasks — retourne la liste des tâches', async () => {
    const res = await request(app).get('/tasks')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.length).toBeGreaterThan(0)
})