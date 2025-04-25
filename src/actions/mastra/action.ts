"use server";

import { mastra } from "@/mastra";

export async function getWeatherInfo(city: string) {
  const agent = mastra.getAgent("weatherAgent");

  console.log("Agent:", agent);
  console.log("City:", city);

  const result = await agent.generate(`What's the weather like in ${city}?`);

  console.log("Result:", result);

  // extract plain object from the tool call result
  const initialStep = result.steps.find((step) => step.toolResults?.length > 0);
  const weatherData = initialStep?.toolResults?.[0]?.result as
    | Record<string, any>
    | undefined;

  if (!weatherData) {
    // fallback to raw text summary
    return { text: result.text };
  }

  return weatherData;
}
