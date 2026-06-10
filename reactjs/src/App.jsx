import { useState } from "react";
import Header from "./components/Header.jsx";
import RecordForm from "./components/RecordForm.jsx";
import FilterTabs from "./components/FilterTabs.jsx";
import RecordList from "./components/RecordList.jsx";
import { records as dataRecords } from "./data/data.js";

function App() {
  const [records, setRecords] = useState(dataRecords);
  const [filter, setFilter] = useState("Tất cả");

  const filteredRecords = filter === "Tất cả"
    ? records
    : records.filter((item) => item.status === filter);

  const addRecord = (record) => {
    const newRecord = {
      id: Date.now(),
      ...record
    };

    setRecords([newRecord, ...records]);
  };

  return (
    <div className="page">
      <div className="container my-4">
        <Header />

        <div className="content-box p-3 p-md-4">
          <div className="row g-4">
            <div className="col-lg-4">
              <RecordForm onAddRecord={addRecord} />
            </div>

            <div className="col-lg-8">
              <div className="top-area">
                <FilterTabs currentFilter={filter} onChangeFilter={setFilter} />
                <span className="total-badge">{records.length} hồ sơ</span>
              </div>

              <RecordList records={filteredRecords} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
