const App = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        style: { height: "100%" },
      },
      React.createElement(ExcalidrawLib.Excalidraw),
    ),
  );
};

const excalidrawWrapper = document.getElementById("excalidraw-app");
const root = ReactDOM.createRoot(excalidrawWrapper);
root.render(React.createElement(App));
