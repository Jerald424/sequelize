const router = require('express').Router()
const db = require('../sequelize')
const { Op } = require('sequelize')

router.post('/tweet', async (req, res) => {
    try {
        const data = req.body;
        const tweet = await db.Tweets.create({ ...data, user_id: req.user }, {
            returning: true
        })
        res.json(tweet)

    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.get('/tweet', async (req, res) => {
    try {
        const allTweets = await db.Tweets.findAll({
            where: {
                user_id: req.user
            }
        })
        res.json(allTweets)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.put('/tweet/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const updateTweets = await db.Tweets.update({ title: title }, {
            where: {
                [Op.and]: [
                    { id: id },
                    { user_id: req.user }
                ]
            },
            returning: true
        })
        res.json(updateTweets?.[1][0])
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.delete('/tweet/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTweet = await db.Tweets.destroy({
            where: {
                [Op.and]: [
                    { id: id },
                    { user_id: req.user }
                ]
            }
        })

        res.json('tweet deleted')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get("/tweet/:title", async (req, res) => {
    try {
        const { title } = req.params;
        const [tweet, created] = await db.Tweets.findOrCreate({
            where: {
                [Op.and]: [
                    { title: title },
                    { user_id: req.user }
                ]
            },
            defaults: {
                title: title,
                user_id: req.user
            }
        })
        res.json({ data: tweet, created: created })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router

