import React from "react";
import Header from "./Header";
import Main from './Main';
function App() {
  return (
    <>
      <div className="app">
        <Header />

        <Main>
        <main className="main">
          <p>1/15</p>
          <p>Question?</p>
        </main>
        </Main>
      </div>
    </>
  );
}

export default App;
