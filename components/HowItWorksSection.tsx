import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Target, Rocket, DollarSign } from "lucide-react"

const steps = [
  {
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    title: "Get Started",
    desc: "Begin your path by completing your consultation. We'll explore your market approach, website strategy, marketing plans, and provide all necessary templates."
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Select Your Market",
    desc: "Our team assists in market identification if you don't have a specific focus. We analyze various factors to ensure the optimal market aligns with your expertise and capabilities."
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Activate Your Business",
    desc: "Execute our comprehensive 30-day activation strategy to establish your website, personalize your sales resources, and initiate contact using our tested templates."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "Secure Clients & Execute",
    desc: "Leverage our validated automation tools to provide premium services to customers. Technical expertise unnecessary—we provide precise implementation guidance for every solution."
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">The Process</h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mb-10">
          Establishing your automation business is straightforward. Here's the precise methodology you'll implement:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {steps.map((step, idx) => (
            <Card key={idx} className="flex flex-col items-center border-0 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
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