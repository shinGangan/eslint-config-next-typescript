"use strict";

import base from "./configs/base";
import recommended from "./configs/recommended";
import sb from "./configs/sb";
import basePrettier from "./prettier-configs/base";
import recommendedPrettier from "./prettier-configs/recommended";

export default {
  configs: {
    base,
    recommended,
    sb,
    "base-prettier": basePrettier,
    "recommended-prettier": recommendedPrettier,
  },
};
