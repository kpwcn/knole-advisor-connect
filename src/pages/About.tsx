import Layout from '@/components/Layout/Layout';
import { Target, Users, Award, Calendar } from 'lucide-react';
import ShinyText from '@/components/ui/shiny-text';

const About = () => {
  return (
    <Layout title="About - Knole Advisory">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* CMS-edit-start::about-hero-title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About Knole Advisory
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              <ShinyText speedInMs={5000}>
                Building the next generation of investment banking leaders through education, 
                mentorship, and deal exposure.
              </ShinyText>
            </p>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 relative bg-cover bg-center" style={{backgroundImage: 'url(/lovable-uploads/89e98e58-9e6f-470f-b0e3-09baa2d72dd5.png)'}}>
        <div className="absolute inset-0 bg-green-900/90"></div>
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* CMS-edit-start::mission-statement */}
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Knole Advisory is a UCL born student-driven M&A hub, dedicated to giving students 
                  a genuine seat at the deal table. Through a highly selective process, we assemble 
                  cross-disciplinary teams from all backgrounds to deliver rigorous, statistics-led 
                  advisory to global firms on real buy-side and sell-side mandates.
                </p>
                <p>
                  We believe that every student deserves access to high-quality career guidance, 
                  skill development opportunities, and meaningful connections with industry 
                  professionals. Through our comprehensive programs, we prepare students for 
                  successful careers in investment banking and finance.
                </p>
                <p>
                  Every consultant earns a place through an exacting selection process that 
                  values curiosity, precision, and relentless drive, then receives senior-banker 
                  mentorship to ensure clients gain insights that stand up in the boardroom.
                  We welcome students from all academic disciplines who share our passion.
                </p>
              </div>
              {/* CMS-edit-end */}
            </div>
            
            <div className="university-card">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-university-blue/10 rounded-lg flex items-center justify-center">
                    <Target size={20} className="text-university-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Excellence</h3>
                    <p className="text-muted-foreground">Striving for the highest standards in everything we do</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-university-blue/10 rounded-lg flex items-center justify-center">
                    <Users size={20} className="text-university-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Inclusivity</h3>
                    <p className="text-muted-foreground">Welcoming students from all backgrounds and disciplines</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-university-gold/10 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-university-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Growth</h3>
                    <p className="text-muted-foreground">Continuous learning and professional development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* CMS-edit-start::founding-story */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg text-muted-foreground mx-auto space-y-6">
              <p>
                Knole Advisory was founded in 2024 by a group of ambitious UCL students who 
                recognized the need for better career preparation and networking opportunities 
                in the finance and consulting sectors. What started as informal study groups 
                has grown into one of UCL's most active and respected student societies.
              </p>
            </div>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>

      {/* Committee Structure */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* CMS-edit-start::committee-title */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Committee Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated committee works tirelessly to provide exceptional experiences for all members
            </p>
            {/* CMS-edit-end */}
          </div>

          <figure className="max-w-4xl mx-auto">
            <div className="university-card">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* CMS-edit-start::committee-structure */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-university-blue/10 rounded-full flex items-center justify-center mx-auto">
                    <Users size={24} className="text-university-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Executive Board</h3>
                    <p className="text-muted-foreground text-sm">President, Treasurer, COO</p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-university-blue/10 rounded-full flex items-center justify-center mx-auto">
                    <Calendar size={24} className="text-university-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Directors</h3>
                    <p className="text-muted-foreground text-sm">Sector VP</p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-university-gold/10 rounded-full flex items-center justify-center mx-auto">
                    <Target size={24} className="text-university-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Juniors</h3>
                    <p className="text-muted-foreground text-sm">Analst, Assosiate</p>
                  </div>
                </div>
                {/* CMS-edit-end */}
              </div>
            </div>
            <figcaption className="text-center mt-4 text-sm text-muted-foreground">
              Our 2025 organizational hierarchy
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* CMS-edit-start::values-section */}
            <h2 className="text-3xl font-heading font-bold mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-primary-foreground/90">
                  Embracing new ideas and creative approaches to problem-solving
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-primary-foreground/90">
                  Maintaining the highest ethical standards in all our activities
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p className="text-primary-foreground/90">
                  Making a meaningful difference in our members' careers and lives
                </p>
              </div>
            </div>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
