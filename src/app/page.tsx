import { Hero } from "@/components/sections/hero";
import { TrustMetrics } from "@/components/sections/trust-metrics";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <Services />
      <Process />
      <ProjectsPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
