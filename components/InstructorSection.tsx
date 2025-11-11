"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InstructorSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-3xl flex flex-col items-center">
        <Avatar className="w-24 h-24 mb-6 border-4 border-white shadow-lg">
          <AvatarImage src="/instructor-avatar.png" alt="Instructor Name" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          From Business Builder to Automation Authority
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mb-8">
          I assist business owners like yourself in creating successful automation enterprises, regardless of your starting point.
        </p>

        <div className="prose prose-lg max-w-none text-left text-muted-foreground space-y-4">
          <p>
            Following extensive experience developing, launching, and exiting digital ventures (including a thriving conversational AI business), I discovered that what individuals truly seek isn't additional technology—they desire a straightforward, practical route to generating income through automation.
          </p>
          <p>
            This framework represents the culmination of insights gained from collaborating with numerous customers. It was crafted to help you sidestep common pitfalls: excessive analysis of your proposition, becoming mired in technical configuration, and losing months without generating revenue.
          </p>
          <p>
            Rather, you'll receive a simplified methodology to select your market, adhere to the framework, and secure clients rapidly using reliable tools. I've validated each template, script, and approach in this framework with actual customers.
          </p>
          <p>
            I created this so independent professionals, consultants, coaches, and agency operators could finally establish something substantial—without requiring a development team or substantial startup capital. The objective is straightforward: enable you to begin securing clients and developing recurring income within days.
          </p>
        </div>
        
        <Button size="lg" variant="outline" className="mt-8" asChild>
          <Link href="/program">Get The AI Agency Kit</Link>
        </Button>
      </div>
    </section>
  );
} 