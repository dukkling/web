import React from "react";
import logo from "./logo.png";
import ellen from "./ellen_.png";
import hanneli from "./hanneli_.png";
import martine from "./martine_.png";
import sarah from "./sarah_.png";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Hello, we are Dukkling</h1>
      </header>
      <main className="main">
        <section className="about">
          <h2>
            Dukkling is the app that we were missing when we first became
            mothers.
            <span className="no-breaks">
              There are no breaks in parenting.{" "}
            </span>
            <span className="punchline">
              We are currently making an app that keeps track of information,
              needs, schedules and tasks related to children.
            </span>
          </h2>
        </section>
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
        <section className="vision">
          <h3>
            Dukkling digitalizes the most important part of your life so that
            you can be present
          </h3>
          <p></p>
        </section>
      </main>
      <footer>
        <section>
          <p>
            Contact: <a href="mailto:hello@dukkling.com">hello@dukkling.com</a>
          </p>
          <img src={logo} className="logo" alt="logo" />
        </section>
      </footer>
    </div>
  );
};

export default App;
