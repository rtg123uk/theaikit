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
    question: "Do I need technical skills?",
    answer: "No. Everything is set up using existing AI tools. You don't need to code or design anything."
  },
  {
    question: "Do I need to build software?",
    answer: "No. This is a business starter kit that uses top-rated third-party AI platforms. You'll be acting as the expert, not the engineer."
  },
  {
    question: "Is this a subscription?",
    answer: "No. You pay once, get lifetime access, and all future updates included."
  },
  {
    question: "Can I resell the templates and assets?",
    answer: "Yes! You can rebrand everything and use it under your own name."
  },
  {
    question: "How long before I see results?",
    answer: "Most users send their first outreach within 48–72 hours and close a client in their first 2–4 weeks."
  },
  {
    question: "What if I'm not sure which package to choose?",
    answer: "Book a free 1:1 call and we'll help you work it out. We'll assess your background, goals, and budget to recommend the best option for you. No pressure, just honest advice."
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
            Everything you need to know about the AI Agency Starter Kit.
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