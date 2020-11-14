import hello from "./components/demo";

hello();
const $app = document.querySelector("#app");
$app?.append((document.createElement("div").innerHTML = "hello"));
