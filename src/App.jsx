import "./App.css";
import img from "./assets/science.png";

function App() {
  function SectionH2({ text }) {
    return (
      <header className="header">
        <h2 className="header-h2">{text}</h2>
      </header>
    );
  }

  function Item({ h3Text, pText }) {
    return (
      <div className="item">
        <h3 className="h3">{h3Text}</h3>
        <div className="p-container">
          <p className="p">{pText}</p>
        </div>
      </div>
    );
  }

  function Square({ text }) {
    return (
      <div className="square">
        <p className="squere-p">{text}</p>
      </div>
    );
  }

  return (
    <>
      <header className="mainHeader">
        <h1 className="mainHeader-h1">React Boilerplate</h1>
        <p className="mainHeader-p">Fast and ready to use react boilerplate</p>
        <img src={img} alt="" />
      </header>
      <section className="gsSection">
        <SectionH2 text="Getting Started" />
        <Item h3Text="Clone git repo" pText="https://github.com/GrzeCHu-a11y/react-boilerplate.git" />
        <Item h3Text="Run npm install" pText="npm run install / or npm i" />
        <Item h3Text="Run npm dev" pText="npm run dev" />
      </section>
      <section>
        <SectionH2 text="Reasons why to use my Boilerplate" />
        <div className="squares-container">
          <Square text="Ready to use after installation" />
          <Square text="Speed by using vite" />
          <Square text="Css modules ready to use" />
          <Square text="React router is already configured" />
          <Square text="Speed by using vite" />
          <Square text="Css modules ready to use" />
        </div>
      </section>
    </>
  );
}

export default App;
