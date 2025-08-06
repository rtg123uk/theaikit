'use client';

import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Rocket, Play, Users, Target } from "lucide-react";

const differentiators = [
  {
    emoji: "1️⃣",
    icon: MessageSquare,
    title: "Ready-to-Use Sales Kit",
    subtitle: "Not Just Theory",
    description: "Most AI courses teach you how to build - we give you everything you need to sell. From proposal templates to cold email sequences, you'll have a complete sales toolkit ready to deploy."
  },
  {
    emoji: "2️⃣",
    icon: Rocket,
    title: "2,000 Pre-Vetted Leads",
    subtitle: "Start Selling Day One",
    description: "Skip the research phase. We've compiled a database of 2,000 niche-specific leads across industries like dental, real estate, legal, and fitness - all ready for your outreach."
  },
  {
    emoji: "3️⃣",
    icon: Play,
    title: "White-Label Delivery",
    subtitle: "No Technical Skills Needed",
    description: "You won't need to code or build anything. We show you how to deliver high-value AI services using proven third-party tools that you can white-label as your own."
  },
  {
    emoji: "4️⃣",
    icon: Users,
    title: "Proven Sales Process",
    subtitle: "Follow the Script",
    description: "We've tested and refined our sales approach with hundreds of clients. You'll get exact scripts, templates, and strategies that have already generated results."
  },
  {
    emoji: "5️⃣",
    icon: Target,
    title: "Lifetime Access",
    subtitle: "Always Up-to-Date",
    description: "One-time purchase includes lifetime updates to our templates, training, and tools. You'll always have the latest assets to keep your agency ahead of the curve."
  }
];

export default function WhyDifferentSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why We're Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This isn't just another AI course. Here's what makes our Agency Starter Kit truly unique:
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