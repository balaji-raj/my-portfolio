import React, { useMemo, useState } from "react";

const skillGroups = [
  {
    title: "Frontend",
    emoji: "🎨",
    items: [
      "TypeScript/JavaScript",
      "React.js",
      "Angular (1.x–14+)",
      "SAPUI5 - Fiori",
      "HTML5",
      "CSS3",
      "Responsive UI",
      "Accessibility"
    ]
  },
  {
    title: "Frameworks / Tooling",
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
    title: "Backend / Services",
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
    title: "Cloud / DevOps",
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
    title: "Data / BI",
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
    title: "Leadership / PM",
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
  const { tags, groupsByTag } = useMemo(() => {
    const countMap = new Map();
    const groupsMap = {};

    skillGroups.forEach((group) => {
      group.items.forEach((item) => {
        const label = item.trim();
        countMap.set(label, (countMap.get(label) || 0) + 1);
        groupsMap[label] = groupsMap[label] || new Set();
        groupsMap[label].add(group.title);
      });
    });

    const tagsArray = Array.from(countMap.entries())
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));

    const groupsPlain = Object.fromEntries(
      Object.entries(groupsMap).map(([label, set]) => [label, Array.from(set)])
    );

    return { tags: tagsArray, groupsByTag: groupsPlain };
  }, []);

  const [active, setActive] = useState(null);

  const counts = tags.map((tag) => tag.count);
  const minCount = Math.min(...counts);
  const maxCount = Math.max(...counts);

  const sizeForCount = (count) => {
    if (maxCount === minCount) return "md";
    const ratio = (count - minCount) / (maxCount - minCount);
    if (ratio >= 0.85) return "xl";
    if (ratio >= 0.6) return "lg";
    if (ratio >= 0.35) return "md";
    if (ratio >= 0.15) return "sm";
    return "xs";
  };

  const activeGroupBadges = active ? groupsByTag[active] || [] : [];

  return (
    <section className="skills container" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills Trends</h2>

      <p style={{ marginTop: 0, color: "var(--muted)" }}>
        Visual trend of key skills — larger items indicate strengths or repeated presence across groups. Click a skill to highlight related groups.
      </p>

      <div className="skills-trends" role="list">
        {tags.map((tag) => {
          const sizeClass = sizeForCount(tag.count);
          const isActive = active === null || active === tag.label;
          return (
            <button
              key={tag.label}
              type="button"
              role="listitem"
              className={`skill-chip size-${sizeClass} ${isActive ? "chip-visible" : "chip-muted"}`}
              onClick={() => setActive((prev) => (prev === tag.label ? null : tag.label))}
              title={`${tag.label} — groups: ${groupsByTag[tag.label].join(", ")}`}
              aria-pressed={active === tag.label}
            >
              <span className="chip-label">{tag.label}</span>
            </button>
          );
        })}
      </div>

      <div className="skills-legend" style={{ marginTop: "16px" }}>
        {active ? (
          <>
            <div style={{ marginBottom: "10px", fontWeight: 600, color: "var(--text)" }}>
              Matching skill group badges for <span style={{ color: "var(--accent)" }}>{active}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {activeGroupBadges.map((group) => (
                <span
                  key={group}
                  className="skill-group-badge"
                  style={{
                    background: "rgba(10,79,122,0.08)",
                    color: "var(--accent-weak)",
                    borderRadius: "999px",
                    padding: "6px 12px",
                    fontSize: "0.95rem",
                    fontWeight: 600
                  }}
                >
                  {group}
                </span>
              ))}
            </div>
          </>
        ) : (
          <div style={{ color: "var(--muted)" }}>Select a skill to show matching skill group badges.</div>
        )}
      </div>

      <div style={{ marginTop: 12 }}>
        <small style={{ color: "var(--muted)" }}>
          Tip: click a skill to focus it; click again to show all.
        </small>
      </div>
    </section>
  );
}

export default Skills;
