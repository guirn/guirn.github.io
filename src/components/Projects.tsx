import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  // {
  //   title: "Ensemble Based Biometric Verification for Deepfake Resistance",
  //   description:
  //     "Research and engineering effort that resulted in the 2025 paper published in Computers (MDPI). The work was carried out in collaboration with researchers from MIT and explored ensemble strategies to defend against multiple attack vectors in biometric scenarios, connecting academic methods with deployment oriented requirements.",
  //   tags: ["Python"],
  //   // github: "https://github.com",
  //   demo: "https://www.mdpi.com/2073-431X/14/6/225",
  //   featured: false,
  // },
  // {
  //   title: "ASV CM Score Fusion for Robust Speaker Verification",
  //   description:
  //     "Applied research on speaker verification in spoofed environments. The study proposes fusion of automatic speaker verification and countermeasure scores to improve robustness in realistic conditions. The work was accepted and presented at BRACIS 2025 and will appear in the proceedings. This project was also awarded 2nd place in the Innovative Project category of the IEL Talent Award",
  //   tags: ["NLP", "FastAPI", "Docker"],
  //   // github: "https://github.com",
  //   demo: "https://bracis.sbc.org.br/2025/bracis-st-pt-2/",
  //   featured: false,
  // },

  {
    title: "RAG Voice Assistant for the community",
    description:
      "Open source project to demonstrate practical uses of generative AI and retrieval augmented generation in a voice interface. The repository shows how to combine speech input, LLM reasoning and retrieval to answer in a natural way, aimed at helping other developers and students understand how to build end to end AI agents.",
    tags: ["Python", "RAG", "LLM", "ASR"],
    github: "https://github.com/guirn/rag_voice_assistant",
    // demo: "https://demo.com",
    featured: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that demonstrate my technical skills and research capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 group relative opacity-0 animate-fade-up stagger-${(index % 4) + 1}`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3 pr-8">{project.title}</h3>
              <p className="text-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
