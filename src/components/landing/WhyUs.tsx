import { ShieldCheck, CircleDollarSign, Zap, FileCode, ThumbsUp, Timer } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% Safe",
    description: "Interlocks physically prevent dangerous back-feeding of electricity onto utility lines, protecting line workers and your home from fires.",
  },
  {
    icon: CircleDollarSign,
    title: "Cost Effective",
    description: "An interlock kit costs a fraction of a whole-house transfer switch or standby generator installation, delivering similar functionality.",
  },
  {
    icon: Zap,
    title: "Power Everything",
    description: "Unlike transfer switches with limited circuits, an interlock lets you choose ANY circuit in your panel to power, up to your generator's limit.",
  },
  {
    icon: FileCode,
    title: "Code Compliant",
    description: "Our installations meet all National Electrical Code (NEC) requirements and are accepted by local Marietta and Cobb County inspectors.",
  },
  {
    icon: ThumbsUp,
    title: "Easy Operation",
    description: "We provide clear labeling and a simple tutorial, making the switch from utility to generator power a stress-free process.",
  },
  {
    icon: Timer,
    title: "Fast Install",
    description: "Most installations are completed in under 4 hours, meaning we can get you prepared for the next storm often in a single visit.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Choose Us?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Marietta's Choice for
              <span className="text-gradient-copper block">Reliable Backup Power</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Don't get left in the dark. We are Marietta's specialists in portable
              generator connections, providing a safe, legal, and affordable way
              to keep your lights on when the grid goes down.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1k+</span>
                <span className="text-sm text-muted-foreground">Kits Installed</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">100%</span>
                <span className="text-sm text-muted-foreground">Code Safe</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5★</span>
                <span className="text-sm text-muted-foreground">Local Rating</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-copper/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
