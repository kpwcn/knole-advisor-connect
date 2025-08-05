import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/text-type";

const Apply = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <div className="bg-background text-foreground py-20">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Apply To Be A Member</h1>
          </div>
        </div>

        {/* Application Section */}
        <div className="bg-white text-primary py-20">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              2025 Analyst Applications Now{" "}
              <div className="inline-block">
                <TextType
                  text="OPEN"
                  speed={150}
                  loop={false}
                  className="text-4xl md:text-5xl font-bold text-primary"
                />
              </div>
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive community of ambitious students passionate about finance and consulting. 
              Gain access to exclusive events, networking opportunities, and career development resources 
              that will accelerate your journey to top-tier firms.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdZ86Rhmu8G6kW-wonOlSxF9g3R0D3ma8d-usNSDq7fyT1DnQ/viewform?usp=header', '_blank')}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Apply;