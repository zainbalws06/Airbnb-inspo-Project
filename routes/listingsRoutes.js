const { Router } = require("express");
const router = Router();
const listingsController = require("../controllers/listingsController");

router.get("/", listingsController.routeGet);

router.get("/new", listingsController.newGet);
router.get("/:id", listingsController.idGet);
router.post("/", listingsController.routePost);
router.get("/:id/edit", listingsController.editGet);
router.put("/:id", listingsController.idPut);
router.delete("/:id", listingsController.idDel);

module.exports = router;
