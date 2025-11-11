'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FinalCTASection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <Card className="max-w-3xl mx-auto border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Side Business?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Apply now to launch your own AI automation agency and start selling proven solutions to real businesses—no tech skills required.
              </p>
              <Button size="lg" className="px-8 py-7 text-lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <div className="mt-5 text-xs text-muted-foreground">
                We review all prospective clients to ensure you are the right fit for the project. We NEVER sell to anyone we feel may not be able to manage the business.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 