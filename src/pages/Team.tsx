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
      name: "Sarah Johnson",
      position: "President",
      bio: "Final year Economics student with internship experience at Goldman Sachs",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      email: "president@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1494790108755-2616b6c31e8b?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Vice President",
      bio: "Mathematics and Finance student, former McKinsey intern",
      linkedin: "https://linkedin.com/in/michael-chen",
      email: "vp@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Williams",
      position: "Treasurer",
      bio: "Business Administration student with expertise in financial planning",
      linkedin: "https://linkedin.com/in/emma-williams",
      email: "treasurer@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Rodriguez",
      position: "Secretary",
      bio: "Political Economy student passionate about strategic consulting",
      linkedin: "https://linkedin.com/in/david-rodriguez",
      email: "secretary@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Aisha Patel",
      position: "Events Director",
      bio: "Management student specializing in event planning and corporate relations",
      linkedin: "https://linkedin.com/in/aisha-patel",
      email: "events@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Thompson",
      position: "Marketing Director",
      bio: "Digital Marketing and Communications student with social media expertise",
      linkedin: "https://linkedin.com/in/james-thompson",
      email: "marketing@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Zhang",
      position: "Partnerships Manager",
      bio: "International Business student focused on corporate partnerships",
      linkedin: "https://linkedin.com/in/lisa-zhang",
      email: "partnerships@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Thomas Anderson",
      position: "Workshop Coordinator",
      bio: "Finance student with experience in financial modeling and analysis",
      linkedin: "https://linkedin.com/in/thomas-anderson",
      email: "workshops@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sophie Brown",
      position: "Alumni Relations",
      bio: "Psychology and Business student managing alumni networking programs",
      linkedin: "https://linkedin.com/in/sophie-brown",
      email: "alumni@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Johnson",
      position: "Technology Officer",
      bio: "Computer Science and Economics student developing digital solutions",
      linkedin: "https://linkedin.com/in/marcus-johnson",
      email: "tech@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Olivia Davis",
      position: "Mentorship Coordinator",
      bio: "Psychology student passionate about career development and mentoring",
      linkedin: "https://linkedin.com/in/olivia-davis",
      email: "mentorship@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ryan Kumar",
      position: "Social Media Manager",
      bio: "Media and Communications student managing our digital presence",
      linkedin: "https://linkedin.com/in/ryan-kumar",
      email: "social@knoleadvisory.org",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
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
              finance and consulting career development.
            </p>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
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
                
                <p className="text-primary font-medium mb-3">
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
                      className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth focus-visible:focus"
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:committee@knoleadvisory.org"
              className="university-btn-primary"
            >
              Express Interest
            </a>
            <a 
              href="/contact"
              className="university-btn-secondary"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;