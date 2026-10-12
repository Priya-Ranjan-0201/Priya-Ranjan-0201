'use client';

import React from 'react';
import Link from 'next/link';
import '@/app/cyberpunk-profile.css';

export default function CyberpunkProfileView() {
  return (
    <div className="cb-root">
      {/* ─── TOP NAVBAR ─── */}
      <nav className="cb-navbar">
        <div className="cb-nav-inner">
          <div className="cb-nav-left">
            <a href="https://github.com/Priya-Ranjan-0201" className="cb-logo" aria-label="GitHub">
              <svg height="28" viewBox="0 0 16 16" width="28" fill="currentColor">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>
            <span className="cb-username-title">Priya-Ranjan-0201</span>
            <div className="cb-tabs">
              <span className="cb-tab active">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.244a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.244a2.25 2.25 0 0 0-1.748.832l-.248.31a.75.75 0 0 1-1.012 0l-.248-.31A2.25 2.25 0 0 0 5.003 13H.75a.75.75 0 0 1-.75-.75ZM1.5 2.5v9h3.503c.797 0 1.542.366 2.03 1 .487-.634 1.232-1 2.029-1h3.438v-9h-3.438c-1.079 0-2.098.536-2.71 1.433a.75.75 0 0 1-1.228 0A3.25 3.25 0 0 0 5.003 2.5Z"></path></svg>
                Overview
              </span>
              <a href="https://github.com/Priya-Ranjan-0201?tab=repositories" target="_blank" rel="noopener" className="cb-tab">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25v1.25a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25Z"></path></svg>
                Repositories
              </a>
              <a href="https://github.com/Priya-Ranjan-0201?tab=projects" target="_blank" rel="noopener" className="cb-tab">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM3 3h3.5v10H3Zm5 0h5v4.5H8Zm0 6h5V13H8Z"></path></svg>
                Projects
              </a>
              <a href="https://github.com/Priya-Ranjan-0201?tab=packages" target="_blank" rel="noopener" className="cb-tab">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69a.25.25 0 0 0-.25.044L2.5 4.84l5.5 3.19 5.5-3.19-5.125-3.106a.25.25 0 0 0-.25-.044ZM2.5 6.57v4.478a.25.25 0 0 0 .125.216L7.25 13.91V7.75L2.5 6.57Zm6.25 7.34 4.625-2.646a.25.25 0 0 0 .125-.216V6.57L8.75 7.75v6.16Z"></path></svg>
                Packages
              </a>
              <a href="https://github.com/Priya-Ranjan-0201?tab=stars" target="_blank" rel="noopener" className="cb-tab">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
                Stars
              </a>
            </div>
          </div>
          <div className="cb-search-box">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg>
            <input type="text" placeholder="Type to search..." aria-label="Search" />
          </div>
        </div>
      </nav>

      {/* ─── MAIN CONTAINER ─── */}
      <div className="cb-container">
        {/* LEFT SIDEBAR */}
        <aside className="cb-sidebar">
          <div className="cb-avatar-wrapper">
            <div className="cb-avatar-glow-ring" />
            <img src="/images/avatar.jpg" alt="Priya Ranjan Avatar" className="cb-avatar-img" />
          </div>

          <div className="cb-name-block">
            <h1 className="cb-profile-name">Priya Ranjan</h1>
            <div className="cb-profile-handle">@Priya-Ranjan-0201</div>
          </div>

          <div className="cb-profile-bio">
            <p><strong>CSE Student | AI/ML | Cybersecurity</strong></p>
            <p>Building real-world solutions and learning new technologies.</p>
          </div>

          <div className="cb-profile-meta-list">
            <div className="cb-meta-item">
              <span className="cb-meta-icon">📍</span>
              <span>Jalandhar, India</span>
            </div>
            <div className="cb-meta-item">
              <span className="cb-meta-icon">🏛️</span>
              <span>Lovely Professional University</span>
            </div>
            <div className="cb-meta-item">
              <span className="cb-meta-icon">✨</span>
              <span style={{ color: 'var(--cb-neon-green)', fontWeight: 600 }}>Open to Opportunities</span>
            </div>
            <div className="cb-meta-item">
              <span className="cb-meta-icon">✉️</span>
              <a href="mailto:priyaranjan01@gmail.com">priyaranjan01@gmail.com</a>
            </div>
            <div className="cb-meta-item">
              <span className="cb-meta-icon">🔗</span>
              <a href="https://www.linkedin.com/in/priyaranjan01" target="_blank" rel="noopener">linkedin.com/in/priyaranjan01</a>
            </div>
            <div className="cb-meta-item">
              <span className="cb-meta-icon">🌐</span>
              <a href="https://github.com/Priya-Ranjan-0201" target="_blank" rel="noopener">github.com/Priya-Ranjan-0201</a>
            </div>
          </div>

          <button className="cb-btn-edit-profile" type="button">Edit profile</button>

          <div>
            <h2 className="cb-sidebar-section-title">Highlights</h2>
            <ul className="cb-highlights-list">
              <li className="cb-highlight-item"><span className="cb-highlight-diamond" />CSE Student</li>
              <li className="cb-highlight-item"><span className="cb-highlight-diamond" />AI/ML Enthusiast</li>
              <li className="cb-highlight-item"><span className="cb-highlight-diamond" />Cybersecurity Learner</li>
              <li className="cb-highlight-item"><span className="cb-highlight-diamond" />Open Source Contributor</li>
              <li className="cb-highlight-item"><span className="cb-highlight-diamond" />Problem Solver</li>
              <li className="cb-highlight-item"><span className="cb-highlight-diamond" />Always Learning</li>
            </ul>
          </div>

          <div className="cb-sidebar-quote-box">
            <p className="cb-sidebar-quote-text">" Consistent learning today builds better opportunities tomorrow. "</p>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="cb-main">
          {/* 01. HERO BANNER */}
          <div className="cb-hero-card">
            <img src="/images/hero_bg.jpg" alt="Cyberpunk Workstation" className="cb-hero-bg-img" />
            <div className="cb-hero-gradient-overlay" />
            <div className="cb-hero-content">
              <div className="cb-hero-prompt">&gt; Hello, World!</div>
              <h2 className="cb-hero-headline">
                I'm Priya <span className="name-accent">Ranjan</span>
              </h2>
              <div className="cb-hero-subhead">Computer Science &amp; Engineering Student</div>

              <div className="cb-hero-badges-row">
                <span className="cb-hero-pill-badge">⚡ AI/ML</span>
                <span className="cb-hero-pill-badge">🛡️ Cybersecurity</span>
                <span className="cb-hero-pill-badge">🌐 Web Development</span>
                <span className="cb-hero-pill-badge">💡 Problem Solving</span>
              </div>

              <div className="cb-hero-quote-line">
                // Turning ideas into impactful solutions through code, creativity, and continuous learning. "
              </div>

              <div className="cb-hero-actions">
                <a href="#featured-projects" className="cb-btn-hero-primary">
                  View My Projects &rarr;
                </a>
                <a href="https://github.com/Priya-Ranjan-0201" target="_blank" rel="noopener" className="cb-btn-hero-secondary">
                  Github
                </a>
                <a href="https://www.linkedin.com/in/priyaranjan01" target="_blank" rel="noopener" className="cb-btn-hero-secondary">
                  LinkedIn
                </a>
                <a href="mailto:priyaranjan01@gmail.com" className="cb-btn-hero-secondary">
                  Email Me
                </a>
                <a href="/Priya_Ranjan_Resume.pdf" target="_blank" rel="noopener" className="cb-btn-hero-secondary">
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* 02. ABOUT ME */}
          <section>
            <div className="cb-section-header">
              <h2 className="cb-section-title"><span className="cmd-prompt">&gt;</span> About Me</h2>
            </div>
            <div className="cb-about-card">
              <div className="cb-about-copy">
                <p>
                  I'm a Computer Science &amp; Engineering student passionate about Artificial Intelligence, Cybersecurity, Web Development, and building real-world solutions. I enjoy exploring new technologies, solving meaningful problems, and creating impactful projects.
                </p>
                <p>
                  I'm always eager to learn, collaborate, and contribute to open-source while improving my skills and preparing for real-world opportunities.
                </p>
                <div className="cb-about-pills-row">
                  <span className="cb-about-pill">🧠 AI/ML Exploration</span>
                  <span className="cb-about-pill">🛡️ Cybersecurity Learning</span>
                  <span className="cb-about-pill">💻 Web Development Projects</span>
                  <span className="cb-about-pill">👥 Open Source Contribution</span>
                </div>
              </div>
              <div className="cb-about-visual-box">
                <img src="/images/about_coder.jpg" alt="Priya Ranjan Coding Station" className="cb-about-visual-img" />
                <div className="cb-about-visual-footer">
                  <div>&gt; Always curious.</div>
                  <div>&gt; Always building.</div>
                </div>
              </div>
            </div>
          </section>

          {/* 03. FEATURED PROJECTS */}
          <section id="featured-projects">
            <div className="cb-section-header">
              <h2 className="cb-section-title"><span className="cmd-prompt">&gt;</span> Featured Projects</h2>
              <a href="https://github.com/Priya-Ranjan-0201?tab=repositories" target="_blank" rel="noopener" className="cb-section-link">
                View all repositories &rarr;
              </a>
            </div>

            <div className="cb-projects-grid">
              {/* PrepPilot */}
              <div className="cb-project-card">
                <div className="cb-project-body">
                  <div>
                    <div className="cb-project-header-row">
                      <h3 className="cb-project-title">PrepPilot <span className="cb-project-badge-public">Public</span></h3>
                    </div>
                    <p className="cb-project-desc" style={{ marginTop: 8 }}>
                      An AI-powered interview preparation assistant that combines personalized learning, technical concepts, and interview-based question generation.
                    </p>
                  </div>
                  <div>
                    <div className="cb-project-tags">
                      <span className="cb-project-tag">Python</span>
                      <span className="cb-project-tag">NLP</span>
                      <span className="cb-project-tag">AI</span>
                      <span className="cb-project-tag">LLM</span>
                    </div>
                    <div className="cb-project-actions">
                      <a href="https://github.com/Priya-Ranjan-0201" target="_blank" rel="noopener" className="cb-btn-project">Code</a>
                      <a href="https://github.com/Priya-Ranjan-0201" target="_blank" rel="noopener" className="cb-btn-project">Live Demo</a>
                    </div>
                  </div>
                </div>
                <div className="cb-project-thumb-box">
                  <img src="/images/project_preppilot.jpg" alt="PrepPilot UI" className="cb-project-thumb-img" />
                </div>
              </div>

              {/* TruthShield X */}
              <div className="cb-project-card">
                <div className="cb-project-body">
                  <div>
                    <div className="cb-project-header-row">
                      <h3 className="cb-project-title">TruthShield X <span className="cb-project-badge-public">Public</span></h3>
                    </div>
                    <p className="cb-project-desc" style={{ marginTop: 8 }}>
                      A digital trust and misinformation defense platform focused on fake news detection, credible analysis, privacy risks, and digital identity threats.
                    </p>
                  </div>
                  <div>
                    <div className="cb-project-tags">
                      <span className="cb-project-tag">AI/ML</span>
                      <span className="cb-project-tag">Security</span>
                      <span className="cb-project-tag">Web</span>
                    </div>
                    <div className="cb-project-actions">
                      <a href="https://github.com/Priya-Ranjan-0201/TrustShield-X" target="_blank" rel="noopener" className="cb-btn-project">Code</a>
                      <a href="https://github.com/Priya-Ranjan-0201/TrustShield-X" target="_blank" rel="noopener" className="cb-btn-project">Live Demo</a>
                    </div>
                  </div>
                </div>
                <div className="cb-project-thumb-box">
                  <img src="/images/project_truthshield.jpg" alt="TruthShield X UI" className="cb-project-thumb-img" />
                </div>
              </div>

              {/* VIREONIQ / PLACE30 */}
              <div className="cb-project-card">
                <div className="cb-project-body">
                  <div>
                    <div className="cb-project-header-row">
                      <h3 className="cb-project-title">VIREONIQ / PLACE30 <span className="cb-project-badge-public">Public</span></h3>
                    </div>
                    <p className="cb-project-desc" style={{ marginTop: 8 }}>
                      A career intelligence platform for students offering resume analysis, placement gap insights, interview practice, and personalized recommendations.
                    </p>
                  </div>
                  <div>
                    <div className="cb-project-tags">
                      <span className="cb-project-tag">React</span>
                      <span className="cb-project-tag">TypeScript</span>
                      <span className="cb-project-tag">AI</span>
                      <span className="cb-project-tag">Web</span>
                    </div>
                    <div className="cb-project-actions">
                      <a href="https://github.com/Priya-Ranjan-0201/VIREONIQ" target="_blank" rel="noopener" className="cb-btn-project">Code</a>
                      <a href="https://github.com/Priya-Ranjan-0201/VIREONIQ" target="_blank" rel="noopener" className="cb-btn-project">Live Demo</a>
                    </div>
                  </div>
                </div>
                <div className="cb-project-thumb-box">
                  <img src="/images/project_vireoniq.jpg" alt="VIREONIQ UI" className="cb-project-thumb-img" />
                </div>
              </div>

              {/* Tech On Tour */}
              <div className="cb-project-card">
                <div className="cb-project-body">
                  <div>
                    <div className="cb-project-header-row">
                      <h3 className="cb-project-title">Tech On Tour <span className="cb-project-badge-public">Public</span></h3>
                    </div>
                    <p className="cb-project-desc" style={{ marginTop: 8 }}>
                      A smart tourism platform for discovering destinations, planning itineraries, and exploring local experiences with useful travel tools.
                    </p>
                  </div>
                  <div>
                    <div className="cb-project-tags">
                      <span className="cb-project-tag">Web</span>
                      <span className="cb-project-tag">Travel</span>
                      <span className="cb-project-tag">Maps</span>
                      <span className="cb-project-tag">AI</span>
                    </div>
                    <div className="cb-project-actions">
                      <a href="https://github.com/Priya-Ranjan-0201/TECH-ON-TOUR" target="_blank" rel="noopener" className="cb-btn-project">Code</a>
                      <a href="https://github.com/Priya-Ranjan-0201/TECH-ON-TOUR" target="_blank" rel="noopener" className="cb-btn-project">Live Demo</a>
                    </div>
                  </div>
                </div>
                <div className="cb-project-thumb-box">
                  <img src="/images/project_techontour.jpg" alt="Tech On Tour" className="cb-project-thumb-img" />
                </div>
              </div>
            </div>
          </section>

          {/* 04. TECH STACK */}
          <section>
            <div className="cb-section-header">
              <h2 className="cb-section-title"><span className="cmd-prompt">&gt;</span> Tech Stack</h2>
            </div>
            <div className="cb-tech-stack-row">
              <div className="cb-tech-card">
                <div className="cb-tech-card-header">Programming Languages</div>
                <div className="cb-tech-items-grid">
                  <span className="cb-tech-item"><span className="cb-tech-dot" />Python</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />Java</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />C / C++</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />JavaScript</span>
                </div>
              </div>

              <div className="cb-tech-card">
                <div className="cb-tech-card-header">Frontend Development</div>
                <div className="cb-tech-items-grid">
                  <span className="cb-tech-item"><span className="cb-tech-dot" />React</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />TypeScript</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />HTML</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />CSS</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />Tailwind</span>
                </div>
              </div>

              <div className="cb-tech-card">
                <div className="cb-tech-card-header">Backend &amp; Databases</div>
                <div className="cb-tech-items-grid">
                  <span className="cb-tech-item"><span className="cb-tech-dot" />Node.js</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />FastAPI</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />MongoDB</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />MySQL</span>
                </div>
              </div>

              <div className="cb-tech-card">
                <div className="cb-tech-card-header">AI / ML</div>
                <div className="cb-tech-items-grid">
                  <span className="cb-tech-item"><span className="cb-tech-dot" />LLMs</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />RAG</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />NLP</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />PyTorch</span>
                </div>
              </div>

              <div className="cb-tech-card">
                <div className="cb-tech-card-header">Tools &amp; Others</div>
                <div className="cb-tech-items-grid">
                  <span className="cb-tech-item"><span className="cb-tech-dot" />Git</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />Docker</span>
                  <span className="cb-tech-item"><span className="cb-tech-dot" />VS Code</span>
                </div>
              </div>
            </div>
          </section>

          {/* 05. GITHUB ANALYTICS */}
          <section>
            <div className="cb-section-header">
              <h2 className="cb-section-title"><span className="cmd-prompt">&gt;</span> GitHub Analytics</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <img src="/images/analytics-dashboard.svg" alt="GitHub Analytics Dashboard" style={{ width: '100%', borderRadius: 12 }} />
            </div>
          </section>

          {/* 06. MY JOURNEY */}
          <section>
            <div className="cb-section-header">
              <h2 className="cb-section-title"><span className="cmd-prompt">&gt;</span> My Journey</h2>
            </div>
            <div className="cb-journey-card">
              <div className="cb-timeline-list">
                <div className="cb-timeline-node">
                  <span className="cb-timeline-dot" />
                  <div style={{ fontFamily: 'var(--cb-font-mono)', fontSize: 13.5, fontWeight: 700, color: 'var(--cb-neon-green)' }}>2023</div>
                  <div style={{ color: '#cbd5e1', fontSize: 13 }}>Started my CSE journey. Explored programming and core CS concepts.</div>
                </div>
                <div className="cb-timeline-node">
                  <span className="cb-timeline-dot" />
                  <div style={{ fontFamily: 'var(--cb-font-mono)', fontSize: 13.5, fontWeight: 700, color: 'var(--cb-neon-green)' }}>2024</div>
                  <div style={{ color: '#cbd5e1', fontSize: 13 }}>Deepened into AI/ML &amp; Web Development. Built and shipped multiple projects.</div>
                </div>
                <div className="cb-timeline-node">
                  <span className="cb-timeline-dot" />
                  <div style={{ fontFamily: 'var(--cb-font-mono)', fontSize: 13.5, fontWeight: 700, color: 'var(--cb-neon-green)' }}>2025</div>
                  <div style={{ color: '#cbd5e1', fontSize: 13 }}>Focused on Cybersecurity and real-world applications. Working on advanced projects and open-source.</div>
                </div>
                <div className="cb-timeline-node">
                  <span className="cb-timeline-dot" />
                  <div style={{ fontFamily: 'var(--cb-font-mono)', fontSize: 13.5, fontWeight: 700, color: 'var(--cb-neon-green)' }}>2026</div>
                  <div style={{ color: '#cbd5e1', fontSize: 13 }}>Building, learning, and preparing for opportunities. Open to internships and collaborations.</div>
                </div>
              </div>
              <div className="cb-journey-visual-box">
                <img src="/images/journey_wanderer.jpg" alt="Journey Ahead" className="cb-journey-visual-img" />
                <div className="cb-journey-visual-caption">
                  A Bigger Better Version Ahead...
                </div>
              </div>
            </div>
          </section>

          {/* 07. CURRENTLY EXPLORING */}
          <section>
            <div className="cb-section-header">
              <h2 className="cb-section-title"><span className="cmd-prompt">&gt;</span> Currently Exploring</h2>
            </div>
            <div className="cb-exploring-grid">
              <div className="cb-exploring-card">
                <div style={{ fontSize: 20 }}>🧠</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Artificial Intelligence</div>
                <div style={{ fontSize: 12.5, color: '#cbd5e1' }}>Exploring LLMs, RAG, and real-world AI applications.</div>
              </div>
              <div className="cb-exploring-card">
                <div style={{ fontSize: 20 }}>🛡️</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Cybersecurity</div>
                <div style={{ fontSize: 12.5, color: '#cbd5e1' }}>Learning security practices, threat analysis, and digital trust.</div>
              </div>
              <div className="cb-exploring-card">
                <div style={{ fontSize: 18, fontFamily: 'monospace', color: 'var(--cb-neon-green)' }}>&lt;/&gt;</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Full-Stack Development</div>
                <div style={{ fontSize: 12.5, color: '#cbd5e1' }}>Building scalable web applications and system design skills.</div>
              </div>
              <div className="cb-exploring-card">
                <div style={{ fontSize: 20 }}>👥</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Open Source</div>
                <div style={{ fontSize: 12.5, color: '#cbd5e1' }}>Contributing to open-source and collaborating with the community.</div>
              </div>
            </div>
          </section>

          {/* 08. ACHIEVEMENTS & HIGHLIGHTS */}
          <section>
            <div className="cb-section-header">
              <h2 className="cb-section-title"><span className="cmd-prompt">&gt;</span> Achievements &amp; Highlights</h2>
            </div>
            <div className="cb-achievements-grid">
              <div className="cb-achievement-card">
                <div style={{ color: 'var(--cb-neon-green)' }}>⚡</div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>500+</div>
                <div style={{ fontSize: 11, color: 'var(--cb-text-muted)' }}>Total Commits</div>
              </div>
              <div className="cb-achievement-card">
                <div style={{ color: 'var(--cb-neon-green)' }}>📁</div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>30+</div>
                <div style={{ fontSize: 11, color: 'var(--cb-text-muted)' }}>Repositories</div>
              </div>
              <div className="cb-achievement-card">
                <div style={{ color: 'var(--cb-neon-green)' }}>👥</div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>100+</div>
                <div style={{ fontSize: 11, color: 'var(--cb-text-muted)' }}>Contributions</div>
              </div>
              <div className="cb-achievement-card">
                <div style={{ color: 'var(--cb-neon-green)' }}>⭐</div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>4+</div>
                <div style={{ fontSize: 11, color: 'var(--cb-text-muted)' }}>Major Projects</div>
              </div>
              <div className="cb-achievement-card">
                <div style={{ color: 'var(--cb-neon-green)' }}>🌐</div>
                <div style={{ fontWeight: 800, fontSize: 14, marginTop: 4 }}>Open Source</div>
                <div style={{ fontSize: 11, color: 'var(--cb-text-muted)' }}>Contributor</div>
              </div>
              <div className="cb-achievement-card">
                <div style={{ color: 'var(--cb-neon-green)' }}>🚀</div>
                <div style={{ fontWeight: 800, fontSize: 14, marginTop: 4 }}>Continuous</div>
                <div style={{ fontSize: 11, color: 'var(--cb-text-muted)' }}>Learner</div>
              </div>
            </div>
          </section>

          {/* 09. LET'S CONNECT */}
          <section>
            <div className="cb-section-header">
              <h2 className="cb-section-title"><span className="cmd-prompt">&gt;</span> Let's Connect</h2>
            </div>
            <div className="cb-connect-card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ fontSize: 14, color: '#cbd5e1' }}>
                  I'm always open to discussing new ideas, projects, or opportunities.
                </p>
                <div className="cb-connect-pills-grid">
                  <a href="https://github.com/Priya-Ranjan-0201" target="_blank" rel="noopener" className="cb-connect-pill-btn">
                    <span>🐙</span>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--cb-text-muted)', textTransform: 'uppercase' }}>Github</div>
                      <div style={{ fontSize: 12.5, fontWeight: 700 }}>Priya-Ranjan-0201</div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/priyaranjan01" target="_blank" rel="noopener" className="cb-connect-pill-btn">
                    <span>in</span>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--cb-text-muted)', textTransform: 'uppercase' }}>LinkedIn</div>
                      <div style={{ fontSize: 12.5, fontWeight: 700 }}>Connect with me</div>
                    </div>
                  </a>
                  <a href="mailto:priyaranjan01@gmail.com" className="cb-connect-pill-btn">
                    <span>✉️</span>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--cb-text-muted)', textTransform: 'uppercase' }}>Email</div>
                      <div style={{ fontSize: 12.5, fontWeight: 700 }}>priyaranjan01@gmail.com</div>
                    </div>
                  </a>
                  <a href="/Priya_Ranjan_Resume.pdf" target="_blank" rel="noopener" className="cb-connect-pill-btn">
                    <span>📄</span>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--cb-text-muted)', textTransform: 'uppercase' }}>Resume</div>
                      <div style={{ fontSize: 12.5, fontWeight: 700 }}>View my resume</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="cb-connect-visual-card">
                <img src="/images/connect_collab.jpg" alt="Collaborations" className="cb-connect-visual-img" />
                <div className="cb-connect-visual-overlay" />
                <div className="cb-connect-visual-content">
                  <div style={{ fontWeight: 700, fontSize: 14 }}>Open to Internships &amp; Collaborations</div>
                  <div style={{ fontSize: 12, color: 'var(--cb-neon-green)' }}>Let's build something amazing together! &rarr;</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
