import "./App.css";

function App() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Md. Tanvir Ahmed Tonmoy</h1>
        <h2>EEE Undergraduate | VLSI | Embedded Systems | AI Hardware</h2>
        <p>
          I am an Electrical and Electronic Engineering student at BRAC University,
          focused on VLSI, compute-in-memory, embedded systems, satellite systems,
          and hardware-aware machine learning.
        </p>

        <div className="buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          My work spans CMOS circuit design, SRAM-based compute-in-memory,
          CanSat/model satellite systems, soft robotics, PCB design, and embedded
          sensor integration.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="project">
          <h3>SRAM-Based Compute-in-Memory Architecture</h3>
          <p>
            Designed and simulated a 6T CMOS SRAM-based in-memory Boolean logic
            architecture in 45 nm technology, with Monte Carlo timing variation
            analysis and BNN system-level evaluation.
          </p>
        </div>

        <div className="project">
          <h3>45 nm CMOS Phase Locked Loop</h3>
          <p>
            Designed a CMOS PLL in Cadence Virtuoso using 45 nm GPDK, including
            PFD, charge pump, loop filter, VCO, and divide-by-48 frequency divider.
          </p>
        </div>

        <div className="project">
          <h3>BRACU Diganta CanSat</h3>
          <p>
            Worked on electronics, telemetry, sensor integration, camera system,
            and payload control for an international CanSat/model satellite project.
          </p>
        </div>

        <div className="project">
          <h3>BCI-Controlled Soft Robotic Arm</h3>
          <p>
            Developed a soft robotic rehabilitation system using pneumatic actuation,
            sensor feedback, and control algorithms for multi-DOF movement.
          </p>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>
          Cadence Virtuoso, Verilog, PCB Design, Altium, Eagle, Proteus, Arduino,
          Teensy, ESP32, Python, PyTorch, Circuit Simulation, Sensor Integration.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: tanvir.tonmoy23@gmail.com</p>
        <p>LinkedIn: Add your LinkedIn link here</p>
      </section>
    </main>
  );
}

export default App;