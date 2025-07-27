import Layout from '@/components/Layout/Layout';
import { Check, X, Star, Users, Calendar, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Membership = () => {
  const handleStripeCheckout = () => {
    // Stripe Checkout integration would go here
    console.log('Redirecting to Stripe Checkout...');
    // In a real implementation, this would redirect to Stripe
    alert('Stripe Checkout integration - Test Mode');
  };

  return (
    <Layout title="Membership - Knole Advisory">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* CMS-edit-start::membership-hero */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Join Knole Advisory
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the membership tier that best fits your career goals and 
              unlock exclusive opportunities in finance and consulting.
            </p>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Free Membership */}
            <div className="university-card relative">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                  <Users size={32} className="text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Free Membership
                </h2>
                <div className="text-3xl font-bold text-foreground mb-2">
                  £0
                  <span className="text-base font-normal text-muted-foreground">/year</span>
                </div>
                <p className="text-muted-foreground">
                  Perfect for getting started with our community
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {/* CMS-edit-start::free-features */}
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Access to public events and workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Monthly newsletter with industry insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Access to online resource library</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Community Discord server access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <X size={20} className="text-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Priority event registration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <X size={20} className="text-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">1-on-1 mentorship program</span>
                </div>
                <div className="flex items-center space-x-3">
                  <X size={20} className="text-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Exclusive networking events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <X size={20} className="text-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Resume review sessions</span>
                </div>
                {/* CMS-edit-end */}
              </div>

              <Button className="w-full university-btn-secondary" asChild>
                <a href="mailto:membership@knoleadvisory.org?subject=Free Membership Application">
                  Join for Free
                </a>
              </Button>
            </div>

            {/* Paid Membership */}
            <div className="university-card relative border-2 border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Star size={16} />
                  <span>Most Popular</span>
                </span>
              </div>

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Award size={32} className="text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Premium Membership
                </h2>
                <div className="text-3xl font-bold text-primary mb-2">
                  £25
                  <span className="text-base font-normal text-muted-foreground">/year</span>
                </div>
                <p className="text-muted-foreground">
                  Unlock your full potential with premium benefits
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {/* CMS-edit-start::premium-features */}
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground font-medium">Everything in Free Membership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Priority event registration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">1-on-1 mentorship program</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Exclusive networking events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Resume review sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Mock interview practice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Industry case study library</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Alumni network access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-foreground">Career development workshops</span>
                </div>
                {/* CMS-edit-end */}
              </div>

              <Button 
                className="w-full university-btn-primary"
                onClick={handleStripeCheckout}
                data-stripe-test="true"
              >
                Upgrade to Premium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* CMS-edit-start::benefits-title */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Why Join Knole Advisory?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our membership provides unparalleled access to industry insights, 
              professional development, and networking opportunities.
            </p>
            {/* CMS-edit-end */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target size={32} className="text-primary" />
              </div>
              {/* CMS-edit-start::benefit-career */}
              <h3 className="text-lg font-semibold text-foreground mb-2">Career Focus</h3>
              <p className="text-muted-foreground">
                Tailored guidance for finance and consulting career paths
              </p>
              {/* CMS-edit-end */}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-university-blue/10 rounded-full mb-4">
                <Users size={32} className="text-university-blue" />
              </div>
              {/* CMS-edit-start::benefit-network */}
              <h3 className="text-lg font-semibold text-foreground mb-2">Industry Network</h3>
              <p className="text-muted-foreground">
                Connect with professionals from top-tier firms and companies
              </p>
              {/* CMS-edit-end */}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-university-gold/10 rounded-full mb-4">
                <Calendar size={32} className="text-university-gold" />
              </div>
              {/* CMS-edit-start::benefit-events */}
              <h3 className="text-lg font-semibold text-foreground mb-2">Exclusive Events</h3>
              <p className="text-muted-foreground">
                Access to workshops, speaker series, and networking sessions
              </p>
              {/* CMS-edit-end */}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Award size={32} className="text-purple-600" />
              </div>
              {/* CMS-edit-start::benefit-mentorship */}
              <h3 className="text-lg font-semibold text-foreground mb-2">Mentorship</h3>
              <p className="text-muted-foreground">
                Personal guidance from experienced industry professionals
              </p>
              {/* CMS-edit-end */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* CMS-edit-start::testimonials-title */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              What Our Members Say
            </h2>
            {/* CMS-edit-end */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CMS-edit-start::testimonials */}
            <div className="university-card">
              <p className="text-muted-foreground mb-4">
                "The mentorship program was instrumental in helping me secure my summer 
                internship at Goldman Sachs. The guidance was invaluable."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">AK</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Alex Kumar</div>
                  <div className="text-sm text-muted-foreground">Economics, 3rd Year</div>
                </div>
              </div>
            </div>

            <div className="university-card">
              <p className="text-muted-foreground mb-4">
                "The networking events introduced me to professionals who became my 
                advocates during the recruiting process. Highly recommend!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-university-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-university-blue font-semibold text-sm">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sophie Mitchell</div>
                  <div className="text-sm text-muted-foreground">Business, 2nd Year</div>
                </div>
              </div>
            </div>

            <div className="university-card">
              <p className="text-muted-foreground mb-4">
                "The case study workshops prepared me perfectly for consulting interviews. 
                I landed offers from BCG and Bain!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-university-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-university-gold font-semibold text-sm">JL</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">James Liu</div>
                  <div className="text-sm text-muted-foreground">Mathematics, Final Year</div>
                </div>
              </div>
            </div>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* CMS-edit-start::faq-title */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            {/* CMS-edit-end */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CMS-edit-start::faq-items */}
            <div className="university-card">
              <h3 className="font-semibold text-foreground mb-2">
                Can I upgrade from Free to Premium membership?
              </h3>
              <p className="text-muted-foreground">
                Yes! You can upgrade at any time. Your premium benefits will activate 
                immediately upon payment.
              </p>
            </div>

            <div className="university-card">
              <h3 className="font-semibold text-foreground mb-2">
                Is membership limited to UCL students?
              </h3>
              <p className="text-muted-foreground">
                Currently, membership is open to all UCL students across all faculties 
                and year groups.
              </p>
            </div>

            <div className="university-card">
              <h3 className="font-semibold text-foreground mb-2">
                What happens after I graduate?
              </h3>
              <p className="text-muted-foreground">
                Graduates automatically become alumni members with continued access to 
                our network and select events.
              </p>
            </div>

            <div className="university-card">
              <h3 className="font-semibold text-foreground mb-2">
                Can I get a refund if I'm not satisfied?
              </h3>
              <p className="text-muted-foreground">
                We offer a 30-day money-back guarantee for premium memberships if 
                you're not completely satisfied.
              </p>
            </div>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;