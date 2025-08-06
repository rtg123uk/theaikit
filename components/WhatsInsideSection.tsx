import { Card, CardContent } from "@/components/ui/card"
import { Globe, FileText, Mail, Zap } from "lucide-react"

export default function WhatsInsideSection() {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-white text-left mb-8 ml-2 md:ml-0">What's Inside Your Kit</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Ready-to-Go Website",
            description: "Professional website with lead capture and automation"
          },
          {
            icon: <FileText className="w-6 h-6" />,
            title: "Lead Database",
            description: "Pre-sourced leads for your chosen niche"
          },
          {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Automation",
            description: "Complete email sequences and templates"
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Client Onboarding",
            description: "Step-by-step client setup guide"
          }
        ].map((item, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-md border-0">
            <CardContent className="p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 