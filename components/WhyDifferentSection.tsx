'use client';

import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Rocket, Play, Users, Target } from "lucide-react";

const differentiators = [
  {
    emoji: "1️⃣",
    icon: MessageSquare,
    title: "Complete Sales Framework",
    subtitle: "Beyond Concepts",
    description: "Most automation courses focus on development - we provide all resources required for sales. From proposal formats to outreach email sequences, you'll have a comprehensive sales system prepared for deployment."
  },
  {
    emoji: "2️⃣",
    icon: Rocket,
    title: "2,000 Verified Prospects",
    subtitle: "Begin Selling Immediately",
    description: "Eliminate the research stage. We've assembled a collection of 2,000 industry-specific prospects across sectors including healthcare, property, legal services, and wellness - all prepared for your contact efforts."
  },
  {
    emoji: "3️⃣",
    icon: Play,
    title: "Branded Service Delivery",
    subtitle: "Zero Technical Expertise Required",
    description: "You won't need to program or construct anything. We demonstrate how to provide premium automation services using validated external platforms that you can rebrand as your own."
  },
  {
    emoji: "4️⃣",
    icon: Users,
    title: "Validated Sales Methodology",
    subtitle: "Execute the Framework",
    description: "We've tested and optimized our sales methodology with numerous customers. You'll receive precise scripts, formats, and tactics that have already produced outcomes."
  },
  {
    emoji: "5️⃣",
    icon: Target,
    title: "Permanent Access",
    subtitle: "Continuously Current",
    description: "Single payment grants permanent access to all template updates, educational content, and tools. You'll consistently have the most recent resources to maintain your business's competitive edge."
  }
];

export default function WhyDifferentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This isn't just another AI course. Here's what makes The AI Agency Kit truly unique:
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.emoji}</span>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </div>
                      <p className="text-sm font-medium text-primary-600 mb-3">
                        {item.subtitle}
                      </p>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
} 