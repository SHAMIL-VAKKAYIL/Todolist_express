const router = require('express').Router()
const TodoSchema = require('../models/TodoSchema')


router.get('/', async (req, res) => {
    try {

        const Items = await TodoSchema.find()
        res.render('home', { Items })
    } catch (error) {
        res.status(400).json(error)
    }
})


router.post('/getItem', async (req, res) => {
    const { Todo } = req.body
    console.log(Todo);

    try {
        const newItem = new TodoSchema({
            item: Todo
        })
        await newItem.save()
    } catch (error) {
        res.status(400).json(error)

    }
})

router.delete('/delItem', async (req, res) => {
    const { item } = req.body
    try {
        await TodoSchema.deleteOne({item})
        res.render('home')


    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router