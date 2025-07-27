import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { MapPin, Mail, Phone, Clock, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This would integrate with Formspree in a real implementation
      // const response = await fetch('https://formspree.io/f/your-code', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Contact - Knole Advisory">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* CMS-edit-start::contact-hero */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about membership, events, or partnerships? We'd love to hear from you. 
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* CMS-edit-start::contact-details */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@knoleadvisory.org</p>
                    <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-university-blue/10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-university-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">University College London</p>
                    <p className="text-muted-foreground">Gower Street, London WC1E 6BT</p>
                    <p className="text-sm text-muted-foreground">Student Union Building, Room 3.14</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-university-gold/10 rounded-lg flex items-center justify-center">
                    <Clock size={20} className="text-university-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 10:00 - 16:00</p>
                    <p className="text-muted-foreground">Saturday: 12:00 - 15:00</p>
                    <p className="text-sm text-muted-foreground">Closed Sundays and University holidays</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+44 20 7679 2000</p>
                    <p className="text-sm text-muted-foreground">Available during office hours</p>
                  </div>
                </div>
                {/* CMS-edit-end */}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
                
                <Button 
                  className="w-full university-btn-primary" 
                  asChild
                >
                  <a 
                    href="https://calendly.com/knole-advisory/consultation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Calendar size={20} />
                    <span>Book a Call</span>
                    <ExternalLink size={16} />
                  </a>
                </Button>

                <Button variant="outline" className="w-full" asChild>
                  <a href="/membership">Join Our Society</a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="university-card">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your.email@ucl.ac.uk"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="What is your message about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full university-btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            {/* CMS-edit-start::map-section */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Find Us on Campus
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us at the UCL Student Union Building during our office hours
            </p>
            {/* CMS-edit-end */}
          </div>

          <div className="university-card">
            <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2654!2d-0.1348!3d51.5246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2d6f8f7c4d%3A0x4c2db7c8e8a7b3c1!2sUniversity%20College%20London!5e0!3m2!1sen!2suk!4v1635123456789!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UCL Main Campus Location"
                aria-label="Map showing University College London campus location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contact */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* CMS-edit-start::team-contact-title */}
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Contact Our Team Directly
            </h2>
            <p className="text-lg text-muted-foreground">
              Need to reach a specific department? Contact our team members directly
            </p>
            {/* CMS-edit-end */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CMS-edit-start::team-contacts */}
            <div className="university-card text-center">
              <h3 className="font-semibold text-foreground mb-2">General Inquiries</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Questions about membership, events, or general information
              </p>
              <a 
                href="mailto:info@knoleadvisory.org" 
                className="text-primary hover:underline text-sm"
              >
                info@knoleadvisory.org
              </a>
            </div>

            <div className="university-card text-center">
              <h3 className="font-semibold text-foreground mb-2">Events & Workshops</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Event registration, workshop inquiries, and speaker requests
              </p>
              <a 
                href="mailto:events@knoleadvisory.org" 
                className="text-primary hover:underline text-sm"
              >
                events@knoleadvisory.org
              </a>
            </div>

            <div className="university-card text-center">
              <h3 className="font-semibold text-foreground mb-2">Partnerships</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Corporate partnerships, sponsorship opportunities, and collaborations
              </p>
              <a 
                href="mailto:partnerships@knoleadvisory.org" 
                className="text-primary hover:underline text-sm"
              >
                partnerships@knoleadvisory.org
              </a>
            </div>

            <div className="university-card text-center">
              <h3 className="font-semibold text-foreground mb-2">Committee</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Committee applications, leadership opportunities, and volunteering
              </p>
              <a 
                href="mailto:committee@knoleadvisory.org" 
                className="text-primary hover:underline text-sm"
              >
                committee@knoleadvisory.org
              </a>
            </div>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;