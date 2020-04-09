const regionIds = {
  California: "5e8d54c37035f892bddd74fa",
  Central: "5e8d5a4227fdab9e1a57af5f",
  Midwest: "5e8d5ac7f777ee9f6928eda4",
  Northeast: "5e8d5bbc7bf224a185fc9ba9",
  "Pacific Northwest": "5e8d5c2efedf18a2bb560952",
  Southeast: "5e8d5eef379475a9dfd3511d",
  National: "",
};

const getRegionId = (region) => regionIds[region];

export default getRegionId;
