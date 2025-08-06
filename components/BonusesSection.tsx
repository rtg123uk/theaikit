import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";

const bonuses = [
  {
    emoji: "🎯",
    title: "30-Minute Expert Onboarding Call",
    description: "Get personalised guidance from our team to help you choose your niche, plan your launch, and avoid common beginner mistakes.",
  },
  {
    emoji: "✉️",
    title: "Cold Email Outreach Templates",
    description: "Use our proven email scripts to start conversations that convert—built for AI services and tailored to niche-specific pain points.",
  },
  {
    emoji: "📣",
    title: "Done-for-You Marketing Collateral",
    description: "Grab branded brochures, service breakdowns, and editable graphics you can use in your pitch deck, website, and client onboarding packs.",
  },
];

export default function BonusesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <Gift className="w-10 h-10 text-primary mx-auto mb-2" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Wait, Did You Say Free Bonuses?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Absolutely. We've included a few high-impact extras to make sure you hit the ground running and start landing clients with confidence:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {bonuses.map((bonus, idx) => (
            <Card key={idx} className="shadow-lg border-0 bg-white">
              <CardHeader>
                <span className="text-2xl mb-1">{bonus.emoji}</span>
                <CardTitle className="text-xl mt-2">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 