import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import ProjectList from '../components/sections/ProjectList';
import OtherWorks from '../components/sections/OtherWorks';
import Awards from '../components/sections/Awards';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectList />
      <OtherWorks />
      <Skills />
      <Awards />
    </>
  );
}
