import { Linkedin, Github, GraduationCap, PenLine } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-mono text-sm mb-4 opacity-0 animate-fade-up">
              Staff AI Engineer and Researcher
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight opacity-0 animate-fade-up stagger-1">
              Transforming Ideas into{" "}
              <span className="text-gradient">Intelligent Solutions</span>
            </h1>
            <p className="text-foreground text-lg md:text-xl mb-8 leading-relaxed opacity-0 animate-fade-up stagger-2">
              Researcher passionate about machine learning and deep learning, with a focus on Generative AI and AI agents that turn cutting edge research into reliable real world systems. I build and evaluate models that help people and organizations create, reason, and act more effectively.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-3">
              <a
                href="https://www.linkedin.com/in/guilhermerinaldo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-card border border-border hover:border-primary/50 rounded-lg transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/5 group"
              >
                <Linkedin size={20} className="text-primary" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/guirn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-card border border-border hover:border-primary/50 rounded-lg transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/5 group"
              >
                <Github size={20} className="text-primary" />
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="https://scholar.google.com/citations?user=MT4oKTgAAAAJ&hl=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-card border border-border hover:border-primary/50 rounded-lg transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/5 group"
              >
                <GraduationCap size={20} className="text-primary" />
                <span className="text-sm font-medium">Scholar</span>
              </a>

              <a
                href="https://medium.com/@guilherme.rinaldo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-card border border-border hover:border-primary/50 rounded-lg transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/5 group"
              >
                <PenLine size={20} className="text-primary" />
                <span className="text-sm font-medium">Medium</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative opacity-0 animate-fade-up stagger-2">
              <div className="absolute inset-0 accent-gradient rounded-full blur-2xl opacity-30" />
              {/* <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10"> */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10">
  
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <img
                    src="/profile_picture.jpg"
                    alt="Guilherme Rinaldo"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center calc(50% + 5px)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
