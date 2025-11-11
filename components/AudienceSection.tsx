import { Check, X } from "lucide-react";

const isFor = [
  "You're an independent professional or consultant prepared to establish a genuine, expandable revenue source",
  "You're committed to launching or expanding a business utilizing automation (technical knowledge not necessary)",
  "You can dedicate 5–10 concentrated hours weekly to activating your offering",
  "You prefer leveraging your capabilities in sales, marketing, or solution development—rather than programming",
  "You're enthusiastic about connecting with a similar-minded group and making steady progress",
];

const notFor = [
  "You're pursuing an 'instant wealth' approach with minimal effort or responsibility",
  "You anticipate others handling the work on your behalf",
  "You're resistant to learning how to utilize new automation tools and business frameworks",
  "You're seeking a completely automated, hands-off income venture without any sales participation",
];

export default function AudienceSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Is The AI Agency Kit the Right Fit?
          </h2>
          <p className="text-lg text-muted-foreground">
            This isn't some overnight money-making gimmick. It's a practical, proven framework designed to help you build and sell automation-powered services using tools that already exist. Your success depends on action—not luck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">✅ This Framework Is For You If:</h3>
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
            <h3 className="text-xl font-semibold mb-4">❌ This Framework Is Not For You If:</h3>
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
          <p>Our purpose is to provide you with the strategy, resources, and assistance to construct a customer-ready automation business rapidly. If you're prepared to take initiative and commit for the long term, this is precisely where you should be.</p>
        </div>
      </div>
    </section>
  );
} 