import React from "react";
import "../home/styles.scss";
import "./solenyx.scss";

const slides = [
  {
    top: <></>,
    title: "Welcome to Solenyx",
    subtitle: "Your Partner in Outsourcing Solutions",
    description: "We provide top-tier development outsourcing and freelance services for companies worldwide.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="Variety of Services" desc="Web, mobile, desktop, and game development. Full-cycle or team extension." bgColor="#fff" color="#ff9800" />
        <AnimatedCard title="Competitive Rates" desc="Startup-friendly approach and very competitive rates." bgColor="#fff" color="#ff9800" />
        <AnimatedCard title="High Quality" desc="Industry experts in every field necessary for your project." bgColor="#fff" color="#ff9800" />
      </div>
    ),
    textColor: "#000",
    bgColor: "#fff",
  },
  {
    title: "Our Services",
    subtitle: "Flexible, Scalable, Reliable",
    description: "From concept to launch, our experienced team delivers high-quality results on time and on budget.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="Prototyping" desc="Rapid prototyping and proof-of-concept for new ideas." color="#ff9800" bgColor="rgba(24,24,24,0.5)" />
        <AnimatedCard title="Extension" desc="Whether you need to rebuild an app or add new features, we will make your vision a reality." color="#ff9800" bgColor="rgba(24,24,24,0.5)" />
        <AnimatedCard title="Plug-in Team" desc="A plug-in, experienced team for any one of your projects." color="#ff9800" bgColor="rgba(24,24,24,0.5)" />
      </div>
    ),
    bgColor: "rgba(0,0,0,0)",
    textColor: "#fff",
  },
  {
    title: "Projects",
    subtitle: "What We've Done",
    description: "A selection of our recent outsourcing projects across industries.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="ERP" desc="Developed business critical software for wholesale food retailers with AI features." bgColor="#fff" color="#2196f3" />
        <AnimatedCard title="AI Document processing software" desc="Software designed for companies that drastically reduces data entry workload and reduces errors." bgColor="#fff" color="#e91e63" />
        <AnimatedCard title="University Q&A App" desc="Developed a Q&A app where professors and other students can anonymously help in understanding subjects better." bgColor="#fff" color="#4caf50" />
      </div>
    ),
    textColor: "#000",
    bgColor: "#fff",
  },
  {
    title: "Meet the Team",
    subtitle: "Experienced. Passionate. Reliable.",
    description: "Our team consists of technical experts dedicated to your success.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem" }}>
        <AnimatedCard title="Nykyta" desc="Full-Stack/AI Developer" avatar="/IMG_9310.JPG" color="#ff9800" />
        <AnimatedCard title="Tony" desc="Backend Developer" avatar="/ava_norm.png" color="#ff9800" />
        <AnimatedCard title="Michael" desc="Backend Developer" avatar="/DSC03622.JPG" color="#ff9800" />
        <AnimatedCard title="Artem" desc="Designer/Frontend Developer" avatar="/ProfilePhoto.jpg" color="#ff9800" />
      </div>
    ),
    textColor: "#fff",
    bgColor: "#181818",
  },
  {
    title: "Contact Us",
    subtitle: "Let's Build Something Great Together",
    description: "Reach out to discuss your project and see how Solenyx can help you succeed.",
    extra: (
      <div className="solenyx-card-row" style={{ marginTop: "2rem", flexDirection: "row", alignItems: "center", gap: "1.5rem" }}>
        <AnimatedCard title="Email" desc={<a href="mailto:nikita@ostaplyuk.com" style={{ color: "#000", textDecoration: "underline" }}>nikita@ostaplyuk.com</a>} bgColor="#fff" color="#ff9800" />
        <AnimatedCard title="Phone" desc={<a href="tel:+33601956148" style={{ color: "#000", textDecoration: "underline" }}>+33601956148</a>} bgColor="#fff" color="#ff9800" />
      </div>
    ),
    textColor: "#000",
    bgColor: "#fff",
  },
];

function AnimatedCard({ title, desc, color, bgColor, avatar }: { title: string; desc: React.ReactNode; color: string; bgColor?: string; avatar?: string }) {
  return (
    <div
      className="solenyx-card"
      style={{
        borderTop: `0.25rem solid ${color}`,
        background: bgColor,
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
  return <>
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowY: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        scrollSnapType: "y mandatory",
        background: "#fff",
      }}
    >
      {slides.map((slide, idx) => (
        <section
          key={idx}
          style={{
            minHeight: "100vh",
            width: "100vw",
            color: slide.textColor,
            padding: "1rem 0",
            boxSizing: "border-box",
          }}
        >
          <div style={{
            background: slide.bgColor,
            width: "100%",
            height: "100%",
            borderRadius: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}>
            {slide.top}
            <h1 style={{ marginBottom: "1rem", marginTop: "0" }}>{slide.title}</h1>
            <h2 style={{ marginBottom: "1.5rem", color: "#ff9800" }}>{slide.subtitle}</h2>
            <p style={{ fontSize: "1.25rem", maxWidth: "37.5rem", textAlign: "center" }}>{slide.description}</p>
            {slide.extra}
          </div>
        </section>
      ))}

      <video autoPlay loop style={{
        "backgroundImage": "url(\"https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9%2F684095d127c9ea85d4851940_new-12149178_1920_1080_24fps-poster-00001.jpg\";)",
        "width": "100vw",
        "minHeight": "calc(100vh - 1rem)",
        borderRadius: "2rem",
        "position": "relative",
        "top": "calc(-400vh + 0.5rem)",
        zIndex: 1,
        objectFit: "fill",
      }} muted playsInline preload="auto">
        <source src="https://cdn.prod.website-files.com/68c31b6fdf81c54998731fd8/68c31b70df81c5499873205e_new-12149178_1920_1080_24fps-transcode.mp4"></source>
        <source src="https://cdn.prod.website-files.com/68c31b6fdf81c54998731fd8/68c31b70df81c5499873205e_new-12149178_1920_1080_24fps-transcode.webm"></source>
      </video>
    </div>
  </>;
} 