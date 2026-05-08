import { FileText, ExternalLink, Users, Lightbulb, Database } from "lucide-react";

const publications = [
  {
    title:
      "NorBERTo: A ModernBERT Model Trained for Portuguese with 331 Billion Tokens Corpus",
    authors:
      "Silva, E. S. N.; Costa, P. B.; Vlasman, R. C.; Costa, R. P.; Silva, H. L. P.; Pellicer, L. F. A. O.; Rinaldo, G.; Almeida, R. A.; Rabbani, D. S. R.; Oestreich, C. O.; Caridá, V. F.",
    venue:
      "Proceedings of the 17th International Conference on Computational Processing of Portuguese (PROPOR 2026), Vol. 1, pp. 183–193",
    year: "2026",
    type: "Conference",
    link: "https://arxiv.org/abs/2605.00086",
    modelWeights: "https://huggingface.co/Itau-Unibanco/NorBERTo-base/tree/main",
  },
  {
    title:
      "Ensemble-Based Biometric Verification: Defending Against Multi-Strategy Deepfake Image Generation",
    authors:
      "Zen, H.; Wagh, R.; Wanderley, M.; Bicalho, G.; Park, R.; Sun, M.; Palacios, R.; Carvalho, L.; Rinaldo, G.; Gupta, A.",
    venue: "Computers, 14(6), 225 (DOI: 10.3390/computers14060225)",
    year: "2025",
    type: "Journal",
    link: "https://www.mdpi.com/2073-431X/14/6/225",
  },
  {
    title: "ASV-CM Score Fusion for Robust Speaker Verification in Spoofed Scenarios",
    authors:
      "Carvalho, L. A. R.; Lima, L. P.; Rinaldo, G.; Silva, C. O.; Beraldo, V. C.",
    venue:
      "Intelligent Systems (BRACIS 2025), Springer LNCS, vol. 16182, pp. 135–150 (DOI: 10.1007/978-3-032-15993-9_10)",
    year: "2026",
    type: "Conference",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-15993-9_10",
  },
  {
    title: "Control Access System (Biometric verification)",
    authors: "Co-Inventor: Guilherme Rinaldo",
    venue: "INPI Brazil Patent Application (BR112023023795-5)",
    year: "2022",
    type: "Patent",
    link: "https://busca.inpi.gov.br/pePI/servlet/PatenteServletController?Action=detail&CodPedido=1724490&SearchParameter=BR112023023795-5&Resumo=&Titulo=",
  },
  {
    title: "Control of Multiple Mobile Robots in Dynamic Formations",
    authors: "Rinaldo, G.; Rafikova, E.; Rafikov, M.",
    venue:
      "DINAME 2017 (Springer LNME), 2018 (DOI: 10.1007/978-3-319-91217-2_25)",
    year: "2018",
    type: "Conference",
    link: "https://link.springer.com/chapter/10.1007/978-3-319-91217-2_25",
  },
  {
    title:
      "Medication infusion pump with disposable cartridge controlled by mobile phone",
    authors: "Co-Inventor: Guilherme Rinaldo",
    venue: "INPI Brazil Patent Application (BR102017026112-3)",
    year: "2017",
    type: "Patent",
    link: "https://busca.inpi.gov.br/pePI/servlet/PatenteServletController?Action=detail&CodPedido=1438019&SearchParameter=BR102017026112-3&Resumo=&Titulo=",
  },
  {
    title: "Synchronization of the Mobile Robot to a Chaotic Trajectory",
    authors: "Rafikova, E.; Rafikov, M.; Rinaldo, G.",
    venue:
      "Journal of Applied Nonlinear Dynamics, 5(3), 325–335 (DOI: 10.5890/JAND.2016.09.005)",
    year: "2016",
    type: "Journal",
    link: "https://www.lhscientificpublishing.com/journals/articles/DOI-10.5890-JAND.2016.09.005.aspx",
  },
];

const getPubIcon = (type: string) => (type === "Patent" ? Lightbulb : FileText);

export function Publications() {
  return (
    <section id="publications" className="py-24 bg-secondary/20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Publications & Patents</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Peer-reviewed research contributions and patents.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {publications.map((pub, index) => {
            const Icon = getPubIcon(pub.type);

            return (
              <div
                key={pub.title}
                className={`bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 group opacity-0 animate-fade-up stagger-${(index % 4) + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-12 h-12 rounded-lg bg-primary/10 items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {pub.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Users size={14} />
                          <span>{pub.authors}</span>
                        </div>
                      </div>

                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                        aria-label={`Open ${pub.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="px-3 py-1 text-xs font-medium accent-gradient text-primary-foreground rounded-full">
                        {pub.venue}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                        {pub.year}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium border border-border text-muted-foreground rounded-full">
                        {pub.type}
                      </span>
                      {pub.modelWeights && (
                        <a
                          href={pub.modelWeights}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium border border-primary/40 text-primary rounded-full hover:bg-primary/10 transition-colors"
                          aria-label={`Open model weights for ${pub.title}`}
                        >
                          <Database size={12} />
                          Model Weights
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
