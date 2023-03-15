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
          <h2>Hei! Vi er Dukkling.</h2>
          <p>
            Vi holder på å utvikle en app som skal gjøre det lettere å holde
            styr på alt som skal gjøres når en er småbarnsforelder. Målet vårt
            er å få mer plass i hodet; at det skal bli plass til annet enn den
            eviglange to-do-lista.
            <br />
            <br />
            Frigjøring av tid, bedre arbeidsfordeling i paret og effektivisering
            av familieadministrasjonen er det vi håper appen kan bidra med.
            <br />
            <br />
          </p>
        </section>
        <section className="testing">
          <h2>Vi søker testere</h2>
          <p>
            Vi søker nå 30 par med barn i alderen 1-4 år som vil bruke appen i
            tre uker og svare på et spørreskjema i etterkant. Appen er på ingen
            måte ferdig, men vi har laget en minimumsversjon for å teste om
            idéen fungerer og om dette er noe folk vil ha.
          </p>
          <p>
            Send en mail til:{" "}
            <a href="mailto:hello@dukkling.com">hello@dukkling.com</a> med
            «Brukertest» i emnefeltet, så sender vi deg mer info.
          </p>
          <details>
            <summary>Les mer</summary>
            <p>
              Førsteversjonen fokuserer på fordeling av «det tredje skiftet»
              mellom partnere.
              <br />
              <br />
              Hva er «det tredje skiftet»? Det er bl.a. å huske at barnet snart
              trenger vårsko, og at det bruker størrelse 24. Eller å huske at
              det er karneval i barnehagen og planlegge kostyme.
              <br />
              <br />
              Alle de små tingene som til sammen tar mye tid, men som er viktige
              for at alle i familien skal ha det bra.
            </p>
            <p className="description">
              Du kan teste appen hvis du:
              <ul className="checklist">
                <li>
                  ✔ Føler deg overveldet av alt som skal huskes / planlegges /
                  gjøres i familien
                </li>
                <li>✔ Har minst ett barn i alderen 1- 4 år</li>
                <li>✔ Har en partner du deler oppgaver rundt barna med</li>
                <li>
                  ✔ Er motivert for å finne nye systemer sammen med partneren
                  din
                </li>
                <li>
                  ✔ Vil bidra til å skape et bedre liv for småbarnsforeldre
                </li>
              </ul>
              <br />
            </p>
          </details>
        </section>
        <section className="whoarewe">
          <h2>Hvem er vi?</h2>
          <p>
            Vi er selv fire småbarnsforeldre som er villige til å si opp jobbene
            våre for å løse tidsklemma en gang for alle.
          </p>
          <section className="founders">
            <figure>
              <img src={ellen} className="portrait" alt="portrait" />
              <figcaption>
                Ellen Wagnild-Antonsen <span className="job-title">CDO</span>
              </figcaption>
            </figure>
            <figure>
              <img src={hanneli} className="portrait" alt="portrait" />
              <figcaption>
                Hanneli Mustaparta <span className="job-title">CMO</span>
              </figcaption>
            </figure>
            <figure>
              <img src={martine} className="portrait" alt="portrait" />
              <figcaption>
                Martine Rostadmo <span className="job-title">CEO</span>
              </figcaption>
            </figure>
            <figure>
              <img src={sarah} className="portrait" alt="portrait" />
              <figcaption>
                Sarah Serussi <span className="job-title">CTO</span>
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
