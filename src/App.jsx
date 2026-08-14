import "./App.css";

const base = "/tanvir.github.io/images/";

const publications = [
  {
    title:
      "Variation-Aware SRAM Compute-in-Memory Boolean Architecture for Binary Neural Networks",
    venue: "ISVLSI 2026, Kolkata",
    status: "Accepted",
    description:
      "This work presents a 45 nm SRAM-based compute-in-memory architecture for Boolean logic operations, with circuit-level timing variation analysis and system-level evaluation using a hardware-aware binary neural network framework. The study connects Monte Carlo circuit simulation results with inference-level accuracy degradation under timing-induced XNOR errors.",
  },
  {
    title:
      "Soft Robotic Bellow-Controlled Arm with Multi-DOF Control System",
    venue: "INTCEC 2025, Chicago",
    status: "Accepted",
    description:
      "This project focuses on a low-cost soft robotic arm driven by pneumatic bellow-based actuation. The system integrates embedded sensing and feedback control to support multi-degree-of-freedom motion, with potential application in rehabilitation, assistive robotics, and accessible biomedical engineering systems.",
  },
  {
    title:
      "BRACU Diganta: An Affordable CanSat Learning Kit for Students in Developing Countries",
    venue: "IAF 2025, Sydney",
    status: "Accepted",
    description:
      "This work introduces an affordable CanSat learning platform designed to improve access to satellite and aerospace systems education. The project emphasizes embedded electronics, sensor integration, telemetry, and hands-on learning for students in resource-limited educational environments.",
  },
];

const ongoingProjects = [
  {
    title: "8T SRAM Crossbar and SRAM-Based Spiking Neural Network",
    image: `${base}sram-mac.jpg`,
    description:
      "Designing and characterizing an 8T SRAM cell in 45 nm CMOS and developing a 4×4 SRAM crossbar. The architecture will be extended toward an SRAM-based spiking neural network for neuromorphic computing applications.",
  },
  {
    title: "VHDL–FPGA Based RISC-V Processor",
    description:
      "Designing and implementing a simplified RISC-V processor for FPGA implementation using synthesizable, modular VHDL. Developing a complete VHDL testbench and verifying correct instruction execution through simulation and waveform analysis.",
  },
];

const completedProjects = [
  {
    title: "SRAM-Based Compute-in-Memory Boolean Architecture",
    image: `${base}sram-cim.jpg`,
    description:
      "Designed and simulated a 6T CMOS SRAM-based in-memory Boolean logic architecture in 45 nm technology, including transient validation, Monte Carlo timing analysis, and BNN-level evaluation.",
  },
  {
    title: "Bellow-Controlled Soft Robotic Arm",
    image: `${base}soft-robotic.jpg`,
    description:
      "A pneumatic bellow-based soft robotic arm designed for multi-DOF motion control, embedded feedback, and low-cost assistive robotics applications.",
  },
  {
    title: "45 nm CMOS Phase-Locked Loop",
    image: `${base}pll.jpg`,
    description:
      "Designed a CMOS PLL in Cadence Virtuoso using 45 nm GPDK, including PFD, charge pump, loop filter, VCO, and divide-by-48 frequency divider.",
  },
  {
    title: "SRAM-Based In-Memory Computing Architecture in VHDL",
    image: `${base}sram-cim.jpg`,
    description:
      "Designed and simulated an SRAM-based in-memory computing architecture in VHDL using Xilinx ISE, including the memory structure, compute logic, control circuitry, and an FSM for coordinating memory and compute operations. Verified the design with testbenches, simulation waveforms, and synthesized schematics.",
  },
  {
    title: "BRACU Diganta Model Satellite",
    image: `${base}diganta-satellite.jpg`,
    description:
      "Worked on embedded electronics, telemetry, sensor integration, payload logic, and hardware development for BRACU Diganta's international model satellite project.",
  },
  {
    title: "BRACU Diganta PCB System",
    image: `${base}diganta-pcb.jpg`,
    description:
      "Designed PCB systems for satellite electronics, integrating sensors, microcontrollers, communication modules, and power distribution.",
  },
  {
    title: "Air Monitoring PCB",
    image: `${base}air-monitoring-pcb.jpg`,
    description:
      "Developed a PCB-based air monitoring system for environmental sensing, embedded data acquisition, and hardware prototyping.",
  },
  {
    title: "Autonomous Agricultural Rover",
    image: `${base}agro-bot.jpg`,
    description:
      "Developed an autonomous agricultural rover platform focused on embedded control, sensor integration, navigation, and field-oriented robotics applications.",
  },
  {
    title: "CanSat Learning Kit",
    image: `${base}cansat-learning-kit.jpg`,
    description:
      "Developed an affordable CanSat learning kit concept aimed at making satellite and aerospace education more accessible for students in developing regions.",
  },
];

function PublicationCard({ publication }) {
  return (
    <article className="publication-card">
      <div className="publication-header">
        <h3>{publication.title}</h3>
        <p>
          {publication.venue} · {publication.status}
        </p>
      </div>

      <p className="publication-description">{publication.description}</p>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
        />
      )}

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="nav-name">
          Md. Tanvir Ahmed Tonmoy
        </a>

        <div className="nav-links">
          <a href="#research">Research Interests</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="eyebrow">
            EEE Undergraduate · BRAC University
          </p>

          <h1>Md. Tanvir Ahmed Tonmoy</h1>

          <h2>
            VLSI · SRAM Compute-in-Memory · Neuromorphic Hardware ·
            FPGA Design
          </h2>

          <p>
            I am an Electrical and Electronic Engineering undergraduate
            at BRAC University with research interests in VLSI design,
            SRAM compute-in-memory, neuromorphic computing, memory-based
            AI accelerators, and digital hardware design.
          </p>

          <div className="buttons">
            <a href="#publications">View Publications</a>
            <a href="#projects">View Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={`${base}profile.jpg`}
            alt="Md. Tanvir Ahmed Tonmoy"
            className="profile-img"
          />
        </div>
      </section>

      <section id="research" className="section compact-section">
        <h2>Research Interests</h2>

        <p className="research-para">
          My research interests are centered on VLSI design, SRAM
          compute-in-memory architectures, memory-based AI accelerators,
          neuromorphic computing, and digital hardware design. I am
          particularly interested in SRAM array architectures and the
          interaction between circuit-level behavior and system-level
          performance in emerging computing systems.
        </p>
      </section>

      <section id="publications" className="section">
        <h2>Publications</h2>

        <div className="publication-list">
          {publications.map((publication) => (
            <PublicationCard
              key={publication.title}
              publication={publication}
            />
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <h3 className="project-category">Ongoing Projects</h3>

        <div className="project-grid">
          {ongoingProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <h3 className="project-category">Completed Projects</h3>

        <div className="project-grid">
          {completedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>VLSI & Circuit Design</h3>

            <p>
              Cadence Virtuoso, Cadence Innovus, Cadence Genus, RTL
              Design, Xilinx ISE, FPGA Design, PSPICE, Proteus, Altium
              Designer, DesignSpark PCB, Autodesk Eagle
            </p>
          </div>

          <div className="skill-card">
            <h3>Programming & HDL</h3>

            <p>Verilog, VHDL, Python, C, C++, MATLAB</p>
          </div>

          <div className="skill-card">
            <h3>Embedded Systems</h3>

            <p>
              Arduino, Teensy, ESP32, STM32, sensor integration,
              telemetry, data acquisition, hardware prototyping
            </p>
          </div>

          <div className="skill-card">
            <h3>Machine Learning & Tools</h3>

            <p>
              PyTorch, NumPy, Pandas, Git, GitHub, VS Code, LaTeX,
              Microsoft Office
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>

        <p className="contact-note">
          I am open to research collaborations, graduate research
          opportunities, and discussions related to VLSI, SRAM
          compute-in-memory, neuromorphic computing, FPGA design, and AI
          hardware.
        </p>

        <div className="contact-links">
          <a href="mailto:tanvir.tonmoy23@gmail.com">Email</a>

          <a
            href="https://www.linkedin.com/in/md-tanvir-ahmed-tonmoy-08203b328/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.researchgate.net/profile/Md-Tanvir-Tonmoy-2?ev=hdr_xprf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ResearchGate
          </a>

          <a
            href="/tanvir.github.io/cv/Tanvir_Ahmed_Tonmoy_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>

          <a
            href="https://github.com/Haka1sh1n"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;