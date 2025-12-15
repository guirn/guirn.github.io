import { Linkedin, Github, GraduationCap, Mail, PenLine } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gradient mb-2">Let's Connect</h3>
            {/* <p className="text-muted-foreground text-sm">
              Open for PhD opportunities and research collaborations
            </p> */}
          </div>

          <div className="flex items-center gap-4">
            {/* <a
              href="mailto:your.email@example.com"
              className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/5"
            >
              <Mail size={18} className="text-primary" />
            </a> */}
            <a
              href="https://www.linkedin.com/in/guilhermerinaldo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/5"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-primary" />
            </a>
            <a
              href="https://github.com/guirn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/5"
              aria-label="GitHub"
            >
              <Github size={18} className="text-primary" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=MT4oKTgAAAAJ&hl=pt-BR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/5"
              aria-label="Google Scholar"
            >
              <GraduationCap size={18} className="text-primary" />
            </a>
            <a
              href="https://medium.com/@guilherme.rinaldo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/5"
              aria-label="Medium"
            >
              <PenLine size={18} className="text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved. Built with passion for AI research.
          </p>
        </div>
      </div>
    </footer>
  );
}
