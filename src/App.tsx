import { ReportLayout } from "./lib/Report";
import Header from "./lib/Header/Header";
import Sidebar from "./lib/Sidebar/Sidebar";
import { Report } from "./pages/Report";

function App() {
  return (
    <ReportLayout header={<Header />} sidebar={<Sidebar />} footer={<h1>Footer goes here</h1>}>
      <Report />
    </ReportLayout>
  );
}

export default App;
