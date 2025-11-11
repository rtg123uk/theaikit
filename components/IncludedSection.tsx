'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Globe, FileText, Users, Bot, Megaphone, Rocket, RefreshCw, LifeBuoy } from 'lucide-react';

const inclusions = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />, 
    title: 'Professional Business Website',
    desc: 'Search engine optimized, conversion-driven, and easily adaptable for your industry.'
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: 'Proven Outreach Materials',
    desc: 'Tested email sequences, contact strategies, and sales scripts—ready to customize and deploy.'
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Curated Prospect Lists',
    desc: '500–1,000+ verified potential clients in your target sector, prepared for contact.'
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'Intelligent Automation Tools',
    desc: 'Ready-to-deploy conversational interfaces, messaging platforms, and voice systems—no programming required.'
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: 'Branded Sales Materials',
    desc: 'Customizable presentations, marketing documents, and visual assets to accelerate client acquisition.'
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Comprehensive Startup Guide',
    desc: 'Detailed 30-day roadmap to transform from concept to your initial customer.'
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
    title: 'Ongoing Access & Enhancements',
    desc: 'Single payment grants permanent access to all resources, updates, and educational content.'
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-primary" />,
    title: 'Dedicated Assistance',
    desc: 'Exclusive channel to our support team for guidance, answers, and problem resolution.'
  },
];

export default function IncludedSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Your Complete Business Toolkit</h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mb-10">
          All the essential resources to establish, market, and provide AI automation solutions—technical expertise not necessary.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {inclusions.map((item, idx) => (
            <Card key={idx} className="flex flex-col items-center border-0 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center py-10 px-4 gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 