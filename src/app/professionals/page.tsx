import PageHero from "@/components/PageHero";
import ProfessionalCard from "@/components/ProfessionalCard";
import { professionals } from "@/data/professionals";

export default function ProfessionalsPage() {
  return (
    <>
      <PageHero
        label="Book an Appointment"
        title="Meet Our Beauty Professionals"
      />

      <section className="section-padding" style={{ padding: "0 48px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="team-grid">
            {professionals.map((person, i) => (
              <ProfessionalCard key={person.slug} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
