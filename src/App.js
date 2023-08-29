import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormattedMessage, FormattedDate } from "react-intl";
import { Context } from "./components/Wrapper";

function App(props) {
  const context = useContext(Context);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select value={context.locale} onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
        </select>
        <p>
          <FormattedMessage
            id="app.header"
            defaultMessage="Edit the files and save to reload"
            values={{
              fileName: "src/App.js",
              code: (word) => <strong>{word}</strong>,
            }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.content" defaultMessage="Learn React" />
        </a>
        <FormattedMessage
          id="app.channel.plug"
          defaultMessage="Tutorial brought to you by Lokalise"
          values={{ blogName: "Lokalise" }}
        />
        <br />
        <FormattedMessage id="app.dogs_are_cute" />
        <br />
        <FormattedDate
          value={props.date}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </header>
    </div>
  );
}

export default App;
