import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";

import { customerReviewAgent } from "./agents/customerReviewAgent";
import { weatherAgent } from "./agents/weatherAgent";

export const mastra = new Mastra({
  agents: { weatherAgent, customerReviewAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
