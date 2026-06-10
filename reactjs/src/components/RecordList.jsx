import RecordCard from "./RecordCard.jsx";

function RecordList({ records }) {
  if (records.length === 0) {
    return <div className="empty-box">Không có hồ sơ phù hợp</div>;
  }

  return (
    <div className="record-list">
      {records.map((record) => (
        <RecordCard key={record.id} record={record} />
      ))}
    </div>
  );
}

export default RecordList;
