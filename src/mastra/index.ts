import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";

import { customerReviewAgent } from "./agents/customerReviewAgent";

export const mastra = new Mastra({
  agents: { customerReviewAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
