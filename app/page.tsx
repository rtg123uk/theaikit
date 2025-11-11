import HeroSection from '@/components/HeroSection'
// import SocialProofBar from '@/components/SocialProofBar'
import StatsSection from '@/components/StatsSection'
import IncludedSection from '@/components/IncludedSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import InstructorSection from '@/components/InstructorSection'
import FormulaSection from '@/components/FormulaSection'
import ProgramDetailsSection from '@/components/ProgramDetailsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BonusesSection from '@/components/BonusesSection'
import AudienceSection from '@/components/AudienceSection'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'
import WhyDifferentSection from '@/components/WhyDifferentSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SocialProofBar /> */}
      <StatsSection />
      <IncludedSection />
      <HowItWorksSection />
      <FormulaSection />
      <WhyDifferentSection />
      <InstructorSection />
      <ProgramDetailsSection />
      <TestimonialsSection />
      <BonusesSection />
      <AudienceSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
} 