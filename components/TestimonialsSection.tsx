import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: `"I bought The AI Agency Kit to launch my own agency and went after the Motor Deals market. The resources made it easy to set up a professional site, automate lead capture, and pitch to dealerships. Within a month, I signed my first two clients and now have a steady pipeline. The kit gave me everything I needed to look credible and deliver real value to car dealers."`,
    name: "Alex Murphy",
    agency: "Ignite Automations",
    role: "Founder, Ignite Automations",
    avatar: "/avatar-motor.png",
    initials: "AM",
    niche: "Motor Deals",
    details: `Why this niche: Car dealers are hungry for leads and automation.\nHow the kit helped: Ready-made website, AI chat, and sales scripts.\nResult: 2 clients in the first month, ongoing pipeline, and confidence to scale.`
  },
  {
    quote: `"As a new agency owner, I used the kit to break into the Specialist Finance Broker market. The done-for-you templates and automations let me offer a full solution from day one. My first outreach campaign landed a broker who now refers me to others. The support and credibility from the kit made all the difference."`,
    name: "Sophie Lee",
    agency: "FinEdge Automation",
    role: "Director, FinEdge Automation",
    avatar: "/avatar-finance.png",
    initials: "SL",
    niche: "Specialist Finance Broker",
    details: `Why this niche: Finance brokers need fast, compliant client onboarding.\nHow the kit helped: Automated email, chat, and onboarding flows.\nResult: First client from initial outreach, now growing via referrals.`
  },
  {
    quote: `"I wanted to start an automation business but had no idea where to begin. The kit's Industrial Cleaning playbook gave me a step-by-step plan. I landed my first contract with a cleaning company after just two weeks using the cold email templates and demo scripts. The kit made me look like an expert from day one."`,
    name: "Ben Carter",
    agency: "CleanFlow Solutions",
    role: "Owner, CleanFlow Solutions",
    avatar: "/avatar-cleaning.png",
    initials: "BC",
    niche: "Industrial Cleaning",
    details: `Why this niche: Cleaning companies are eager for new business and efficiency.\nHow the kit helped: Niche-specific outreach, demo scripts, and automation templates.\nResult: First contract in 2 weeks, strong case study for future sales.`
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Real Results, Real Niches
          </h2>
          <p className="text-lg text-muted-foreground">
            See how solopreneurs used the kit to break into high-value niches and win real business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="shadow-xl border-0 bg-white rounded-2xl flex flex-col h-full hover:scale-[1.03] transition-transform">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14 border-2 border-indigo-200">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold leading-snug text-lg">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.agency}</p>
                    <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-full">{t.niche}</span>
                  </div>
                </div>
                <blockquote className="text-base italic text-gray-700 flex-grow mb-4">
                  {t.quote}
                </blockquote>
                <div className="bg-indigo-50 rounded-lg p-5 text-sm text-indigo-900 font-medium space-y-2 mt-2">
                  <div>
                    <span className="font-bold text-indigo-700 flex items-center gap-2 mb-1">Why this niche:</span>
                    <span className="block ml-4">{t.details.split('How the kit helped:')[0].replace('Why this niche:', '').trim()}</span>
                  </div>
                  <div>
                    <span className="font-bold text-indigo-700 flex items-center gap-2 mb-1">How the kit helped:</span>
                    <span className="block ml-4">{t.details.split('How the kit helped:')[1].split('Result:')[0].trim()}</span>
                  </div>
                  <div>
                    <span className="font-bold text-indigo-700 flex items-center gap-2 mb-1">Result:</span>
                    <span className="block ml-4">{t.details.split('Result:')[1].trim()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 