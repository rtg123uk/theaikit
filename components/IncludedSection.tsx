'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Globe, FileText, Users, Bot, Megaphone, Rocket, RefreshCw, LifeBuoy } from 'lucide-react';

const inclusions = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />, 
    title: 'Ready-Made Website',
    desc: 'SEO-optimised, conversion-focused, and fully customisable for your niche.'
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: 'Sales Scripts & Email Templates',
    desc: 'Proven cold email, outreach, and sales call scripts—just copy, personalise, and send.'
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Pre-Vetted Leads',
    desc: '500–1,000+ targeted leads for your chosen market, ready for outreach.'
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'AI Chat & Voice Automations',
    desc: 'Plug-and-play chatbots, WhatsApp, and voice automations—no coding needed.'
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: 'White-Label Marketing Collateral',
    desc: 'Editable brochures, pitch decks, and graphics to win clients fast.'
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Step-by-Step Launch Plan',
    desc: 'Follow our 30-day checklist to go from zero to your first client.'
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
    title: 'Lifetime Access & Updates',
    desc: 'One-time purchase, lifetime updates to all templates, tools, and training.'
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-primary" />,
    title: 'Priority Support',
    desc: 'Direct access to our team for help, feedback, and troubleshooting.'
  },
];

export default function IncludedSection() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">What's Included</h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mb-10">
          Everything you need to launch, sell, and deliver AI automation services—no tech skills required.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {inclusions.map((item, idx) => (
            <Card key={idx} className="flex flex-col items-center border-0 bg-white/90 shadow-md hover:shadow-lg transition-shadow duration-300">
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