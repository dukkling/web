import React from "react";
import logo from "./logo.svg";
import ellen from "./ellen_1.svg";
import hanneli from "./hanneli_1.svg";
import martine from "./martine_1.svg";
import sarah from "./sarah_1.svg";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Livet med små barn = kaos.</h1>
      </header>
      <main className="main">
        <section className="about">
          <h2>...og vi vil gjøre noe med det</h2>
          <p>
            Vi i Dukkling holder på å utvikle en app som skal gjøre det lettere å holde
            styr på alt som skal gjøres når en er småbarnsforelder. 
          </p>
        </section>
        <section className="testing">
          <h2>Vil du teste appen?</h2>
          <p>
            Vi søker deg med barn i alderen 1-4 år som vil bruke appen i
            noen uker og gi oss litt feedback i etterkant. Appen er på ingen
            måte ferdig, men vi har laget en minimumsversjon for å teste om
            idéen fungerer og om dette er noe folk vil ha.
          </p>
          <p>
            Send en mail til:{" "}
            <a href="mailto:hello@dukkling.com">hello@dukkling.com</a> med
            «Brukertest» i emnefeltet, så sender vi deg mer info.
          </p>
          <br />
          <br />
            <p>
              Førsteversjonen av appen fokuserer på fordeling av «det tredje skiftet»
              mellom partnere. Og hva er «det tredje skiftet»? Det er bl.a. å huske at barnet snart
              trenger vårsko, og at det bruker størrelse 24. Eller å huske at
              det er karneval i barnehagen og planlegge kostyme.
              <br />
              Det er alle de små tingene som til sammen tar mye tid, men som er viktige
              for at alle i familien skal ha det bra. Målet vårt er å få mer plass i hodet; at det skal bli plass 
              til annet enn den eviglange to-do-lista.
            </p>
        
        </section>
        <section className="whoarewe">
          <h2>Hvem er vi?</h2>
          <p>
            Vi er selv fire småbarnsmødre som har bestemt oss for å ta et oppgjør med kaoset.
          </p>
          <section className="founders">
            <figure>
              <img src={ellen} className="portrait" alt="portrait" />
              <figcaption>
                Ellen Wagnild-Antonsen <span className="job-title">Chief Design Officer</span>
              </figcaption>
            </figure>
            <figure>
              <img src={hanneli} className="portrait" alt="portrait" />
              <figcaption>
                Hanneli Mustaparta <span className="job-title">Chief Marketing Officer</span>
              </figcaption>
            </figure>
            <figure>
              <img src={martine} className="portrait" alt="portrait" />
              <figcaption>
                Martine Rostadmo <span className="job-title">Chief Executive Officer</span>
              </figcaption>
            </figure>
            <figure>
              <img src={sarah} className="portrait" alt="portrait" />
              <figcaption>
                Sarah Serussi <span className="job-title">Chief Technology Officer</span>
              </figcaption>
            </figure>
          </section>
        </section>
        <section className="vision">
          <p className="punchline">
            Dukkling gir deg kontroll på hverdagen og gjør det litt enklere å
            være småbarnsforelder
          </p>
        </section>
      </main>
      <footer>
        <section>
          <p>
            Kontakt: <a href="mailto:hello@dukkling.com">hello@dukkling.com</a>
          </p>
          <img src={logo} className="logo" alt="logo" />
        </section>
      </footer>
    </div>
  );
};

export default App;
