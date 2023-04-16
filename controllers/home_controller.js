// const Todo_list_item = require("./models/todo_list_items");

const Todo_list_items = require("../models/todo_list_items");

module.exports.home = function (req, res) {
  // return res.end('<h1>Welcome!!!</h1>')
  Todo_list_items.find({}, function (err, items) {
    if (err) {
      console.log(`Error in fetching items from db: ${err}`);
      return;
    }
    return res.render("home", {
      title: "Home",
      items: items,
    });
  });
  // return res.render("home", {
  //   title: "Home",
  // });
};

module.exports.create = function (req, res) {
  // console.log(req.body);
  // return res.redirect("back");
  Todo_list_items.create(
    {
      category: req.body.category,
      due_date: req.body.due_date,
      description: req.body.description,
    },
    function (err, newItem) {
      if (err) {
        console.log(`Error in creating new item: ${err}`);
        return;
      }
      console.log("New Item created Successfully");
      return res.redirect("back");
    }
  );
};

module.exports.delete = function (req, res) {
  // console.log(req.body.item_id)
  // return res.redirect("back");
  let ids = req.body.item_id;

  Todo_list_items.deleteMany({_id: {$in: ids}}, function (err) {
    if (err) {
      console.log(`Error in deleting item from db: ${err}`);
      return;
    }
    return res.redirect("back");
  });
};
