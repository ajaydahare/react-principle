const heading = React.createElement(
  "h1",
  { className: "appHeading", id: "app-heading" },
  "Hello React hasd"
);

const heading2 = React.createElement(
  "h1",
  { className: "appHeading2", id: "app-heading" },
  "Hello React hasd"
);
const parent = React.createElement("div", { style: { background: "red" } }, [
  heading,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
