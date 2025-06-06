import React from "react";
import "../home/styles.scss";
import "./solenyx.scss";

const slides = [
  {
    top: <a style={{
      position: "absolute",
      top: "1.25rem",
      left: "1.25rem",
      color: "#ff9800",
      textDecoration: "none",
      fontSize: "1.5rem",
      fontWeight: "bold",
      padding: "0.5rem 1rem",
      background: "#181818",
      borderRadius: "1rem",
      zIndex: 10000,
    }} href="/?games">
      Ducklings Studio
    </a>,
    title: "Welcome to Solenyx",
    subtitle: "Your Partner in Outsourcing Solutions",
    description: "We provide top-tier development outsourcing and freelance services for companies worldwide.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="Variety of Services" desc="Web, mobile, desktop, and game development. Full-cycle or team extension." color="#ff9800" />
        <AnimatedCard title="Competitive Rates" desc="Startup-friendly approach and very competitive rates." color="#ff9800" />
        <AnimatedCard title="High Quality" desc="Industry experts in every field necessary for your project." color="#ff9800" />
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
        <AnimatedCard title="Extension" desc="Whether you need to rebuild an app or add new features, we will make your vision a reality." color="#ff9800" />
        <AnimatedCard title="Plug-in Team" desc="A plug-in, experienced team for any one of your projects." color="#ff9800" />
      </div>
    ),
  },
  {
    title: "Projects",
    subtitle: "What We've Done",
    description: "A selection of our recent outsourcing projects across industries.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="University Q&A App" desc="Developed an anonymous Q&A app where professors and other students can help in understanding subjects better." color="#4caf50" />
        <AnimatedCard title="ERP" desc="Developed business critical software for wholesale food retailers with AI features." color="#2196f3" />
        <AnimatedCard title="Games" desc="A variety of strategy and casual games." color="#e91e63" />
      </div>
    ),
  },
  {
    title: "Meet the Team",
    subtitle: "Experienced. Passionate. Reliable.",
    description: "Our team consists of itechnical experts dedicated to your success.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="Nykyta" desc="Full-Stack/AI Developer" avatar="/IMG_9310.JPG" color="#ff9800" />
        <AnimatedCard title="Anton" desc="Backend Developer" avatar="/ava_norm.png" color="#ff9800" />
        <AnimatedCard title="Artem" desc="Designer/Frontend Developer" avatar="/ProfilePhoto.jpg" color="#ff9800" />
      </div>
    ),
  },
  {
    title: "Contact Us",
    subtitle: "Let's Build Something Great Together",
    description: "Reach out to discuss your project and see how Solenyx can help you succeed.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
        <AnimatedCard title="Email" desc={<a href="mailto:contact@ducklings-studio.com" style={{ color: "#fff", textDecoration: "underline" }}>contact@ducklings-studio.com</a>} color="#ff9800" />
      </div>
    ),
  },
];

function AnimatedCard({ title, desc, color, avatar }: { title: string; desc: React.ReactNode; color: string; avatar?: string }) {
  return (
    <div
      className="solenyx-card"
      style={{
        borderTop: `0.25rem solid ${color}`
      }}
    >
      {avatar && (
        <img src={avatar} style={{ width: 80, height: 80, borderRadius: "50%", background: color, margin: "0 auto 1rem auto" }} />
      )}
      <h3 style={{ color, marginBottom: "0.5rem" }}>{title}</h3>
      <div style={{ fontSize: "1rem" }}>{desc}</div>
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
          {slide.top}
          <h1 style={{ marginBottom: "1rem", marginTop: "0" }}>{slide.title}</h1>
          <h2 style={{ marginBottom: "1.5rem", color: "#ff9800" }}>{slide.subtitle}</h2>
          <p style={{ fontSize: "1.25rem", maxWidth: "37.5rem", textAlign: "center" }}>{slide.description}</p>
          {slide.extra}
        </section>
      ))}
    </div>
  );
} 