import "./App.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { Instagram } from "lucide-react";

function App() {
  // Set a fixed end time for the countdown
  const fixedEndTime: number = new Date("2024-12-01T00:00:00Z").getTime();

  return (
    <>
      <section className="container">
        <div className="clock_content">
          <h1>INTELCULATOR.COM</h1>
          <h2 className="disc">
            Intelculator is an IQ calculator website that provides accurate IQ
            results through interactive intelligence tests, helping users assess
            their cognitive abilities.
          </h2>
          <h3>Coming soon, stay tuned for something amazing!</h3>

          <FlipClockCountdown
            className="flip-clock"
            to={fixedEndTime}
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            duration={0.5}
          />

          <button className="button">Notify Me</button>
          <h6>
            This Website is being built by{" "}
            <a
              href="https://www.instagram.com/pagimos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pagimos
            </a>
          </h6>

          <div className="socials">
            <a
              href="https://www.instagram.com/intelculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={32} color="#ffffff" className="social-icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
