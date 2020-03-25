const Region = require("../models/Region");
const dayjs = require("dayjs");

const getRegions = async (req, res) => {
  const regions = await Region.find(
    {
      deletedAt: null
    },
    "region"
  ).catch(() => {
    throw new Error("Trouble finding regions...");
  });
  res.json(regions);
};

const getRegionResources = async (req, res) => {
  const resources = await Region.find(
    {
      deletedAt: null,
      region: req.params.regionId
    },
    "resources"
  ).catch(() => {
    throw new Error(`Trouble finding resources for ${region}...`);
  });

  res.json(resources);
};

module.export = { getRegions, getRegionResources };
