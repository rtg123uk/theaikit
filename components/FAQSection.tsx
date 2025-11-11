"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "Is technical expertise required?",
    answer: "Not at all. All systems are configured using established automation platforms. No programming or design experience necessary."
  },
  {
    question: "Do I need to develop applications?",
    answer: "No. This is an enterprise package that leverages premium third-party automation services. You'll serve as the consultant, not the developer."
  },
  {
    question: "Is this a recurring payment?",
    answer: "No. Single payment provides permanent access, with all upcoming enhancements included."
  },
  {
    question: "Can I rebrand and resell the materials?",
    answer: "Absolutely! You can customize all content and operate under your own brand identity."
  },
  {
    question: "When can I expect outcomes?",
    answer: "Most customers initiate their first contact within 48–72 hours and secure a client within their initial 2–4 weeks."
  },
  {
    question: "What if I'm uncertain about package selection?",
    answer: "Schedule a complimentary consultation and we'll assist you in determining the right fit. We'll evaluate your experience, objectives, and resources to suggest the optimal choice. No obligation, simply straightforward guidance."
  }
];

export default function FAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about The AI Agency Kit.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto shadow-md border-0">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 