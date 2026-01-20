import { Lock, PlugZap, CircuitBoard, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lock,
    title: "Interlock Kit Install",
    description: "We install custom-fit metal interlock plates on your breaker panel that mechanically prevent the main utility and generator breakers from being on simultaneously.",
    features: ["Safe switching", "Code required", "Panel specific"],
  },
  {
    icon: PlugZap,
    title: "Inlet Box Wiring",
    description: "Installation of a 30A or 50A exterior power inlet box, allowing you to plug your portable generator in safely outside while powering your panel inside.",
    features: ["Weatherproof box", "Heavy gauge wire", "L14-30 / 14-50R"],
  },
  {
    icon: CircuitBoard,
    title: "load Management",
    description: "We label your panel and educate you on how to manage your electrical load, ensuring you can run essentials without overloading your generator.",
    features: ["Panel labeling", "Usage training", "Amperage check"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Smart Power Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Marietta's Generator Pros
          </h2>
          <p className="text-muted-foreground text-lg">
            Forget running dangerous extension cords through windows. We provide a
            permanent, professional connection for your portable generator that puts
            you in control during the next storm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-copper" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="group/btn text-copper hover:text-copper p-0">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
