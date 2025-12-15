import { Briefcase, FlaskConical, Calendar, Microscope, Target, Lightbulb } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  type: "professional" | "research";
}

interface ResearchArea {
  icon: React.ElementType;
  title: string;
  description: string;
  topics: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Staff AI Engineer and AI Researcher",
    organization: "Instituto de Ciência e Tecnologia Itaú (ICTi)",
    location: "São Paulo, Brazil",
    period: "Oct 2025 – Present",
    description: [
      "Lead research and engineering teams to turn advanced AI models into production ready solutions, from architecture design and training to deployment readiness",
      "Build evaluation pipelines to measure quality, robustness, and latency, translating results into measurable business value",
      "Contribute to patents and scientific papers on LLMs, trustworthy AI, biometric verification, and deepfake defense",
    ],
    type: "professional",
  },
  {
    title: "Senior Data Scientist and Generative AI Researcher",
    organization: "Instituto de Ciência e Tecnologia Itaú (ICTi)",
    location: "São Paulo, Brazil",
    period: "Jan 2025 – Oct 2025",
    description: [
      "Develop Generative AI with a focus on text and voice agents by integrating LLMs, ASR, TTS, and anti spoofing models",
      "Design and train models and systems that bridge engineering and research, with strong emphasis on real world reliability",
      "Create end to end evaluation to track quality, robustness, and latency, enabling practical and impactful applications",
    ],
    type: "professional",
  },
  {
    title: "Senior Data Scientist and AI Product Manager",
    organization: "Banco Itaú and Instituto de Ciência e Tecnologia Itaú (ICTi)",
    location: "São Paulo, Brazil",
    period: "Dec 2022 – Dec 2024",
    description: [
      "Led AI and GenAI products, guiding MLEs and Data Scientists to build and deploy scalable solutions, primarily on AWS",
      "Owned the full product lifecycle, including stakeholder alignment and multi GPU fine tuning of transformer based models",
      "Led speech understanding products for call centers, covering speech to text, voice activity detection, NLP, speaker classification, sentiment analysis, and fraud prevention with voice biometrics",
    ],
    type: "professional",
  },
  {
    title: "Data Scientist",
    organization: "Banco Itaú",
    location: "São Paulo, Brazil",
    period: "Apr 2019 – Nov 2022",
    description: [
      "Worked end to end on audio ML, from analytics to model development for speech and text sentiment analysis",
      "Fine tuned speech models including JASPER and wav2vec class architectures to improve transcription and downstream understanding",
      "Built deployments with Docker and Flask and created internal Python tooling for audio features and training efficiency, improving productivity for more than 200 colleagues",
    ],
    type: "professional",
  },
  {
    title: "Co Founder and CTO",
    organization: "Pocket Health Lab",
    location: "Brazil",
    period: "Nov 2016 – May 2018",
    description: [
      "Led the Engineering and Technology function as co founder and CTO",
      "Owned product development from concept to validation, working hands on across engineering decisions and delivery",
      "Drove execution at the intersection of hardware, software, and applied intelligence in a health tech context",
    ],
    type: "professional",
  },

  {
    title: "Generative AI and Trustworthy AI Researcher",
    organization: "Instituto de Ciência e Tecnologia Itaú (ICTi)",
    location: "São Paulo, Brazil",
    period: "2025 – Present",
    description: [
      "Publish and present applied research in biometric verification and robustness against deepfake attacks",
      "Collaborate with MIT affiliated researchers, including co authoring work with Prof. Amar Gupta on deepfake robust biometric verification",
      "Research ASV and countermeasure score fusion approaches for speaker verification under spoofed conditions",
      "Contribute to patent and publication efforts connected to biometric verification systems, bridging research and real world deployment constraints",
    ],
    type: "research",
  },
  {
    title: "Teaching Assistant",
    organization: "Federal University of ABC (UFABC)",
    location: "São Paulo, Brazil",
    period: "During MSc at UFABC",
    description: [
      "Teaching Assistant for Fundamentals of Robotics (undergraduate course)",
      "Teaching Assistant for Optimal Control Theory (undergraduate course)",
    ],
    type: "research",
  },

  {
    title: "Graduate Researcher (MSc), Robotics and Control",
    organization: "Federal University of ABC (UFABC)",
    location: "São Paulo, Brazil",
    period: "May 2015 – May 2017",
    description: [
      "Researched modeling and control of multiple mobile robots in dynamic formations using SDRE nonlinear regulation",
      "Applied optimal control theory, mathematical modeling, and optimization to simulate robust multi robot control under nonlinear dynamics",
      "Published results in peer reviewed venues in robotics and nonlinear dynamics",
    ],
    type: "research",
  },
  {
    title: "Co Founder and CTO (Entrepreneurial R&D)",
    organization: "Pocket Health Lab",
    location: "Brazil",
    period: "Nov 2016 – May 2018",
    description: [
      "Led the Engineering and Technology function, working hands on from concept through product validation",
      "Drove rapid prototyping and technical decision making across software and engineering constraints",
      "Worked at the intersection of applied research, product development, and delivery in a health tech context",
    ],
    type: "research",
  },

];


const researchAreas: ResearchArea[] = [
  {
    icon: Microscope,
    title: "Generative AI and AI Agents",
    description:
      "Building text and voice agents that combine modern generative models with strong evaluation and real world reliability.",
    topics: ["LLM Based Agents", "Self-evolving Agents", "NLP"],
  },
  {
    icon: Lightbulb,
    title: "Speech and Audio AI",
    description:
      "Developing speech understanding systems for production settings, from transcription to diarization, sentiment, and voice biometrics.",
    topics: ["ASR Fine Tuning", "Speaker Diarization", "Voice Biometrics"],
  },
  {
    icon: Target,
    title: "Trustworthy AI and Robust Evaluation",
    description:
      "Designing evaluation pipelines and defenses to improve robustness, mitigate spoofing, and harden biometric and agent systems.",
    topics: ["Anti Spoofing", "Deepfake Defense", "Quality Robustness Latency"],
  },
];


export function Experience() {
  const professionalExperiences = experiences.filter(
    (exp) => exp.type === "professional"
  );
  const researchExperiences = experiences.filter(
    (exp) => exp.type === "research"
  );

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-gradient">Research</span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            My professional journey and research contributions in the field of
            artificial intelligence and machine learning.
          </p>
        </div>

        {/* Research Interests */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Research Interests</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="w-12 h-12 rounded-lg accent-gradient flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                <p className="text-foreground text-sm mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Professional Experience</h3>
            </div>

            <div className="space-y-6">
              {professionalExperiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>

          {/* Research Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FlaskConical className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Research Experience</h3>
            </div>

            <div className="space-y-6">
              {researchExperiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <div className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors duration-300 group">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors duration-300" />
      
      <div className="bg-card p-5 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h4 className="font-semibold text-foreground">{experience.title}</h4>
            <p className="text-primary text-sm">{experience.organization}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {experience.period}
          </span>
          <span>{experience.location}</span>
        </div>

        <ul className="space-y-1.5">
          {experience.description.map((item, idx) => (
            <li
              key={idx}
              className="text-sm text-foreground flex items-start gap-2"
            >
              <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
