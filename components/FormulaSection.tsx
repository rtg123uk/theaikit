import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket, DollarSign } from "lucide-react";

const formulaSteps = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Pick a Profitable Niche",
    description: "Use our AI-powered niche selector to identify the most promising local business verticals in your region. We've pre-researched 500+ niches to help you choose the perfect market."
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Deploy the Kit",
    description: "Install your branded sales assets, outreach templates, and service bundles. Follow our included 30-day plan to launch fast. Everything is white-label and ready to use."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "Start Selling Solutions",
    description: "Deliver high-value services like AI chatbots, voice bots, and booking automations using pre-approved tools we've tested and recommend. No technical skills needed."
  }
];

export default function FormulaSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The Simple 3-Step Formula to Launch Your AI Agency
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building an AI automation agency isn't complicated. It comes down to this proven, repeatable process that's helped hundreds of entrepreneurs start closing deals in days, not months.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {formulaSteps.map((step, idx) => (
            <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-8">
            Each step is backed by detailed walkthroughs, checklists, and templates to eliminate guesswork. You'll have everything you need to start closing deals quickly.
          </p>
          <Button size="lg" asChild>
            <Link href="/program">Get the Agency Starter Kit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 