const mongoose = require("mongoose");

// Creating Schema for Todo-list-items
const todo_list_items_Schema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  due_date: {
    type: Date,
    required: true,
  },
});

const Todo_list_items = mongoose.model(
  "todo_list_items",
  todo_list_items_Schema
);

module.exports = Todo_list_items;
