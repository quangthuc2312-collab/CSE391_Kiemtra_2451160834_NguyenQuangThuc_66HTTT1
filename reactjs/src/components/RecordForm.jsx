import { useState } from "react";

function RecordForm({ onAddRecord }) {
  const [schoolName, setSchoolName] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!schoolName || !department || !status || !description) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    onAddRecord({
      schoolName,
      department,
      status,
      description
    });

    setSchoolName("");
    setDepartment("");
    setStatus("");
    setDescription("");
  };

  return (
    <div className="card form-card">
      <div className="card-body">
        <h5 className="mb-4 text-primary">⊕ Thêm hồ sơ mới</h5>

        <form onSubmit={handleSubmit}>
          <label className="form-label">Tên trường</label>
          <input
            className="form-control mb-3"
            placeholder="VD: Trường THPT Nguyễn Huệ"
            value={schoolName}
            onChange={(event) => setSchoolName(event.target.value)}
          />

          <label className="form-label">Đơn vị quản lý</label>
          <select
            className="form-select mb-3"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="">-- Chọn đơn vị --</option>
            <option value="Phòng GD&ĐT TP. Thủy Lợi">Phòng GD&ĐT TP. Thủy Lợi</option>
            <option value="Phòng GD&ĐT H. Thủy Nguyên">Phòng GD&ĐT H. Thủy Nguyên</option>
            <option value="Phòng GD&ĐT Q. Hồng Bàng">Phòng GD&ĐT Q. Hồng Bàng</option>
            <option value="Phòng GD&ĐT Q. Lê Chân">Phòng GD&ĐT Q. Lê Chân</option>
          </select>

          <label className="form-label">Trạng thái chuyển đổi</label>
          <select
            className="form-select mb-3"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="">-- Chọn trạng thái --</option>
            <option value="Chưa bắt đầu">Chưa bắt đầu</option>
            <option value="Đang triển khai">Đang triển khai</option>
            <option value="Hoàn thành">Hoàn thành</option>
          </select>

          <label className="form-label">Mô tả tiến độ</label>
          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Mô tả tình hình chuyển đổi số..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>

          <button className="btn btn-primary w-100" type="submit">
            + Thêm hồ sơ
          </button>
        </form>
      </div>
    </div>
  );
}

export default RecordForm;
