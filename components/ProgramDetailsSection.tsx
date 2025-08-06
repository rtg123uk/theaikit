'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import SignupPopup from './SignupPopup';

const packages = [
  {
    title: 'Professional',
    price: '£1,195',
    discountedPrice: '£995',
    oldPrice: '£1,495',
    features: [
      '1,000 Initial Leads',
      '5-Page Website (SEO Optimised)',
      '4 Blog Posts',
      'Complete Sales Kit',
      'Email Marketing Guide',
      'Chat & Voice Templates',
      'Priority Support',
      'Lifetime Access & Updates',
    ],
    cta: 'Choose Professional',
    popular: true,
  },
  {
    title: 'Essential',
    price: '£795',
    discountedPrice: '£595',
    oldPrice: '£795',
    features: [
      '500 Initial Leads',
      '1-Page Website',
      'Complete Sales Kit',
      'Basic Support',
      'Email Marketing Guide',
      'Chat & Voice Templates',
      'Lifetime Access',
    ],
    cta: 'Choose Essential',
    popular: false,
  },
  {
    title: 'Agency',
    price: '£1,395',
    discountedPrice: '£1,195',
    oldPrice: '£1,395',
    features: [
      'Everything in Professional',
      '1-to-1 Strategy Call',
      'Dedicated Support',
      'Custom Implementation Guide',
      'Advanced Templates',
      'Priority Lead Generation',
    ],
    cta: 'Choose Agency',
    popular: false,
  },
];

export default function ProgramDetailsSection() {
  const [showDiscount, setShowDiscount] = useState<boolean | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupConfig, setPopupConfig] = useState({
    title: '',
    subtitle: '',
    showMonthlyOptions: false,
    selectedPackage: 'essential'
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    const now = new Date().getTime();
    const distance = endDate.getTime() - now;
    setShowDiscount(distance > 0);
  }, []);

  if (showDiscount === null) return null;

  const openPopup = (title: string) => {
    setPopupConfig({
      title: `Get Started with ${title} Package`,
      subtitle: "Complete the form below to begin your AI automation business journey. We'll contact you within 24 hours to discuss your package and next steps.",
      showMonthlyOptions: true,
      selectedPackage: title.toLowerCase()
    });
    setIsPopupOpen(true);
  };

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the AI Agency Starter Kit package that best fits your goals. All packages include lifetime access and white-label rights.
          </p>
        </div>
        <div className="flex flex-col gap-10 w-full max-w-xl">
          {packages.map((pkg, idx) => (
            <Card
              key={pkg.title}
              className={`w-full border-0 shadow-xl bg-white relative ${pkg.popular ? 'ring-2 ring-indigo-600 scale-105 z-10' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-bold text-center mb-2">{pkg.title}</CardTitle>
                <div className="flex flex-col items-center mb-2">
                  <span className="text-4xl font-bold mb-1">
                    {showDiscount ? pkg.discountedPrice : pkg.price}
                  </span>
                  {showDiscount && pkg.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">{pkg.oldPrice}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-3 mb-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col px-8 pb-8">
                <button
                  onClick={() => openPopup(pkg.title)}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg mb-2"
                >
                  {pkg.cta}
                </button>
                {pkg.popular && (
                  <p className="text-xs text-center text-muted-foreground">
                    Best value for most new agencies
                  </p>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <SignupPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={popupConfig.title}
        subtitle={popupConfig.subtitle}
        showMonthlyOptions={popupConfig.showMonthlyOptions}
        selectedPackage={popupConfig.selectedPackage}
      />
    </section>
  );
} 