const router = require('express').Router();
const Blog = require('../models/Blog')
const body_parser = require("body-parser")

router.use(body_parser.json())
// Your routing code goes here


router.get('/blogs', async (req, res) => {
    let { search, page } = req.query
    const data = await Blog.find({topic:search}).skip(page*5-5).limit(5)
    res.json(data)
})

router.post("/blogs", async (req, res) => {
    const data = req.body
    await Blog.create(data)
    try {
        res.json({
            "response": {
                "status": "success",
                "result": data
            }
        })
    } catch (e) {
        res.json({
            "response": {
                "status": "failure",
                "message": e.message
            }
        })
    }
})

router.put("/blogs/:id", async (req, res) => {
    const id = req.params.id
    await Blog.updateOne({ _id: id }, req.body)
    const data = await Blog.findOne({ _id: id })

    try {
        res.json({
            "response": {
                "status": "success",
                "result": data
            }
        })
    } catch (e) {
        res.json({
            "response": {
                "status": "failure",
                "message": e.message
            }
        })
    }
})

router.delete("/blogs/:id", async (req, res) => {
    const id = req.params.id
    const data = await Blog.findOne({ _id: id })
    await Blog.deleteOne({ _id: id })
    try {
        res.json({
            "response": {
                "status": "success",
                "result": data
            }
        })
    } catch (e) {
        res.json({
            "response": {
                "status": "failure",
                "message": e.message
            }
        })
    }
})


module.exports = router;