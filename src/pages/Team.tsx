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
  const teamMembers: TeamMember[] = [{
    name: "Evan Kok",
    position: "President",
    bio: "UCL Mathematics",
    linkedin: "https://www.linkedin.com/in/evan-kok-7465152b8/",
    email: "president@knoleadvisory.org",
    image: "/lovable-uploads/evan.JPG"
  }, {
    name: "Kevin Puzhou Wang",
    position: "Co-President",
    bio: "UCL ManSci",
    linkedin: "https://www.linkedin.com/in/kpwcn/",
    email: "co-president@knoleadvisory.org",
    image: "/lovable-uploads/Kev.jpg"
  }, {
    name: "Hao Ping Yau",
    position: "Chairman",
    bio: "LSE Finance",
    linkedin: "https://www.linkedin.com/in/hao-ping-yau-9a391016a/",
    email: "chair@knoleadvisory.org",
    image: "/lovable-uploads/haoping.jpg"
  }];
  // CMS-edit-end

  return <Layout 
    title="Meet Our Team - Knole Advisory Leadership"
    description="Meet the executive committee and leadership team at Knole Advisory. Connect with experienced UCL students passionate about investment banking and finance."
    canonical="https://www.knole.org.uk/team"
  >
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* CMS-edit-start::team-hero */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Meet Our Committee
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dedicated student team committed to creating unique opportunities for 
              investement banking development.
            </p>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
            {teamMembers.map((member, index) => <div key={index} className="university-card text-center group focus-within:ring-2 focus-within:ring-ring flex flex-col h-full" tabIndex={0} aria-label={`Team member: ${member.name}, ${member.position}`}>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {member.name}
                </h3>
                
                <div className="flex-1 mb-4">
                  <img src={member.image} alt={`${member.name} - ${member.position}`} className="w-full aspect-square rounded-lg object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-smooth" loading="lazy" />
                </div>
                
                <div className="mt-auto space-y-2">
                  <p className="text-foreground font-medium text-sm">
                    {member.position}
                  </p>
                  
                  <p className="text-muted-foreground text-xs leading-tight">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-2 pt-2">
                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-7 h-7 bg-university-blue/10 text-university-blue rounded-full hover:bg-university-blue hover:text-white transition-smooth focus-visible:focus" aria-label={`${member.name}'s LinkedIn profile`}>
                        <Linkedin size={14} />
                      </a>}
                    {member.email && <a href={`mailto:${member.email}`} className="inline-flex items-center justify-center w-7 h-7 bg-university-blue/10 text-university-blue rounded-full hover:bg-university-blue hover:text-white transition-smooth focus-visible:focus" aria-label={`Email ${member.name}`}>
                        <Mail size={14} />
                      </a>}
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* University Coverage */}
      <section className="py-12 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Member Universities</h2>
            <p className="text-sm text-primary">Our analyst class are Undergraduate, Masters, and PhD students from the UK's best universities</p>
          </div>
          
          <div className="flex justify-center">
            <div className="overflow-hidden bg-white p-4 rounded-lg w-full max-w-4xl">
              <div className="infinite-scroll flex">
                {/* First set of logos */}
                <div className="flex space-x-4 flex-shrink-0">
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/3e6c63c3-5868-4fd8-9dec-0d19134067f5.png" alt="UCL" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/22935965-1fdb-4cf8-925d-b86a8e97c98e.png" alt="LSE" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/e881c7ab-7f60-46d0-89e5-9445ce3f47c3.png" alt="Imperial College London" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/035bcf27-a4d6-4870-bb5a-96d74af83756.png" alt="Oxford University" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/c14fbff3-5e1e-4985-a9f4-1d267163a6bc.png" alt="Cambridge University" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/55f8c9df-9cc3-4e12-bfb9-8322fed734c2.png" alt="Warwick University" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/0dde37cb-2f8e-403c-81a9-f677c5e5facc.png" alt="King's College London" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/17143560-3f2b-466c-a215-c408721b107b.png" alt="London Business School" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/8f2f59d6-b7e0-4992-a1cc-62a9242df009.png" alt="University of Bath" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex space-x-4 flex-shrink-0">
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/3e6c63c3-5868-4fd8-9dec-0d19134067f5.png" alt="UCL" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/22935965-1fdb-4cf8-925d-b86a8e97c98e.png" alt="LSE" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/e881c7ab-7f60-46d0-89e5-9445ce3f47c3.png" alt="Imperial College London" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/035bcf27-a4d6-4870-bb5a-96d74af83756.png" alt="Oxford University" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/c14fbff3-5e1e-4985-a9f4-1d267163a6bc.png" alt="Cambridge University" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/55f8c9df-9cc3-4e12-bfb9-8322fed734c2.png" alt="Warwick University" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/0dde37cb-2f8e-403c-81a9-f677c5e5facc.png" alt="King's College London" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/17143560-3f2b-466c-a215-c408721b107b.png" alt="London Business School" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <img src="/lovable-uploads/8f2f59d6-b7e0-4992-a1cc-62a9242df009.png" alt="University of Bath" className="h-16 w-16 object-contain hover:scale-110 transition-smooth" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Committee CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CMS-edit-start::join-committee-cta */}
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Interested in Joining Our Analyst Class?
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students to help shape the future of 
            Knole Advisory. Analyst applications open at the start of each academic year.
          </p>
          {/* CMS-edit-end */}
          
          <div className="flex justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZ86Rhmu8G6kW-wonOlSxF9g3R0D3ma8d-usNSDq7fyT1DnQ/viewform" target="_blank" rel="noopener noreferrer" className="bg-white text-primary border border-university-green/20 hover:bg-university-green/5 transition-smooth px-8 py-3 rounded-lg font-semibold">
              Apply
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you are interested in working with us on a project, please send us a email we will be in touch to discuss more details. 
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="bg-white text-primary border border-university-green/20 hover:bg-university-green/5 transition-smooth px-8 py-3 rounded-lg font-semibold">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Team;