import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Code2, Layers3, ShieldCheck, Zap } from "lucide-react";
import "./style.css";

const features = [
  {
    icon: <Zap size={21} />,
    title: "Fast by design",
    description: "A lightweight React and Vite starter that builds into static files for global delivery",
  },
  {
    icon: <ShieldCheck size={21} />,
    title: "Ready for HTTPS",
    description: "Connect a custom domain on Cloudflare Pages and enable secure HTTPS delivery.",
  },
  {
    icon: <Layers3 size={21} />,
    title: "Easy to extend",
    description: "Use this foundation for a company website, product pages, or a future frontend application.",
  },
];

function App() {
  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#top" aria-label="Northstar Studio home">
          <span className="brand-mark">N</span>
          <span>northstar<span className="brand-light">.studio</span></span>
        </a>
        <a className="nav-link" href="#features">What’s included <ArrowUpRight size={16} /></a>
      </nav>

      <section className="hero container" id="top">
        <div className="eyebrow"><span className="status-dot" /> YOUR NEXT IDEA STARTS HERE</div>
        <h1>Build something<br /><span>worth sharing.</span></h1>
        <p className="hero-copy">
          A modern starter website to test GitHub integration and automatic deployments on Cloudflare Pages.
          Change the content, push to GitHub, and watch your live site update.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#features">Explore the starter <ArrowUpRight size={17} /></a>
          <a className="button button-secondary" href="https://developers.cloudflare.com/pages/" target="_blank" rel="noreferrer">Cloudflare Pages docs</a>
        </div>
        <div className="deploy-note"><Code2 size={17} /> React + Vite <span>·</span> Git-based deployments <span>·</span> Static hosting</div>
        <div className="preview-card">
          <div className="preview-top"><div className="window-dots"><i /><i /><i /></div><span>YOUR LIVE WEBSITE</span><span className="preview-live">● LIVE PREVIEW</span></div>
          <div className="preview-content">
            <div>
              <p className="preview-label">A SIMPLE START. A SOLID FOUNDATION.</p>
              <h2>From commit<br />to customer.</h2>
              <p>Every push can become your next release.</p>
            </div>
            <div className="orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-core">N</div><span className="orbit-star star-one">✦</span><span className="orbit-star star-two">✧</span></div>
          </div>
        </div>
      </section>

      <section className="features container" id="features">
        <div className="section-heading">
          <p className="eyebrow">THE FOUNDATION</p>
          <h2>Everything you need to get started.</h2>
          <p>Use this project to verify your deployment workflow before replacing the sample content with your own brand.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer container">
        <a className="brand" href="#top"><span className="brand-mark">N</span><span>northstar<span className="brand-light">.studio</span></span></a>
        <span>Sample project · Replace with your company details</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
