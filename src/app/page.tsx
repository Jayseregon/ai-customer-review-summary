import { ListChecks } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold mb-2">
              Welcome to the AI Review Summarizer Challenge! 👋
            </CardTitle>
            <CardDescription className="text-md">
              Ready to build something cool? We are going to create a simple web
              app that uses AI to summarize customer reviews. Let&apos;s dive
              in!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-none space-y-2 p-4 bg-muted rounded-md">
              <li className="flex items-start">
                <ListChecks className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span>
                  <span className="font-semibold">AI Workflows:</span> Thinking
                  through the AI steps.
                </span>
              </li>
              <li className="flex items-start">
                <ListChecks className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span>
                  <span className="font-semibold">Backend Structure:</span>{" "}
                  Organizing the server-side logic.
                </span>
              </li>
              <li className="flex items-start">
                <ListChecks className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span>
                  <span className="font-semibold">Persistence:</span> Handling
                  data storage effectively.
                </span>
              </li>
              <li className="flex items-start">
                <ListChecks className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span>
                  <span className="font-semibold">Frontend UI:</span> Crafting a
                  clean and functional user interface.
                </span>
              </li>
              <li className="flex items-start">
                <ListChecks className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span>
                  <span className="font-semibold">Library Use:</span> Smartly
                  using tools (like Shadcn!) to boost speed and quality.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
