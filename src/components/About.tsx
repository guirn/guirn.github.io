import { Brain, Code, Database, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Brain,
    label: "Generative AI & Agents",
    description: "AI Agents, LLMs, RAG, Long Context",
  },
  {
    icon: Code,
    label: "AI Engineering",
    description: "Python, PyTorch, Production ML, APIs",
  },
  {
    icon: Database,
    label: "Evaluation & Robustness",
    description: "Quality, Safety, Latency, Spoofing defense",
  },
  {
    icon: Sparkles,
    label: "Speech & Voice AI",
    description: "ASR, TTS, Speaker Verification, Anti Spoofing",
  },
];


export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <p className="text-foreground text-base md:text-lg leading-relaxed text-left">
            I am a Staff AI Engineer and Researcher at the Itaú Institute of Science and Technology (ICTi), where I lead applied work in Generative AI, focusing on text and voice agents. I also lead internal research groups that connect frontier ideas to systems built with strong guarantees around safety and reliability.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed text-left mt-6">
            I have been working and researching in AI for about seven years, across the full lifecycle: modeling, evaluation, deployment, and monitoring. My work has resulted in peer reviewed publications and patentable solutions in security, evaluation, and voice systems, and I collaborate with researchers from MIT to stay aligned with current academic discussions.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed text-left mt-6">
            My main interests are multi agent systems and self evolving agents that learn from user interaction while remaining consistent and controllable. I am especially interested in agentic language models that maintain long context, decide when to use tools or retrieval, and support voice interaction, with behavior that can be measured, explained, and audited.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className={`bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 group opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.label}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
