import { Award, Calendar, Building, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Machine Learning Specialty",
    issuer: "AWS",
    date: "2024",
    validationUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/8ff6766af12c431089083180749e277d",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    date: "2024",
    validationUrl: "https://www.coursera.org/account/accomplishments/verify/6Z5MJXU3R8B0",
  },
  {
    title: "AWS Certified Cloud Practitioner ",
    issuer: "AWS",
    date: "2023",
    validationUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/SN2G8F5K7FEQQY3H",
  },
  {
    title: "Full list on LinkedIn",
    validationUrl: "https://www.linkedin.com/in/guilhermerinaldo/details/certifications/",
  },
];

export function Certifications() {
  const LINKEDIN_TITLE = "Full list on LinkedIn";
  const linkedinItem = certifications.find((c) => c.title === LINKEDIN_TITLE);
  const visibleCertifications = certifications.filter((c) => c.title !== LINKEDIN_TITLE);

  return (
    <section id="certifications" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Selected professional certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleCertifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 group opacity-0 animate-fade-up stagger-${(index % 4) + 1}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 leading-snug">{cert.title}</h3>

                  <div className="flex items-center gap-2 text-sm text-foreground mb-1">
                    <Building size={14} />
                    <span>{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full" />

                    {cert.validationUrl && (
                      <a
                        href={cert.validationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                        aria-label={`Verify ${cert.title}`}
                      >
                        Verify
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {linkedinItem?.validationUrl && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Full list on{" "}
            <a
              href={linkedinItem.validationUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
