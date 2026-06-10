function RecordCard({ record }) {
  const statusClass = record.status === "Hoàn thành"
    ? "success"
    : record.status === "Đang triển khai"
    ? "warning"
    : "secondary";

  return (
    <div className={`record-card ${statusClass}`}>
      <div className="record-head">
        <h5>▦ {record.schoolName}</h5>
        <span className={`status-badge ${statusClass}`}>
          {record.status}
        </span>
      </div>

      <p className="department">⌾ {record.department}</p>
      <p className="description">{record.description}</p>
    </div>
  );
}

export default RecordCard;
