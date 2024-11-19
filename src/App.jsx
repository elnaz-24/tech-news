import "./App.css";
import TabsExample from "./Navtabs";
import TextLinkExample from "./Navbar";
import DefaultExample from "./Listgroup";

function App() {
  return (
    <>
      <div className="container mt-5 " >
        <TextLinkExample />
        <TabsExample />
        <DefaultExample/>
      </div>
    </>
  );
}

export default App;
