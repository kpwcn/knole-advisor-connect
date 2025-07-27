import Layout from '@/components/Layout/Layout';
import { Download, ExternalLink, Building, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Partner {
  name: string;
  logo: string;
  tier: 'gold' | 'silver';
  description: string;
  website?: string;
  partnership: string;
}

const Partners = () => {
  // CMS-edit-start::partners-data
  const goldPartners: Partner[] = [
    {
      name: 'Goldman Sachs',
      logo: '/placeholder-logo.svg',
      tier: 'gold',
      description: 'Leading global investment banking, securities and investment management firm.',
      website: 'https://goldmansachs.com',
      partnership: 'Exclusive workshops, summer internship opportunities, and mentorship programs'
    },
    {
      name: 'McKinsey & Company',
      logo: '/placeholder-logo.svg',
      tier: 'gold',
      description: 'Global management consulting firm serving leading businesses, governments, and institutions.',
      website: 'https://mckinsey.com',
      partnership: 'Case study competitions, consulting workshops, and recruitment events'
    },
    {
      name: 'JP Morgan Chase',
      logo: '/placeholder-logo.svg',
      tier: 'gold',
      description: 'Multinational investment bank and financial services holding company.',
      website: 'https://jpmorgan.com',
      partnership: 'Trading simulations, investment banking workshops, and networking sessions'
    },
    {
      name: 'Boston Consulting Group',
      logo: '/placeholder-logo.svg',
      tier: 'gold',
      description: 'Global management consulting firm with a focus on strategy and digital transformation.',
      website: 'https://bcg.com',
      partnership: 'Strategy workshops, digital consulting training, and case competitions'
    }
  ];

  const silverPartners: Partner[] = [
    {
      name: 'Bain & Company',
      logo: '/placeholder-logo.svg',
      tier: 'silver',
      description: 'Management consulting company helping organizations tackle their most critical challenges.',
      website: 'https://bain.com',
      partnership: 'Guest speaker sessions and recruitment presentations'
    },
    {
      name: 'Deloitte',
      logo: '/placeholder-logo.svg',
      tier: 'silver',
      description: 'Multinational professional services network providing audit, consulting, and advisory services.',
      website: 'https://deloitte.com',
      partnership: 'Technology consulting workshops and career guidance sessions'
    },
    {
      name: 'Morgan Stanley',
      logo: '/placeholder-logo.svg',
      tier: 'silver',
      description: 'American multinational investment bank and financial services company.',
      website: 'https://morganstanley.com',
      partnership: 'Wealth management seminars and investment research training'
    },
    {
      name: 'EY (Ernst & Young)',
      logo: '/placeholder-logo.svg',
      tier: 'silver',
      description: 'Global professional services firm providing assurance, tax, consulting and advisory services.',
      website: 'https://ey.com',
      partnership: 'Audit and advisory workshops, networking events'
    },
    {
      name: 'KPMG',
      logo: '/placeholder-logo.svg',
      tier: 'silver',
      description: 'Professional services company and one of the Big Four accounting organizations.',
      website: 'https://kpmg.com',
      partnership: 'Financial advisory sessions and tax consulting workshops'
    },
    {
      name: 'Accenture',
      logo: '/placeholder-logo.svg',
      tier: 'silver',
      description: 'Global professional services company specializing in IT services and consulting.',
      website: 'https://accenture.com',
      partnership: 'Digital transformation workshops and technology consulting training'
    }
  ];
  // CMS-edit-end

  const PartnerCard = ({ partner }: { partner: Partner }) => (
    <div className="university-card group">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center border">
              <span className="text-xs font-medium text-muted-foreground text-center px-1">
                {partner.name.split(' ')[0]}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                {partner.name}
              </h3>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                partner.tier === 'gold' 
                  ? 'bg-university-gold/10 text-university-gold' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <Trophy size={12} className="mr-1" />
                {partner.tier === 'gold' ? 'Gold Partner' : 'Silver Partner'}
              </span>
            </div>
          </div>
          {partner.website && (
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label={`Visit ${partner.name} website`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>

        <p className="text-muted-foreground mb-4 flex-1">
          {partner.description}
        </p>

        <div className="border-t border-border pt-4">
          <h4 className="font-medium text-foreground mb-2">Partnership Benefits:</h4>
          <p className="text-sm text-muted-foreground">
            {partner.partnership}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Layout title="Partners - Knole Advisory">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* CMS-edit-start::partners-hero */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We collaborate with leading firms in finance and consulting to provide 
              our members with unparalleled access to industry insights and opportunities.
            </p>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center university-card">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-university-gold/10 rounded-full mb-4">
                <Trophy size={32} className="text-university-gold" />
              </div>
              {/* CMS-edit-start::partnership-stats */}
              <div className="text-3xl font-bold text-university-gold mb-2">15+</div>
              <p className="text-muted-foreground font-medium">Industry Partners</p>
            </div>

            <div className="text-center university-card">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Building size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">£50K+</div>
              <p className="text-muted-foreground font-medium">Annual Partnership Value</p>
            </div>

            <div className="text-center university-card">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-university-blue/10 rounded-full mb-4">
                <Users size={32} className="text-university-blue" />
              </div>
              <div className="text-3xl font-bold text-university-blue mb-2">200+</div>
              <p className="text-muted-foreground font-medium">Students Placed</p>
              {/* CMS-edit-end */}
            </div>
          </div>
        </div>
      </section>

      {/* Gold Partners */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* CMS-edit-start::gold-partners-title */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Gold Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our premium partners provide comprehensive support including workshops, 
              mentorship programs, and exclusive recruitment opportunities.
            </p>
            {/* CMS-edit-end */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goldPartners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Silver Partners */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* CMS-edit-start::silver-partners-title */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Silver Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic partnerships providing valuable networking opportunities, 
              guest speaker sessions, and industry insights.
            </p>
            {/* CMS-edit-end */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {silverPartners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Prospectus */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="university-card max-w-4xl mx-auto text-center">
            {/* CMS-edit-start::prospectus-section */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Become a Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our network of industry-leading partners and help shape the next generation 
              of finance and consulting professionals. Download our partnership prospectus to 
              learn about collaboration opportunities.
            </p>
            {/* CMS-edit-end */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 mx-auto">
                  <Users size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Talent Access</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with top UCL students across all disciplines
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-university-blue/10 rounded-lg mb-3 mx-auto">
                  <Building size={24} className="text-university-blue" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Brand Exposure</h3>
                <p className="text-sm text-muted-foreground">
                  Increase visibility among ambitious future professionals
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-university-gold/10 rounded-lg mb-3 mx-auto">
                  <Trophy size={24} className="text-university-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Industry Leadership</h3>
                <p className="text-sm text-muted-foreground">
                  Position your firm as an industry thought leader
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="university-btn-primary" asChild>
                <a 
                  href="/prospectus.pdf" 
                  download
                  className="flex items-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download Prospectus</span>
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="mailto:partnerships@knoleadvisory.org?subject=Partnership Inquiry">
                  Contact Partnership Team
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* CMS-edit-start::success-stories */}
            <h2 className="text-3xl font-heading font-bold mb-8">
              Partnership Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <blockquote className="text-lg text-primary-foreground/90 mb-4">
                  "Our partnership with Knole Advisory has been instrumental in identifying 
                  and recruiting top talent from UCL. The quality of candidates continues 
                  to exceed our expectations."
                </blockquote>
                <div className="text-primary-foreground/80">
                  — Sarah Henderson, Campus Recruiting Lead, Goldman Sachs
                </div>
              </div>
              
              <div className="text-left">
                <blockquote className="text-lg text-primary-foreground/90 mb-4">
                  "The students we've met through Knole Advisory demonstrate exceptional 
                  analytical skills and professional maturity. We're proud to support 
                  their development."
                </blockquote>
                <div className="text-primary-foreground/80">
                  — Michael Thompson, Partner, McKinsey & Company
                </div>
              </div>
            </div>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;