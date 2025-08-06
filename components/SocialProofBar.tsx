import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const logos = [
  { src: "/logo-forbes.png", alt: "Forbes" },
  { src: "/logo-entrepreneur.png", alt: "Entrepreneur" },
  { src: "/logo-fastcompany.png", alt: "Fast Company" },
  { src: "/logo-techcrunch.png", alt: "TechCrunch" },
  { src: "/logo-businessinsider.png", alt: "Business Insider" },
]

export default function SocialProofBar() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <Card className="w-full max-w-3xl border-0 bg-white/80 shadow-none">
          <CardContent className="py-4 px-2 flex flex-col items-center">
            <span className="text-xs text-muted-foreground mb-2 tracking-wide uppercase">As seen in</span>
            <div className="flex flex-wrap justify-center gap-8 opacity-80">
              {logos.map((logo, idx) => (
                <div key={idx} className="h-8 w-auto flex items-center">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={100} 
                    height={32} 
                    className="object-contain h-8 w-auto"
                    loading="lazy"
                    quality={75}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 