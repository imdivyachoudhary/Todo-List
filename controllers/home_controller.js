module.exports.home = function (req, res) {
  // return res.end('<h1>Welcome!!!</h1>')
  return res.render("home", {
    title: "Home",
  });
};
