import DefaultLayout from "./layout/DefaultLayout";
import Entry from "./pages/entry/Entry";
import "./app.css";
import Dashboard from "./pages/entry/dashboard/Dashboard";
function App() {
  return (
    <>
      {/* <Entry/> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </>
  );
}

export default App;
