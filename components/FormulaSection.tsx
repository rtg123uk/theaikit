import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket, DollarSign } from "lucide-react";

const formulaSteps = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Identify a Lucrative Market",
    description: "Utilize our intelligent market analysis tool to pinpoint the most attractive local business sectors in your area. We've conducted preliminary research on 500+ markets to facilitate optimal selection."
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Implement the Framework",
    description: "Set up your customized sales materials, contact templates, and service packages. Execute our comprehensive 30-day strategy to accelerate launch. All resources are white-label and immediately available."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "Begin Offering Services",
    description: "Provide premium solutions such as conversational AI systems, voice automation, and scheduling tools using validated platforms we've tested and endorse. Technical knowledge not required."
  }
];

export default function FormulaSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The Straightforward Three-Phase Method to Start Your Automation Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating an automation enterprise isn't complex. It centers on this established, systematic approach that's enabled numerous business owners to begin securing clients in days rather than months.
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
            Every phase includes comprehensive guides, action lists, and ready-to-use templates to remove uncertainty. You'll possess all necessary resources to begin securing clients rapidly.
          </p>
          <Button size="lg" asChild>
            <Link href="/program">Get The AI Agency Kit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 