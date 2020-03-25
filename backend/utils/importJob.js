const csv = require("csv-parser");
const fs = require("fs");
// const util = require("util");
const axios = require("axios");

fs.createReadStream("./csv/washington.csv")
  .pipe(csv())
  .on("data", data => results.push(data))
  .on("end", () => {
    const d = {};
    results.forEach(res => {
      const r = JSON.parse(JSON.stringify(res));
      const association = r["﻿Association"];

      if (d[association]) {
        d[association].resources.push({
          name: r["Resource Name"],
          url: r["Link to Resource"]
        });
      } else {
        d[association] = {
          resources: [
            {
              name: r["Resource Name"],
              url: r["Link to Resource"]
            }
          ]
        };
      }
    });

    // console.log(util.inspect(d, { showHidden: false, depth: null }));

    const region = {
      region: "Washington",
      resources: d
    };

    axios
      .post("https://3bfb87af.ngrok.io/regions", region)
      .then(r => console.log(r))
      .catch(e => console.log(e));
  });
