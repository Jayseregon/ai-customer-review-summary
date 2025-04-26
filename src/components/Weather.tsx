// "use client";

// import { useState, useTransition, FormEvent } from "react";

// import { getWeatherInfo } from "@/actions/mastra/action";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";

// export function Weather() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [isPending, startTransition] = useTransition();

//   function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError(null);
//     startTransition(async () => {
//       try {
//         const result = await getWeatherInfo(city);
//         setWeather(result);
//       } catch (err: any) {
//         setError(err.message || "Something went wrong");
//       }
//     });
//   }

//   return (
//     <Card className="w-full max-w-md mx-auto mt-4">
//       <CardHeader className="text-center">
//         <CardTitle>Weather Lookup</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form className="flex" onSubmit={handleSubmit}>
//           <input
//             className="flex-1 border px-3 py-2 rounded-l"
//             name="city"
//             placeholder="Enter city name"
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <button
//             className="bg-primary px-4 py-2 rounded-r text-white disabled:opacity-50"
//             disabled={isPending}
//             type="submit"
//           >
//             {isPending ? "Loading..." : "Get Weather"}
//           </button>
//         </form>
//       </CardContent>
//       <CardFooter>
//         {error && <p className="text-red-500">{error}</p>}
//         {weather && (
//           <div className="space-y-1">
//             <p>
//               <strong>Location:</strong> {weather.location}
//             </p>
//             <p>
//               <strong>Temperature:</strong> {weather.temperature}°C
//             </p>
//             <p>
//               <strong>Feels Like:</strong> {weather.feelsLike}°C
//             </p>
//             <p>
//               <strong>Humidity:</strong> {weather.humidity}%
//             </p>
//             <p>
//               <strong>Wind Speed:</strong> {weather.windSpeed} m/s
//             </p>
//             <p>
//               <strong>Wind Gust:</strong> {weather.windGust} m/s
//             </p>
//             <p>
//               <strong>Conditions:</strong> {weather.conditions}
//             </p>
//           </div>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }
