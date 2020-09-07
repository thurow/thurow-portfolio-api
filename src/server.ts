import express from 'express'

const app = express()

app.use('/', (req, res) => {
    return res.json({ message: 'Welcome to Thurow Portfolio\'s api =)' })
})

app.listen(3333)