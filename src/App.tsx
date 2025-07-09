import { ReportLayout } from "./Layouts/Report";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Report } from "./pages/Report";

function App() {
  return (
    <ReportLayout header={<Header />} sidebar={<Sidebar />} footer={<h1>Footer goes here</h1>}>
      <Report />
    </ReportLayout>
  );
}

export default App;
