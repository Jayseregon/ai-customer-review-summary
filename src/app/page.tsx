import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReviewAnalyzer } from "@/components/ReviewAnalyzer";

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
            <ReviewAnalyzer />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
