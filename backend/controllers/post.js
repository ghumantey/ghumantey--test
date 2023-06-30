const Destination = require("../models/Destination");

const postDestination = async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const username = req.body.username;

    const destination = await Destination.findOne({name: new RegExp("^" + name + "$", "i")});

    if (!destination) {
      return res.status(404).json({msg: `No destination with name ${name} found.`});
    }

    const newPost = {
      user: username,
      content: description,
      createdAt: new Date(),
    };

    destination.posts.push(newPost);

    await destination.save();

    res.send("Done");
  } catch (error) {
    res.status(500).json({ error: "An error occurred while adding the post" });
  }
};

module.exports = { postDestination };
