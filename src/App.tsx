import { ReportLayout } from "./Layouts/Report";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <ReportLayout header={<Header />} sidebar={<Sidebar />} footer={<h1>Hello World</h1>}>
      <div style={{ height: "10000px" }}>
        <h1>Hello World</h1>
      </div>
    </ReportLayout>
  );
}

export default App;
