import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: `"We wanted to break into the Motor Deals market but had no digital presence. The kit gave us a ready-made website, lead lists, and AI chat automations. Within 2 weeks, we were booking test drives online and capturing leads 24/7. In our first month, we closed 7 deals directly from the automations."`,
    name: "James Turner",
    agency: "TM Media",
    role: "Owner, TM Media",
    avatar: "/avatar-motor.png",
    initials: "JT",
    niche: "Motor Deals",
    details: `Why this niche: Car dealers are hungry for leads and automation.\nHow the kit helped: Ready-made website, AI chat, and sales scripts.\nResult: 7 cars sold in the first month, 3x more leads, and 50% less admin time.`
  },
  {
    quote: `"As a Specialist Finance Broker, compliance and speed are everything. The kit's email templates and automation flows let us respond to clients instantly and keep records for every conversation. We doubled our client onboarding rate and now get 80% of new business from our AI-powered website."`,
    name: "Priya Patel",
    agency: "Apex AI Solutions",
    role: "Director, Apex AI Solutions",
    avatar: "/avatar-finance.png",
    initials: "PP",
    niche: "Specialist Finance Broker",
    details: `Why this niche: Finance brokers need fast, compliant client onboarding.\nHow the kit helped: Automated email, chat, and onboarding flows.\nResult: 2x onboarding speed, 80% of new business from web leads, full compliance logs.`
  },
  {
    quote: `"Industrial cleaning is a tough market, but the kit helped us stand out. We used the AI sales scripts and WhatsApp automation to follow up with every enquiry. In 6 weeks, we landed contracts with 3 factories and now have a pipeline we never thought possible."`,
    name: "Linda Evans",
    agency: "CleanPro Industrial",
    role: "Founder, CleanPro Industrial",
    avatar: "/avatar-cleaning.png",
    initials: "LE",
    niche: "Industrial Cleaning",
    details: `Why this niche: Cleaning companies are eager for new business and efficiency.\nHow the kit helped: Niche-specific outreach, demo scripts, and automation templates.\nResult: 3 new factory contracts, 5x more responses, and a growing pipeline.`
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
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
            <Card key={idx} className="shadow-xl border-0 bg-white/90 backdrop-blur-lg rounded-2xl flex flex-col h-full hover:scale-[1.03] transition-transform">
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