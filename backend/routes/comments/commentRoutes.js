const router = require("express").Router();
const db = require("../../sequelize");

router.get("/post/:offset", async (req, res) => {
  const { offset } = req.params;
  let limit = 10;
  try {
    const posts = await db.Post.findAll({
      offset: offset * limit,
      limit: limit,
      include: db.Login,
    });

    res.json(posts);
  } catch (error) {
    res.status(500).send(error?.message);
  }
});

router.get("/comment/:post_id/:offset", async (req, res) => {
  try {
    const { offset, post_id } = req.params;
    const comments = await db.Comments.findAll({
      offset: offset,
      where: {
        post_id: post_id,
      },
    });
    res.json(comments);
  } catch (error) {
    res.status(500).send(error?.message);
  }
});

router.get("/comment/:post_id", async (req, res) => {
  try {
    const { post_id } = req.params;
    const comments = await db.Comments.findAll({
      where: {
        post_id: post_id,
      },
    });
    res.json(comments);
  } catch (error) {
    res.status(500).send(error?.message);
  }
});

router.post("/post", async (req, res) => {
  try {
    const { message } = req.body;
    const { user_id } = req.user_info;

    const post = await db.Post.create(
      {
        message: message,
        user_id: user_id,
      },
      {
        returning: true,
      }
    );

    res.json(post);
  } catch (error) {
    res.status(500).send(error?.message);
  }
});

router.post("/comments", async (req, res) => {
  try {
    const { post_id, comment } = req.body;
    const { user_id } = req.user_info;

    const postedComment = await db.Comments.create(
      {
        comment: comment,
        post_id: post_id,
        user_id: user_id,
      },
      {
        returning: true,
      }
    );

    res.json(postedComment);
  } catch (error) {
    res.status(500).send(error?.message);
  }
});
module.exports = router;
