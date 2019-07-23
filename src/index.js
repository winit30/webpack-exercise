import {nav} from "./components/nav";
import {button} from "./button";
const getHeader = () => import("./header");

button.addEventListener("click", () => {
    getHeader().then((headerModule) => {
        document.body.appendChild(headerModule.header);
    });
});

document.body.appendChild(nav);
document.body.appendChild(button);
