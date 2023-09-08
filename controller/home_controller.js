const home = async (req, res) => {
  try {
    return res.render("layout", {
      title: "Home",
    });
  } catch (error) {
    if (error) {
      console.log("Error in homeController/home", error);
    }
  }
};
module.exports = { home };
