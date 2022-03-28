const Counter = (props) => {
  return (
    <div className="counter">
      <div class="circle">{props.name}</div>
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
    </div>
  );
};

export default Counter;
