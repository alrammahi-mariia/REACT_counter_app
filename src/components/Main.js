import Reach from "react";

const Main = (props) => {
  return (
    <main>
      <div className="circle">
        <h1>0</h1>
      </div>
      <div class="buttons">
        <div id="button">
          <button>Add five</button>
        </div>
        <div id="button">
          <button>Add one</button>
        </div>
        <div id="button">
          <button>Reset</button>
        </div>
        <div id="button">
          <button>Remove one</button>
        </div>
        <div id="button">
          <button>Remove five</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
