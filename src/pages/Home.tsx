import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Briefcase, TrendingUp, Award, Target } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';

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

const Home = () => {
  const [stats, setStats] = useState<Stats>({ members: 0, eventsPerYear: 0, sponsors: 0 });
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    // Simulate fetching data from JSON files
    const fetchData = () => {
      // Mock stats data
      setStats({
        members: 250,
        eventsPerYear: 24,
        sponsors: 12
      });

      // Mock sponsors data
      setSponsors([
        { name: 'Goldman Sachs', logo: '/placeholder-logo.svg', tier: 'gold' },
        { name: 'JP Morgan', logo: '/placeholder-logo.svg', tier: 'gold' },
        { name: 'McKinsey & Company', logo: '/placeholder-logo.svg', tier: 'gold' },
        { name: 'BCG', logo: '/placeholder-logo.svg', tier: 'silver' },
        { name: 'Bain & Company', logo: '/placeholder-logo.svg', tier: 'silver' },
        { name: 'Deloitte', logo: '/placeholder-logo.svg', tier: 'silver' }
      ]);
    };

    fetchData();
  }, []);

  return (
    <Layout title="Knole Advisory - Student Finance & Consulting Society">
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 lg:py-28 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/public/videos/london.mp4" type="video/mp4" />
          <source src="/videos/london.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-university" />
        </video>
        
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-primary/30 z-10" />
        
        <div className="relative z-20 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* CMS-edit-start::hero-title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Knole Advisory – Student Finance & Consulting Society
            </h1>
            {/* CMS-edit-end */}
            
            {/* CMS-edit-start::hero-subtitle */}
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Empowering the next generation of finance and consulting professionals through 
              education, networking, and real-world experience.
            </p>
            {/* CMS-edit-end */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership">
                <Button 
                  id="join-cta"
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg font-semibold"
                >
                  Join Our Society
                </Button>
              </Link>
              <Link to="/events">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg font-semibold"
                >
                  View Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center university-card">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2" id="members-stat">
                {stats.members}+
              </div>
              {/* CMS-edit-start::members-label */}
              <p className="text-muted-foreground font-medium">Active Members</p>
              {/* CMS-edit-end */}
            </div>

            <div className="text-center university-card">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-university-blue/10 rounded-full mb-4">
                <Calendar size={32} className="text-university-blue" />
              </div>
              <div className="text-3xl font-bold text-university-blue mb-2" id="events-stat">
                {stats.eventsPerYear}+
              </div>
              {/* CMS-edit-start::events-label */}
              <p className="text-muted-foreground font-medium">Events Per Year</p>
              {/* CMS-edit-end */}
            </div>

            <div className="text-center university-card">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-university-gold/10 rounded-full mb-4">
                <Briefcase size={32} className="text-university-gold" />
              </div>
              <div className="text-3xl font-bold text-university-gold mb-2" id="sponsors-stat">
                {stats.sponsors}+
              </div>
              {/* CMS-edit-start::sponsors-label */}
              <p className="text-muted-foreground font-medium">Industry Partners</p>
              {/* CMS-edit-end */}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* CMS-edit-start::offerings-title */}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your finance and consulting career journey
            </p>
            {/* CMS-edit-end */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="university-card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <TrendingUp size={24} className="text-primary" />
              </div>
              {/* CMS-edit-start::skill-development */}
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-muted-foreground">
                Expert-led workshops on financial modeling, case studies, and consulting frameworks
              </p>
              {/* CMS-edit-end */}
            </div>

            <div className="university-card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-university-blue/10 rounded-lg mb-4">
                <Users size={24} className="text-university-blue" />
              </div>
              {/* CMS-edit-start::networking */}
              <h3 className="text-xl font-semibold mb-3">Networking</h3>
              <p className="text-muted-foreground">
                Connect with industry professionals, alumni, and like-minded peers
              </p>
              {/* CMS-edit-end */}
            </div>

            <div className="university-card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-university-gold/10 rounded-lg mb-4">
                <Award size={24} className="text-university-gold" />
              </div>
              {/* CMS-edit-start::mentorship */}
              <h3 className="text-xl font-semibold mb-3">Mentorship</h3>
              <p className="text-muted-foreground">
                One-on-one guidance from experienced professionals in your field of interest
              </p>
              {/* CMS-edit-end */}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* CMS-edit-start::sponsors-title */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading firms in finance and consulting
            </p>
            {/* CMS-edit-end */}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-medium transition-smooth"
              >
                <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground text-center">
                    {sponsor.name.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/partners">
              <Button variant="outline" className="px-6">
                View All Partners
              </Button>
            </Link>
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership">
              <Button 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3"
              >
                Become a Member
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
