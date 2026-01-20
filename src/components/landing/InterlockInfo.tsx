import { Zap, ShieldAlert, Power, Home, Settings, Plug } from "lucide-react";

const infoData = [
  {
    icon: Zap,
    title: "How It Works",
    description: "An interlock is a sliding metal plate that allows your generator breaker to be ON only when the main utility breaker is OFF, ensuring safety.",
  },
  {
    icon: ShieldAlert,
    title: "Why You Need It",
    description: "Without an interlock, electricity can feed back into the grid, endangering utility workers trying to restore power. It's unsafe and illegal.",
  },
  {
    icon: Power,
    title: "Power Flexibility",
    description: "Unlike a transfer switch with pre-selected circuits, an interlock energizes your whole panel. You manually choose which lights or appliances to run.",
  },
];

const benefitsData = [
  "Safe, legal, and code-compliant",
  "Works with most portable generators",
  "Standard 30A or 50A inlet options",
  "Costs much less than standby generators",
  "Powers HVAC, fridge, lights, and internet",
  "Increases home resale value",
];

const InterlockInfo = () => {
  return (
    <section id="interlock-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Safe. Simple. Secure.
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            The Smart Way to Connect Portable Power
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Stop running dangerous extension cords through rain-soaked windows.
            Our interlock system gives you a single, weatherproof point of connection
            for your generator, powering your entire home safely.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {infoData.map((info, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <info.icon className="w-7 h-7 text-copper" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {info.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Our Installation Package
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We provide a turnkey service: supplying the correct interlock kit for your panel brand (Eaton, Square D, Siemens, etc.),
              installing a dedicated breaker, running wire to a convenient exterior location,
              and mounting a weatherproof L14-30 or 14-50 inlet box.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We also include a generator power cord tutorial, showing you exactly how to
              start up and switch over safely during a blackout.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Why Homeowners Switch
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Home className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
            <Plug className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Get prepared before the next storm. Call (844) 901-2684.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterlockInfo;
