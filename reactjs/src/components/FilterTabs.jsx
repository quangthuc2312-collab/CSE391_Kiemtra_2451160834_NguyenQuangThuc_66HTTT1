function FilterTabs({ currentFilter, onChangeFilter }) {
  const tabs = ["Tất cả", "Chưa bắt đầu", "Đang triển khai", "Hoàn thành"];

  return (
    <div className="filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={currentFilter === tab ? "tab-btn active" : "tab-btn"}
          onClick={() => onChangeFilter(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
