const express = require("express");
const router = express.Router();
const { getRegions, getRegionResources } = require("../actions/regions");
const errorHandler = require("../utils/errorHandler");

router.get("/", errorHandler(getRegions));
router.get("/:regionId/resources", errorHandler(getRegionResources));

module.exports = router;
