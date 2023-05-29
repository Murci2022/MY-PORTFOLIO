import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProjectSection from "../components/ProjectSection"
import TechStack from "../components/TechStack"


/* border-2 border-solid border-black */
export default function Home() {
    return (<main className='mx-auto /* max-w-3xl */ px-4 sn:px-6 md:max-w-6xl '>
        <HeroSection />
        <AboutSection />
        <TechStack />
        <ProjectSection />

    </main>

    )
}