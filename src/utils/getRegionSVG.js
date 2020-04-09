import React from "react";
import { ReactComponent as PacificNorthwest } from "../assets/svg/PacificNorthwest.svg";
import { ReactComponent as California } from "../assets/svg/California.svg";
import { ReactComponent as Central } from "../assets/svg/Central.svg";
import { ReactComponent as Midwest } from "../assets/svg/Midwest.svg";
import { ReactComponent as Southeast } from "../assets/svg/Southeast.svg";
import { ReactComponent as Northeast } from "../assets/svg/Northeast.svg";

const regionSVGs = {
  "Pacific Northwest": <PacificNorthwest style={{ width: 84, height: 84 }} />,
  California: <California style={{ width: 84, height: 84 }} />,
  Central: <Central style={{ width: 84, height: 84 }} />,
  Southeast: <Southeast style={{ width: 84, height: 84 }} />,
  Midwest: <Midwest style={{ width: 84, height: 84 }} />,
  Northeast: <Northeast style={{ width: 84, height: 84 }} />,
};

export const getRegionSVG = (region) => regionSVGs[region];
