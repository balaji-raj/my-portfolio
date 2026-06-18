// eslint-disable-next-line
const certs = [
  {name: "OCJP Certification", date: "Jun 2022", logo: "/logos/oracle.png"},
  {name: "Google Analytics", date: "Jun 2022", logo: "/logos/google.png"},
  {name: "AWS Certified Cloud Practitioner", date: "Aug 2018", logo: "/logos/aws.png"},
  {name: "Azure DevOps AZ-400", date: "Jun 2026", logo: "/logos/azure.png"},
];

function Certification() {
  return (
    <section className="certification container">
      <h2>Certifications</h2>
      <div style={{display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center"}}>
        {certs.map(c => (
          <div key={c.name} style={{display: "flex", alignItems: "center", gap: 8, border: "1px solid #eee", padding: 8, borderRadius: 6}}>
            {c.logo ? <img src={c.logo} alt={c.name} style={{width: 48, height: 48, objectFit: "contain"}} /> : <div style={{width:48,height:48,display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f5",borderRadius:4}}>{c.name.split(" ")[0]}</div>}
            <div>
              <div style={{fontWeight: 600}}>{c.name}</div>
              {c.date && <div style={{fontSize: 12, color: "#666"}}>{c.date}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;