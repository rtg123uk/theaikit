'use client';

import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

export default function CountdownHeader() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Set end date to 20 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 20);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isExpired) return null;

  return (
    <div className="bg-slate-900 text-white py-3">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">Early Discounts on New Packages - save up to 20%</span>
          <Badge variant="secondary" className="bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20">Limited</Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-yellow-400" />
          <div className="flex gap-3 text-sm">
            <div>
              <span className="font-bold">{timeLeft.days}</span>d
            </div>
            <div>
              <span className="font-bold">{timeLeft.hours}</span>h
            </div>
            <div>
              <span className="font-bold">{timeLeft.minutes}</span>m
            </div>
            <div>
              <span className="font-bold">{timeLeft.seconds}</span>s
            </div>
          </div>
          <span className="text-sm font-medium">Until the deal ends</span>
        </div>
      </div>
    </div>
  );
} 