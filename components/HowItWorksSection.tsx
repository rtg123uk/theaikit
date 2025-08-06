import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Target, Rocket, DollarSign } from "lucide-react"

const steps = [
  {
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    title: "Sign Up",
    desc: "Start your journey and sign up after your consultation. We will discuss your route to market, website plans, marketing and deliver the templates."
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Choose Your Niche",
    desc: "We help you identify a niche if you are not bringing an idea with you. Our team look at multiple points to ensure the best niche is deployed for your knowledge and skillset."
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Launch Your Agency",
    desc: "Follow our 30-day launch plan to set up your website, customize your sales materials, and start outreach using our proven templates."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "Close Deals & Deliver",
    desc: "Use our pre-approved AI tools to deliver high-value services to clients. No technical skills needed—we show you exactly how to implement each solution."
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mb-10">
          Getting started with your AI automation agency is simple. Here's the exact process you'll follow:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {steps.map((step, idx) => (
            <Card key={idx} className="flex flex-col items-center border-0 bg-white/90 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center py-10 px-4 gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-2">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 