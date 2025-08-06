"use client";

import { Card, CardContent } from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket, faCode, faChartLine, faShieldAlt } from "@fortawesome/free-solid-svg-icons"
import CountUp from "react-countup"

const stats = [
  { value: 7, suffix: ' Days', label: "From Zero to Agency Owner", icon: faRocket },
  { value: 0, label: "Tech Skills Needed", icon: faCode },
  { value: 5, suffix: 'M+', label: "UK Businesses Need AI", icon: faChartLine },
  { value: 100, suffix: '%', label: "Satisfaction Guarantee", icon: faShieldAlt },
]

export default function StatsSection() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="backdrop-blur-xl bg-white/30 border-0 shadow-lg rounded-xl p-0 transition-transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <CardContent className="flex flex-col items-center py-6 px-3 gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 mb-2 shadow-sm">
                  <FontAwesomeIcon icon={stat.icon} className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-indigo-700 mb-0.5 tracking-tight">
                  <CountUp end={stat.value} duration={1.2} suffix={stat.suffix || ''} />
                </div>
                <div className="text-xs md:text-sm text-gray-700 font-medium text-center opacity-90">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 