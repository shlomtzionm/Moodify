import { Header } from "../header/Header";
import Routing from "../Routing";
import "./layout.css";

export function Layout(): JSX.Element {
  return (
    <div id="Layout">
      <header>
        <Header />
      </header>
      <main>
        <Routing />
      </main>
    </div>
  );
}
