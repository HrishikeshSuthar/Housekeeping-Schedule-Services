const router = require("express").Router();
const Controller = require("../controllers/serviceController");

router.post("/add", Controller.add);

router.get("/all", Controller.getAll);

router.get("/details/:id", Controller.getOne);

router.put("/update/:id", Controller.update);

router.delete("/delete/:id", Controller.deleteOne);

module.exports = router;
