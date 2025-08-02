import Layout from '@/components/Layout/Layout';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  linkedin?: string;
  email?: string;
  image: string;
}

const Team = () => {
  // CMS-edit-start::team-members
  const teamMembers: TeamMember[] = [
    {
      name: "Evan Kok",
      position: "President",
      bio: "UCL Mathematics",
      linkedin: "https://www.linkedin.com/in/evan-kok-7465152b8/",
      email: "president@knoleadvisory.org",
      image: "/lovable-uploads/evan.JPG"
    },
    {
      name: "Kevin Puzhou Wang",
      position: "Co-President",
      bio: "UCL ManSci",
      linkedin: "https://www.linkedin.com/in/kpwcn/",
      email: "co-president@knoleadvisory.org",
      image: "/lovable-uploads/Kev.jpg"
    },
    {
      name: "Hao Ping Yau",
      position: "Chairman",
      bio: "LSE Finance",
      linkedin: "https://www.linkedin.com/in/hao-ping-yau-9a391016a/",
      email: "chair@knoleadvisory.org",
      image: "/lovable-uploads/haoping.jpg"
    },
    {
      name: "Vincent Pang",
      position: "Events & Outreach Director",
      bio: "UCL Sustainable Built Environments, Energy and Resources",
      linkedin: "https://linkedin.com/in/",
      email: "events@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];
  // CMS-edit-end

  return (
    <Layout title="Committee - Knole Advisory">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* CMS-edit-start::team-hero */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Meet Our Committee
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dedicated students committed to creating exceptional opportunities for 
              investement banking development.
            </p>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="university-card text-center group focus-within:ring-2 focus-within:ring-ring"
                tabIndex={0}
                aria-label={`Team member: ${member.name}, ${member.position}`}
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-smooth"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                
                <p className="text-foreground font-medium mb-3">
                  {member.position}
                </p>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 bg-university-blue/10 text-university-blue rounded-full hover:bg-university-blue hover:text-white transition-smooth focus-visible:focus"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center justify-center w-8 h-8 bg-university-blue/10 text-university-blue rounded-full hover:bg-university-blue hover:text-white transition-smooth focus-visible:focus"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Committee CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CMS-edit-start::join-committee-cta */}
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Interested in Joining Our Committee?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students to help shape the future of 
            Knole Advisory. Committee applications open at the start of each academic year.
          </p>
          {/* CMS-edit-end */}
          
          <div className="flex justify-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZ86Rhmu8G6kW-wonOlSxF9g3R0D3ma8d-usNSDq7fyT1DnQ/viewform?usp=header"
              className="university-btn-primary"
            >
              Express Interest
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay updated with committee opportunities and exclusive insights about investment banking careers.
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:info@knoleadvisory.org?subject=Mailing List Subscription"
                className="university-btn-primary"
              >
                Join Our Mailing List
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
