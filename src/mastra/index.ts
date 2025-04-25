import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";

import { weatherAgent } from "./agents/weatherAgent";

export const mastra = new Mastra({
  agents: { weatherAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
