import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Careers } from "./components/Careers";
import { ApplyEngineeringLead } from "./components/ApplyEngineeringLead";
import { ApplyGeneralInterest } from "./components/ApplyGeneralInterest";
import { Products } from "./components/Products";
import { Resources } from "./components/Resources";
import { RequestDemo } from "./components/RequestDemo";
import { FAQ } from "./components/FAQ";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "careers", Component: Careers },
      { path: "careers/apply/engineering-lead", Component: ApplyEngineeringLead },
      { path: "careers/apply/general-interest", Component: ApplyGeneralInterest },
      { path: "products", Component: Products },
      { path: "resources", Component: Resources },
      { path: "demo", Component: RequestDemo },
      { path: "faq", Component: FAQ },
      { path: "*", Component: NotFound },
    ],
  },
]);