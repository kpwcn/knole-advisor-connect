import { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Calendar, Clock, MapPin, Users, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Event {
  id: string;
  date: string;
  title: string;
  summary: string;
  location: string;
  time: string;
  capacity?: number;
  type: 'workshop' | 'networking' | 'speaker' | 'social';
  registrationLink?: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching from events-data.json
    const fetchEvents = () => {
      // Mock events data
      const mockEvents: Event[] = [
        {
          id: '1',
          date: '2024-02-15',
          title: 'Financial Modeling Workshop',
          summary: 'Learn advanced Excel techniques and financial modeling best practices used in investment banking and consulting.',
          location: 'UCL Main Library, Room 102',
          time: '18:00',
          capacity: 50,
          type: 'workshop',
          registrationLink: 'https://example.com/register'
        },
        {
          id: '2',
          date: '2024-02-22',
          title: 'McKinsey Alumni Networking',
          summary: 'Meet and network with McKinsey alumni working across different practice areas and offices.',
          location: 'UCL Student Union, Gordon Square',
          time: '19:00',
          capacity: 80,
          type: 'networking',
          registrationLink: 'https://example.com/register'
        },
        {
          id: '3',
          date: '2024-03-01',
          title: 'Guest Speaker: Investment Banking 101',
          summary: 'JP Morgan MD shares insights on breaking into investment banking and career progression.',
          location: 'Roberts Building, Lecture Theatre G08',
          time: '17:30',
          capacity: 120,
          type: 'speaker',
          registrationLink: 'https://example.com/register'
        },
        {
          id: '4',
          date: '2024-03-08',
          title: 'Case Study Competition',
          summary: 'Teams compete to solve real consulting cases with prizes from our industry partners.',
          location: 'UCL East, Pool Street West',
          time: '10:00',
          capacity: 60,
          type: 'workshop',
          registrationLink: 'https://example.com/register'
        },
        {
          id: '5',
          date: '2024-03-15',
          title: 'Spring Social & Awards Ceremony',
          summary: 'Celebrate the year\'s achievements with food, drinks, and networking in a relaxed atmosphere.',
          location: 'UCL Student Union Bar',
          time: '20:00',
          capacity: 100,
          type: 'social',
          registrationLink: 'https://example.com/register'
        },
        {
          id: '6',
          date: '2024-03-22',
          title: 'Private Equity Workshop',
          summary: 'Deep dive into PE deal analysis, valuation methods, and career pathways in private equity.',
          location: 'UCL Main Library, Room 102',
          time: '18:00',
          capacity: 40,
          type: 'workshop',
          registrationLink: 'https://example.com/register'
        }
      ];

      setEvents(mockEvents);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  const generateICalLink = (event: Event) => {
    const startDate = new Date(`${event.date}T${event.time}`);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Knole Advisory//Event//EN
BEGIN:VEVENT
UID:${event.id}@knoleadvisory.org
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.summary}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icalContent], { type: 'text/calendar' });
    return URL.createObjectURL(blob);
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'text-primary bg-primary/10';
      case 'networking': return 'text-university-blue bg-university-blue/10';
      case 'speaker': return 'text-university-gold bg-university-gold/10';
      case 'social': return 'text-purple-600 bg-purple-100';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Layout title="Events - Knole Advisory">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading events...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Events - Knole Advisory">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* CMS-edit-start::events-hero */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join us for workshops, networking sessions, and speaker events designed 
              to accelerate your finance and consulting career.
            </p>
            {/* CMS-edit-end */}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {events.map((event) => (
              <article key={event.id} className="university-card group">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getEventTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                          <time className="text-sm text-muted-foreground">
                            {formatDate(event.date)}
                          </time>
                        </div>
                        
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                          {event.title}
                        </h2>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {event.summary}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-muted-foreground flex-shrink-0" />
                        <span className="text-muted-foreground">{event.time}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-muted-foreground flex-shrink-0" />
                        <span className="text-muted-foreground">{event.location}</span>
                      </div>
                      
                      {event.capacity && (
                        <div className="flex items-center space-x-2">
                          <Users size={16} className="text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">Max {event.capacity} attendees</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[200px]">
                    {event.registrationLink && (
                      <Button className="university-btn-primary" asChild>
                        <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                          Register Now
                        </a>
                      </Button>
                    )}
                    
                    <Button variant="outline" asChild>
                      <a 
                        href={generateICalLink(event)}
                        download={`${event.title.replace(/\s+/g, '-').toLowerCase()}.ics`}
                        className="flex items-center space-x-2"
                      >
                        <Download size={16} />
                        <span>Add to Calendar</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events & Newsletter CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {/* CMS-edit-start::past-events */}
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Recent Events
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground">Goldman Sachs Case Competition</h3>
                  <p className="text-muted-foreground text-sm">January 2024 • 80 participants</p>
                </div>
                <div className="border-l-4 border-university-blue pl-4">
                  <h3 className="font-semibold text-foreground">BCG Consulting Workshop</h3>
                  <p className="text-muted-foreground text-sm">December 2023 • 65 participants</p>
                </div>
                <div className="border-l-4 border-university-gold pl-4">
                  <h3 className="font-semibold text-foreground">Winter Networking Gala</h3>
                  <p className="text-muted-foreground text-sm">December 2023 • 120 participants</p>
                </div>
              </div>
              {/* CMS-edit-end */}
            </div>

            <div className="university-card">
              {/* CMS-edit-start::events-newsletter */}
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Never Miss an Event
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive early notifications about upcoming 
                events, exclusive member-only sessions, and career opportunities.
              </p>
              {/* CMS-edit-end */}
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="university-btn-primary flex-1" asChild>
                  <a href="#newsletter-form">Subscribe to Newsletter</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/membership">Become a Member</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;