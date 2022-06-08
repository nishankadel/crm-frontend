import DefaultLayout from "./layout/DefaultLayout";
import Entry from "./pages/entry/Entry";
import "./app.css";
import Dashboard from "./pages/entry/dashboard/Dashboard";
import AddTicket from "./pages/new-ticket/AddTicket";
function App() {
  return (
    <>
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </>
  );
}

export default App;