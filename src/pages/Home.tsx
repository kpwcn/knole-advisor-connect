import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Briefcase, TrendingUp, Award, Target } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import TextType from '@/components/ui/text-type';
import codeMonitor from '@/assets/code-monitor.jpg';
import lightbulb from '@/assets/lightbulb.jpg';
import codingLaptop from '@/assets/coding-laptop.jpg';
interface Stats {
  members: number;
  eventsPerYear: number;
  sponsors: number;
}
interface Sponsor {
  name: string;
  logo: string;
  tier: 'gold' | 'silver';
}
const DynamicText = () => {
  const texts = ['Industrials', 'Healthcare', 'Financial Institutions Group', 'Energy & Infrastructure', 'TMT', 'Consumer Retail'];
  const fontStyles = [
    'font-playfair font-bold italic text-6xl md:text-7xl lg:text-8xl',
    'font-montserrat font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-wide',
    'font-oswald font-light text-7xl md:text-8xl lg:text-9xl tracking-wider',
    'font-raleway font-medium text-6xl md:text-7xl lg:text-8xl tracking-tight',
    'font-merriweather font-black text-5xl md:text-6xl lg:text-7xl',
    'font-roboto font-thin text-6xl md:text-7xl lg:text-8xl tracking-widest'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 250);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);
  return <div className="text-center py-12">
      <div className={`text-white transition-all duration-500 ${fontStyles[currentIndex]} ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0 animate-fade-out'}`}>
        {texts[currentIndex]}
      </div>
    </div>;
};
const Home = () => {
  const [stats, setStats] = useState<Stats>({
    members: 0,
    eventsPerYear: 0,
    sponsors: 0
  });
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    // Simulate fetching data from JSON files
    const fetchData = () => {
      // Mock stats data
      setStats({
        members: 6,
        eventsPerYear: 11,
        sponsors: 12
      });

      // Mock sponsors data
      setSponsors([{
        name: 'Goldman Sachs',
        logo: '/lovable-uploads/Goldman-Sachs-1869.png',
        tier: 'gold'
      }, {
        name: 'JP Morgan',
        logo: '/lovable-uploads/jpm.png',
        tier: 'gold'
      }, {
        name: 'EFG',
        logo: '/lovable-uploads/EFG_Logo_RGB_pos_medium.png',
        tier: 'gold'
      }, {
        name: 'HSBC',
        logo: '/lovable-uploads/HSBC_logo_(2018).svg.png',
        tier: 'silver'
      }, {
        name: 'CIMB',
        logo: '/lovable-uploads/CIMB-Logo.png',
        tier: 'silver'
      }, {
        name: 'KPMG',
        logo: '/lovable-uploads/Logo_of_KPMG.svg.png',
        tier: 'silver'
      }]);
    };
    fetchData();

    // Auto-cycle through images every 3 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % 3);
    }, 3000);

    // Test if video file exists
    const testVideoFile = async () => {
      try {
        const response = await fetch('/videos/london2.mp4');
        console.log('Video file test:', response.status, response.ok);
        if (!response.ok) {
          console.error('Video file not found or inaccessible');
          setVideoError(true);
        }
      } catch (error) {
        console.error('Error testing video file:', error);
        setVideoError(true);
      }
    };
    testVideoFile();
    return () => clearInterval(imageInterval);
  }, []);
  const handleVideoLoad = () => {
    console.log('✅ Video loaded successfully');
    setVideoLoaded(true);
    setVideoError(false);
  };
  const handleVideoError = (e: any) => {
    console.error('❌ Video failed to load:', e);
    console.error('Video error details:', {
      error: e.target?.error,
      networkState: e.target?.networkState,
      readyState: e.target?.readyState,
      currentSrc: e.target?.currentSrc
    });
    setVideoError(true);
    setVideoLoaded(false);
  };
  const handleVideoCanPlay = () => {
    console.log('🎬 Video can start playing');
  };
  return <Layout title="Knole Advisory - Student Finance & Consulting Society">
      {/* Hero Section */}
      <section className="relative text-primary-foreground min-h-screen flex items-center overflow-hidden">
        
        
        {/* Background - Video or Fallback */}
        {!videoError ? <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline aria-hidden="true" onLoadedData={handleVideoLoad} onError={handleVideoError} onCanPlay={handleVideoCanPlay} preload="auto">
            {/* FIXED: Remove spaces and /public/ prefix */}
            <source src="/videos/london2.mp4" type="video/mp4" />
            {/* Alternative with URL encoding for spaces if you can't rename */}
            <source src="/public/videos/london2.mp4" type="video/mp4" />
          </video> : (/* Fallback gradient background */
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary z-0" />)}
        
        {/* Overlay - Adjust opacity based on video status */}
        <div className={`absolute inset-0 z-10 ${videoLoaded ? 'bg-primary/60' : 'bg-primary/80'}`} />

        
        <div className="relative z-20 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* CMS-edit-start::hero-title */}
            <h1 className="font-heading font-bold mb-6 leading-tight text-white drop-shadow-lg text-center">
              <div className="text-6xl md:text-7xl lg:text-8xl font-heading">Knole Advisory</div>
              <div className="text-3xl md:text-4xl lg:text-5xl mt-4">Student Investment Banking Society</div>
            </h1>
            {/* CMS-edit-end */}
            
            {/* CMS-edit-start::hero-subtitle */}
            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed drop-shadow-md mt-8">
              From concept to execution. London's first student-run investment bank, building 
              future dealmakers with real-world M&A experience.
            </p>
            {/* CMS-edit-end */}

            <div className="flex justify-center mt-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZ86Rhmu8G6kW-wonOlSxF9g3R0D3ma8d-usNSDq7fyT1DnQ/viewform" target="_blank" rel="noopener noreferrer">
                <Button id="join-cta" size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold shadow-lg">
                  Apply Today
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white text-primary">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <Users size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-primary mb-2" id="members-stat">
                <TextType text={['6+', '6+', '6+']} typingSpeed={100} pauseDuration={4000} deletingSpeed={50} showCursor={false} className="text-5xl font-bold text-primary" />
              </div>
              {/* CMS-edit-start::members-label */}
              <p className="text-primary/80 font-medium">Sectors Covered</p>
              {/* CMS-edit-end */}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <Calendar size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-primary mb-2" id="events-stat">
                <TextType text={['20+', '20+', '20+']} typingSpeed={100} pauseDuration={4000} deletingSpeed={50} showCursor={false} className="text-5xl font-bold text-primary" initialDelay={500} />
              </div>
              {/* CMS-edit-start::events-label */}
              <p className="text-primary/80 font-medium">Partner Universities</p>
              {/* CMS-edit-end */}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <Briefcase size={32} className="text-white" />
              </div>
              <div className="text-5xl font-bold text-primary mb-2" id="sponsors-stat">
                <TextType text={['12+', '12+', '12+']} typingSpeed={100} pauseDuration={4000} deletingSpeed={50} showCursor={false} className="text-5xl font-bold text-primary" initialDelay={1000} />
              </div>
              {/* CMS-edit-start::sponsors-label */}
              <p className="text-primary/80 font-medium">Industry Partners</p>
              {/* CMS-edit-end */}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-30" />
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              How We Provide Value
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            <p className="text-xl text-primary max-w-3xl mx-auto leading-relaxed">
              We are London's only student-run investment bank, being first to combine academic theory and real-world deal expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6">
              <div className="p-6 bg-primary/90 backdrop-blur-sm rounded-2xl border border-border/50">
                <div className="text-3xl font-bold text-foreground mb-4 text-center">
                  <TextType text={["Our Members", "Our Members", "Our Members"]} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Live, mentored deal experience. Build valuation models from scratch, brief founders, and graduate with desk-ready skills and standout CV lines.
                </p>
              </div>

              <div className="p-6 bg-primary/90 backdrop-blur-sm rounded-2xl border border-border/50">
                <div className="text-3xl font-bold text-foreground mb-4 text-center">
                  <TextType text={["Our Clients", "Our Clients", "Our Clients"]} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|" initialDelay={500} />
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Pro bono, data-driven M&A support that delivers investor-grade models, curated buyer lists, and student perspectives you can act on.
                </p>
              </div>

              <div className="p-6 bg-primary/90 backdrop-blur-sm rounded-2xl border border-border/50">
                <div className="text-3xl font-bold text-foreground text-center mb-4">
                  <TextType text={["Our Sponsors", "Our Sponsors", "Our Sponsors"]} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|" initialDelay={1000} />
                </div>
                <p className="text-muted-foreground text-center leading-relaxed">
                  A direct pipeline to top student talent and high-visibility branding across our reports, deal deliverables, and campus channels. Measurable impact, zero fluff.
                </p>
              </div>
            </div>

            <div className="relative order-first lg:order-last h-full">
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden border-8 border-primary/30 shadow-2xl">
                <div className="absolute inset-0 transition-opacity duration-1000" style={{
                opacity: currentImageIndex === 0 ? 1 : 0
              }}>
                  <img src="/lovable-uploads/f8b32782-b1cf-4055-99e1-bd53aa1d2528.png" alt="Student welcome fair event" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 transition-opacity duration-1000" style={{
                opacity: currentImageIndex === 1 ? 1 : 0
              }}>
                  <img src="/lovable-uploads/a9873450-f4b1-4211-827b-a69c2d130621.png" alt="Finance students group photo" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 transition-opacity duration-1000" style={{
                opacity: currentImageIndex === 2 ? 1 : 0
              }}>
                  <img src="/lovable-uploads/e5e4d4ab-877f-46f6-ab70-60420ff55429.png" alt="Students working in meeting room" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-background">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* CMS-edit-start::offerings-title */}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Sectors We Cover
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Execute real-world transactions across specialized deal groups.
            </p>
            {/* CMS-edit-end */}
          </div>

          <DynamicText />
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-12 bg-white text-accent-foreground">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            {/* CMS-edit-start::sponsors-title */}
            <h2 className="text-3xl font-heading font-bold text-background mb-4">
              Team Expertise and Experience
            </h2>
            <p className="text-base text-background">
              Our members come from leading firms in IB and Finance
            </p>
            {/* CMS-edit-end */}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {sponsors.map((sponsor, index) => <div key={index} className="flex items-center justify-center transition-all duration-200 hover:scale-105">
                <img src={sponsor.logo} alt={sponsor.name} className="h-12 w-auto object-contain transition-all duration-200" />
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CMS-edit-start::cta-section */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our community of ambitious students and start building your future in finance and consulting.
          </p>
          {/* CMS-edit-end */}
          
          <div className="flex justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZ86Rhmu8G6kW-wonOlSxF9g3R0D3ma8d-usNSDq7fyT1DnQ/viewform" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3">
                Join Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Home;