import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Hero from './components/Hero';
import RandomSelection from './components/RandomSelection';

export default function Home() {
  return (
    <>
      <Hero />
      {/* @ts-ignore */}
      <RandomSelection />
      <CallToAction />
    </>
  );
}
