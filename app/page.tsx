import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';

export default function Home() {
  return (
    <main className='text-center mx-auto max-w-5xl px-4 sn:px-6 md:max-w-6x'>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
