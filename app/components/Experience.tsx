const experiences = [
  {
    role: "Lead Engineer – Salesforce",
    company: "Algoworks",
    period: "June 2022 – Present",
    bullets: [
      "Promoted to Lead Engineer; own end-to-end delivery including solution design, team management, and release.",
      "Lead and mentor a team of 5+ developers across Apex, LWC, integrations, and CI/CD deployment.",
      "Re-engineered a manual migration process (~4 days) into a fully automated Apex framework, reducing execution to under 15 minutes.",
      "Architected secure headless authentication for Experience Cloud portals with Azure AD B2C and OAuth 2.0.",
    ],
  },
  {
    role: "Software Engineer – Salesforce",
    company: "Tata Consultancy Services (TCS)",
    period: "Oct 2018 – June 2022",
    bullets: [
      "Delivered Salesforce & Veeva CRM solutions for a global pharmaceutical client across North America, Europe, and Asia-Pacific.",
      "Built data integration pipelines using Informatica PowerCenter and IICS for cross-platform data synchronization.",
      "Automated repetitive deployment tasks using shell scripting, reducing manual effort by ~30%.",
    ],
  },
];

const skills = [
  "Apex", "LWC", "Aura", "Salesforce Flow",
  "REST APIs", "OAuth 2.0", "Azure AD B2C",
  "JavaScript", "Python", "Node.js", "Git",
  "Sales Cloud", "Service Cloud", "Experience Cloud",
  "Agile / Scrum", "Solution Architecture",
];

const certifications = [
  "Salesforce Certified Platform Developer I",
  "Salesforce Certified Platform App Builder",
  "Salesforce Certified AI Associate",
];

export default function Experience() {
  return (
    <section id="experience" className="w-full px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
          My Journey
        </p>
        <h2 className="text-4xl font-bold text-white mb-16">
          Experience & Skills
        </h2>

        {/* Experience Timeline */}
        <div className="mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6 mb-12">

              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#7C3AED", marginTop: "6px", flexShrink: 0 }} />
                {index < experiences.length - 1 && (
                  <div style={{ width: "1px", backgroundColor: "#374151", flex: 1, marginTop: "8px" }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-4">
                <p className="text-gray-500 text-sm mb-1">{exp.period}</p>
                <h3 className="text-white font-semibold text-xl mb-1">{exp.role}</h3>
                <p className="text-purple-400 text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-white font-semibold text-2xl mb-6">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                style={{ border: "1px solid #374151", borderRadius: "9999px" }}
                className="text-gray-400 text-sm px-4 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-white font-semibold text-2xl mb-6">Certifications</h3>
          <div className="flex flex-col gap-3">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3">
                <span className="text-purple-400">✦</span>
                <span className="text-gray-400 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}