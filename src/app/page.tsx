'use client'

import {
  Navbar,
  Hero,
  CapabilityGrid,
  CaseStudyGrid,
  MicroWins,
  PlaybookTimeline,
  ToolChips,
  AwardsCertifications,
  Testimonials,
  About,
  Contact,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CapabilityGrid />
        <CaseStudyGrid />
        <MicroWins />
        <PlaybookTimeline />
        <ToolChips />
        <AwardsCertifications />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
