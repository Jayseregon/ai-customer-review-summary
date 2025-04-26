"use server";

import { mastra } from "@/mastra";

export async function getWeatherInfo(city: string) {
  const agent = mastra.getAgent("weatherAgent");

  console.log("City:", city);

  const result = await agent.generate(`What's the weather like in ${city}?`);

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

export async function analyzeCustomerReviews(csvContent: string) {
  try {
    if (!csvContent || csvContent.length === 0) {
      throw new Error("No documents provided for analysis");
    }

    // Get the customer review agent
    const agent = mastra.getAgent("customerReviewAgent");

    if (!agent) {
      throw new Error("Customer Review Agent not found");
    }

    // Generate analysis using the agent
    const result = await agent.generate(
      `Please analyze the customer reviews and provide a summary, from the CSV data below:
      ${csvContent}`
    );

    // Check if we have structured data from a tool call
    const toolResultStep = result.steps.find(
      (step) => step.toolResults?.length > 0
    );
    if (toolResultStep?.toolResults?.[0]?.result) {
      return toolResultStep.toolResults[0].result;
    }

    return result.text;
  } catch (error: any) {
    console.error("Error analyzing customer reviews:", error);
    throw new Error("Failed to analyze customer reviews: ", error.message);
  }
}
