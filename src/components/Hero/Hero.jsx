import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-wrapper">
          {/* LEFT SIDE - TEXT CONTENT */}
          <div className="hero-content">
            <div className="content-inner">
              <p className="hero-greeting">Welcome to my Portfolio</p>

              <h1 className="hero-title">
                <span className="title-word">Shireesha</span>
                <span className="title-word">Pulaganti</span>
              </h1>

              <h2 className="hero-subtitle">Full Stack Developer</h2>

              <p className="hero-description">
                Crafting beautiful, scalable web applications with modern technologies. Specialized in Java, Spring Boot, and React.
              </p>

              <div className="hero-buttons">
                <a href={`${import.meta.env.BASE_URL}Shireesha_Pulaganti_Resume.pdf`} download className="btn btn-primary">
                  <span className="btn-text">Download Resume</span>
                  <span className="btn-icon">↓</span>
                </a>

                <a href="#projects" className="btn btn-secondary">
                  <span className="btn-text">View My Work</span>
                  <span className="btn-icon">→</span>
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - 3D PROFILE & ANIMATIONS */}
          <div className="hero-visual">
            {/* 3D ROTATING CARD */}
            <div className="perspective-container">
              <div className="card-3d">
                <div className="card-inner">
                  <div className="card-face card-front">
                    <div className="profile-container">
                      <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Shireesha" className="profile-image" />
                      <div className="profile-glow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ANIMATED FLOATING ELEMENTS */}
            <div className="floating-elements">
              <div className="float-item float-1">
                <div className="float-card java-card">
                  <span className="float-icon">☕</span>
                  <p>Java</p>
                </div>
              </div>

              <div className="float-item float-2">
                <div className="float-card react-card">
                  <span className="float-icon">⚛️</span>
                  <p>React</p>
                </div>
              </div>

              <div className="float-item float-3">
                <div className="float-card spring-card">
                  <span className="float-icon">🌱</span>
                  <p>Spring Boot</p>
                </div>
              </div>

              <div className="float-item float-4">
                <div className="float-card cloud-card">
                  <span className="float-icon">☁️</span>
                  <p>Azure</p>
                </div>
              </div>

              <div className="float-item float-5">
                <div className="float-card db-card">
                  <span className="float-icon">🗄️</span>
                  <p>SQL</p>
                </div>
              </div>
            </div>

            {/* ANIMATED BACKGROUND SHAPES */}
            <div className="bg-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-header">
            <h2>About Me</h2>
            <div className="header-line"></div>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="about-intro">
                I'm a passionate Full Stack Developer with expertise in building enterprise-grade applications using modern technologies.
              </p>

              <p className="about-text">
                My journey in web development started with a curiosity about how things work on the internet. Over the years, I've honed my skills in both backend and frontend development, always focusing on clean code and user-centric design.
              </p>

              <p className="about-text">
                I love tackling complex problems and turning them into elegant solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
              </p>
            </div>

            <div className="about-skills-section">
              <h3>Core Competencies</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon backend-icon">
                    <span>⚙️</span>
                  </div>
                  <h4>Backend</h4>
                  <p>Java, Spring Boot, REST APIs, Microservices</p>
                </div>

                <div className="skill-item">
                  <div className="skill-icon frontend-icon">
                    <span>🎨</span>
                  </div>
                  <h4>Frontend</h4>
                  <p>React, JavaScript, CSS, Responsive Design</p>
                </div>

                <div className="skill-item">
                  <div className="skill-icon database-icon">
                    <span>🔗</span>
                  </div>
                  <h4>Database</h4>
                  <p>SQL Server, Database Design, Optimization</p>
                </div>

                <div className="skill-item">
                  <div className="skill-icon cloud-icon">
                    <span>☁️</span>
                  </div>
                  <h4>Cloud</h4>
                  <p>Azure, Deployment, CI/CD Pipelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;