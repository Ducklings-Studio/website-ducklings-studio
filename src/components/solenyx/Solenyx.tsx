import React from "react";
import "../home/styles.scss";
import "./solenyx.scss";

const slides = [
  {
    title: "Welcome to Solenyx",
    subtitle: "Your Partner in Outsourcing Solutions",
    description: "We provide top-tier outsourcing services: development, art, support, business processes, and more for companies worldwide.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="Software Development" desc="Web, mobile, desktop, and game development. Full-cycle or team extension." color="#ff9800" />
        <AnimatedCard title="Art & Design" desc="2D/3D art, animation, VFX, UI/UX, branding, and more." color="#ff9800" />
        <AnimatedCard title="Business Process Outsourcing" desc="Support, QA, analytics, marketing, and back-office solutions." color="#ff9800" />
      </div>
    ),
  },
  {
    title: "Our Services",
    subtitle: "Flexible, Scalable, Reliable",
    description: "From concept to launch, our experienced team delivers high-quality results on time and on budget.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="Prototyping" desc="Rapid prototyping and proof-of-concept for new ideas." color="#ff9800" />
        <AnimatedCard title="Live Ops & Support" desc="Content updates, events, analytics, and player support." color="#ff9800" />
        <AnimatedCard title="Co-Development" desc="Plug-in teams for art, code, design, or business processes." color="#ff9800" />
      </div>
    ),
  },
  {
    title: "Projects",
    subtitle: "What We've Done",
    description: "A selection of our recent outsourcing projects across industries.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="E-Commerce Platform" desc="Developed a scalable e-commerce solution for a global retailer." color="#4caf50" />
        <AnimatedCard title="Mobile Game Art" desc="Produced 2D/3D assets for a top-grossing mobile game." color="#2196f3" />
        <AnimatedCard title="Customer Support Center" desc="Set up and managed multilingual support for a fintech startup." color="#e91e63" />
      </div>
    ),
  },
  {
    title: "Meet the Team",
    subtitle: "Experienced. Passionate. Reliable.",
    description: "Our team consists of industry veterans, creative artists, and technical experts dedicated to your success.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="Alex" desc="Lead Developer" avatar color="#ff9800" />
        <AnimatedCard title="Maria" desc="Art Director" avatar color="#ff9800" />
        <AnimatedCard title="Sam" desc="Producer" avatar color="#ff9800" />
      </div>
    ),
  },
  {
    title: "Contact Us",
    subtitle: "Let's Build Something Great Together",
    description: "Reach out to discuss your project and see how Solenyx can help you succeed.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
        <AnimatedCard title="Email" desc={<a href="mailto:contact@solenyx.com" style={{ color: "#fff", textDecoration: "underline" }}>contact@solenyx.com</a>} color="#ff9800" />
        <AnimatedCard title="LinkedIn" desc={<a href="#" style={{ color: "#fff", textDecoration: "underline" }}>linkedin.com/company/solenyx</a>} color="#ff9800" />
      </div>
    ),
  },
];

function AnimatedCard({ title, desc, color, avatar = false }: { title: string; desc: React.ReactNode; color: string; avatar?: boolean }) {
  return (
    <div
      className="solenyx-card"
      style={{
        background: "#232323",
        borderRadius: 12,
        padding: "2rem",
        minWidth: 220,
        maxWidth: 300,
        boxShadow: "0 2px 12px #0002",
        borderTop: `4px solid ${color}`,
        textAlign: "center",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {avatar && (
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: color, margin: "0 auto 1rem auto" }} />
      )}
      <h3 style={{ color, marginBottom: 8 }}>{title}</h3>
      <div style={{ fontSize: 16 }}>{desc}</div>
    </div>
  );
}

export default function Solenyx() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowY: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        scrollSnapType: "y mandatory",
        background: "#181818",
      }}
    >
      {slides.map((slide, idx) => (
        <section
          key={idx}
          style={{
            minHeight: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>{slide.title}</h1>
          <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#ff9800" }}>{slide.subtitle}</h2>
          <p style={{ fontSize: "1.25rem", maxWidth: "600px", textAlign: "center" }}>{slide.description}</p>
          {slide.extra}
        </section>
      ))}
    </div>
  );
} 