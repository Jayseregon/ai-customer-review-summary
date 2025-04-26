"use server";

import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";
import { Document } from "@langchain/core/documents";

import { mastra } from "@/mastra";

// export async function getWeatherInfo(city: string) {
//   const agent = mastra.getAgent("weatherAgent");

//   const result = await agent.generate(`What's the weather like in ${city}?`);

//   // extract plain object from the tool call result
//   const initialStep = result.steps.find((step) => step.toolResults?.length > 0);
//   const weatherData = initialStep?.toolResults?.[0]?.result as
//     | Record<string, any>
//     | undefined;

//   if (!weatherData) {
//     // fallback to raw text summary
//     return { text: result.text };
//   }

//   return weatherData;
// }

export async function analyzeCustomerReviews(file: File) {
  try {
    if (!file) {
      throw new Error("File is required");
    }

    // Load the CSV file using CSVLoader from langchain
    const loader: CSVLoader = new CSVLoader(file);
    const docs: Document<Record<string, any>>[] = await loader.load();

    // For simplicity, we just keep the pageContent for each document, to a raw string
    // In a real-world scenario, you might want to process the documents further, leveraging the metadata
    const csvContent = docs.map((doc) => doc.pageContent).join("\n");

    // Get the customer review agent
    const agent = mastra.getAgent("customerReviewAgent");

    // Generate analysis using the agent
    const result = await agent.generate(
      `Please analyze the following customer reviews: ${csvContent}`,
    );

    // Check if we have structured data from a tool call
    const toolResultStep = result.steps.find(
      (step) => step.toolResults?.length > 0,
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
