const Message = require("../models/message");

const message_index = (req, res) => {
  Message.find()
    .sort({ date: -1 })
    .then((response) => {
      res.render("index", { title: "Messages", messages: response });
    })
    .catch((err) => console.log(err));
};

const message_form = (req, res) => {
  res.render("form");
};

const see_message = (req, res) => {
  const id = req.params.id;
  Message.findById(id)
    .then((response) => res.render("message", { message: response }))
    .catch((err) => console.log(err));
};

const delete_message = (req, res) => {
  const id = req.params.id;
  Message.findByIdAndDelete(id)
    .then((response) => res.json({ redirect: "/" }))
    .catch((err) => console.log(err));
};

const create_message = (req, res) => {
  const message = new Message(req.body);
  message
    .save()
    .then((response) => res.redirect("/"))
    .catch((err) => console.log(err));
};

module.exports = {
  message_index,
  message_form,
  see_message,
  delete_message,
  create_message,
};
