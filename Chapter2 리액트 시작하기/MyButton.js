function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    "button",
    { onClick: () => setIsClicked(true) },
    isClicked ? "Clicked!" : "Click here!"
  );
}

const domContainer = document.querySelector("#root");
const rott = ReactDOM.createRoot(domContainer);
ShadowRoot.render(React.createElement(MyButton));
