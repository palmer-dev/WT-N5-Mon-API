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

test('POST /tasks — retourne la nouvelle tâche', async () => {
    const task = { title: 'Apprendre React' };

    const res = await request(app)
        .post('/tasks')
        .set("Content-Type", 'application/json')
        .send(task);

    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.title).toBe(task.title);
});