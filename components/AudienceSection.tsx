import { Check, X } from "lucide-react";

const isFor = [
  "You're a solopreneur or freelancer ready to create a real, scalable income stream",
  "You're serious about starting or growing a business using AI (no tech skills required)",
  "You can commit 5–10 focused hours a week to launching your offer",
  "You want to use your strengths in sales, marketing, or problem-solving—not coding",
  "You're excited to join a like-minded community and take consistent steps forward",
];

const notFor = [
  "You're chasing a 'get rich quick' scheme with zero effort or accountability",
  "You expect someone else to do the work for you",
  "You aren't open to learning how to use new AI tools and business models",
  "You're looking for a fully automated, passive income business without any sales involvement",
];

export default function AudienceSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Is the AI Agency Starter Kit Right for You?
          </h2>
          <p className="text-lg text-muted-foreground">
            This isn't some overnight money-making gimmick. It's a practical, proven framework designed to help you build and sell AI-powered services using tools that already exist. Your success depends on action—not luck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">✅ This Kit Is For You If:</h3>
            <ul className="space-y-3">
              {isFor.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">❌ This Kit Is Not For You If:</h3>
            <ul className="space-y-3">
              {notFor.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <X className="h-5 w-5 text-red-500 shrink-0 mr-2 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>Our mission is to give you the roadmap, assets, and support to build a client-ready AI business fast. If you're ready to take action and play the long game, this is exactly where you belong.</p>
        </div>
      </div>
    </section>
  );
} 