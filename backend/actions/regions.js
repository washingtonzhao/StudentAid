const Region = require("../models/Region");

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
      _id: req.params.regionId
    },
    "associations"
  ).catch(() => {
    throw new Error(`Trouble finding resources for ${region}...`);
  });

  res.json(resources);
};

const createRegion = async (req, res) => {
  console.log(req.body);
  await Region.create(req.body).catch(() => {
    throw new Error("Trouble creating region...");
  });
  res.json({ success: true });
};

module.exports = { getRegions, getRegionResources, createRegion };
