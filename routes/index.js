const express = require("express");
const router = express.Router();

const userRoutes = require("./UserRoutes");
const restaurantRoutes = require("./RestaurantRoutes");
const courseRoutes = require("./CourseRoutes");
// const foodtypeRoutes = require("./FoodtypeRoutes");

//Test route
router.get("/", (req, res) => {
    res.send("Welcome to KysMys");
});

router.use("/users", userRoutes);
router.use("/restaurants", restaurantRoutes);
router.use("/courses", courseRoutes);
// router.use("/foodtypes", foodtypeRoutes);


module.exports = router;