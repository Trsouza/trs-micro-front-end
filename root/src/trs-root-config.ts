import { registerApplication, start, LifeCycles } from "single-spa";
import url from "url";


// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@trs/navbar",
//   app: () => System.import("@trs/navbar"),
//   activeWhen: ["/"]
// });

registerApplication(
  'navbar',
  () => System.import<LifeCycles>('@trs/navbar'),
  () => true,
  { domElement: document.getElementById('nav-container')},
)

registerApplication(
  "app1",
  () => System.import<LifeCycles>("@trs/app1"),
  () => window.location.pathname === "/app1",
  // () => url.parse(location.href).path.startsWith('/app1'),
  { domElement: document.getElementById("app1-react")},
)

registerApplication(
  "app2",
  () => System.import<LifeCycles>("@trs/app2"),
  () => window.location.pathname === "/app2",
  { domElement: document.getElementById("app2-vue")},
)

registerApplication(
  "app3",
  () => System.import<LifeCycles>("@trs/app3"),
  () => window.location.pathname === "/app3",
  { domElement: document.getElementById("app3-react")},
)

registerApplication(
  "app4",
  () => System.import<LifeCycles>("@trs/app4"),
  () => window.location.pathname === "/app4",
  { domElement: document.getElementById("app4-angular")},
)

console.log(window.location.pathname)
start({
  urlRerouteOnly: true,
});
