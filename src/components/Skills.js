import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    emoji: "🎨",
    items: [
      "TypeScript/JavaScript",
      "React.js",
      "Angular (1.x–14+)",
      "SAPUI5 -Fiori",
      "HTML5",
      "CSS3",
      "Responsive UI",
      "Accessibility"
    ]
  },
  {
    title: "Frameworks/Tooling",
    emoji: "🛠️",
    items: [
      "Jest",
      "React Testing Library",
      "Webpack",
      "Vite",
      "ESLint",
      "Prettier",
      "GraphQL"
    ]
  },
  {
    title: "Backend/Services",
    emoji: "🔗",
    items: [
      "Node.js",
      "Microservices",
      "Core Java",
      "API Integration",
      "CI/CD"
    ]
  },
  {
    title: "Cloud/DevOps",
    emoji: "☁️",
    items: [
      "Azure DevOps",
      "Git",
      "AWS Cloud",
      "Jenkins",
      "Docker",
      "Spinnaker"
    ]
  },
  {
    title: "Data/BI",
    emoji: "📊",
    items: [
      "Tableau",
      "QlikView",
      "Dashboarding",
      "KPI Reporting",
      "Data Visualization"
    ]
  },
  {
    title: "Leadership/PM",
    emoji: "📌",
    items: [
      "Technical Management",
      "Coaching & Mentoring",
      "Agile / Scrum",
      "PI Planning",
      "Backlog Prioritization",
      "Release Management",
      "Risk Management"
    ]
  },
  {
    title: "AI Tools",
    emoji: "🤖",
    items: [
      "ChatGPT",
      "Claude",
      "AWS Bedrock",
      "TensorFlow",
      "GitHub Copilot",
      "Cursor AI",
      "Figma AI"
    ]
  }
];

function Skills() {
  return (
    <section className="skills">
      <h2>Core Skills</h2>
      <div style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        marginTop: 8
      }}>
        {skillGroups.map(group => (
          <div
            key={group.title}
            style={{
              border: "1px solid #e0e0e0",
              padding: "0.9rem",
              borderRadius: 8,
              minWidth: 140,
              background: "#fff",
              boxShadow: "0 1px 2px rgba(0,0,0,0.03)"
            }}
          >
            <h3 style={{ margin: "0 0 8px 0", fontSize: 16 }}>
              <span style={{ marginRight: 6 }}>{group.emoji}</span>
              {group.title}
            </h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {group.items.map(item => (
                <li style={{listStyle: 'none', marginBottom: 4}} key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;