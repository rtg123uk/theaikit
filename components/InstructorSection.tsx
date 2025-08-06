"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InstructorSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto max-w-3xl flex flex-col items-center">
        <Avatar className="w-24 h-24 mb-6 border-4 border-white shadow-lg">
          <AvatarImage src="/instructor-avatar.png" alt="Instructor Name" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          From Digital Entrepreneur to AI Agency Expert
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mb-8">
          I help entrepreneurs like you build profitable AI automation agencies, even if you're starting from scratch.
        </p>

        <div className="prose prose-lg max-w-none text-left text-muted-foreground space-y-4">
          <p>
            After years of building, launching, and selling digital businesses (including a successful chatbot agency), I learned that what people really want isn't more tech—they want a clear, actionable path to making money with AI.
          </p>
          <p>
            This kit is the result of everything I've learned working with hundreds of clients. It was designed to help you avoid the usual traps: overthinking your offer, getting stuck in tech setup, and wasting months without making a sale.
          </p>
          <p>
            Instead, you'll get a streamlined process to pick your niche, follow the script, and close deals quickly using tools that just work. I've tested every template, script, and strategy in this kit with real clients.
          </p>
          <p>
            I built this so solopreneurs, freelancers, coaches, and agency owners could finally launch something real—without needing a dev team or £10k startup budget. The goal is simple: help you start closing deals and building recurring revenue in a matter of days.
          </p>
        </div>
        
        <Button size="lg" variant="outline" className="mt-8" asChild>
          <Link href="/program">Get the Agency Starter Kit</Link>
        </Button>
      </div>
    </section>
  );
} 