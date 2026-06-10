let currentFilter = "Tất cả";

const recordList = document.getElementById("recordList");
const countBox = document.getElementById("countBox");
const addBtn = document.getElementById("addBtn");
const message = document.getElementById("message");
const filterButtons = document.querySelectorAll(".filter-group button");

function getStatusClass(status) {
    if (status === "Hoàn thành") return "done";
    if (status === "Đang triển khai") return "doing";
    return "not-started";
}

function getBadgeClass(status) {
    if (status === "Hoàn thành") return "bg-success";
    if (status === "Đang triển khai") return "bg-warning text-dark";
    return "bg-secondary";
}

function getIcon(status) {
    if (status === "Hoàn thành") return "✓";
    if (status === "Đang triển khai") return "↻";
    return "⏱";
}

function renderRecords() {
    const filteredRecords = currentFilter === "Tất cả" ? records : records.filter(item => item.status === currentFilter);

    countBox.textContent = `${filteredRecords.length} hồ sơ`;
    recordList.innerHTML = "";

    if (filteredRecords.length === 0) {
        recordList.innerHTML = `<div class="alert alert-light text-center">Không có hồ sơ phù hợp</div>`;
        return;
    }

    filteredRecords.forEach(item => {
        const card = document.createElement("div");
        card.className = `record-card ${getStatusClass(item.status)}`;
        card.innerHTML = `
            <div class="d-flex justify-content-between gap-3 align-items-start">
                <div>
                    <div class="record-title">▦ ${item.schoolName}</div>
                    <div class="record-unit">⌖ ${item.unit}</div>
                </div>
                <span class="status-badge ${getBadgeClass(item.status)}">${getIcon(item.status)} ${item.status}</span>
            </div>
            <p class="record-desc">${item.description}</p>
        `;
        recordList.appendChild(card);
    });
}

function clearForm() {
    document.getElementById("schoolName").value = "";
    document.getElementById("unit").value = "";
    document.getElementById("status").value = "";
    document.getElementById("description").value = "";
}

addBtn.addEventListener("click", function () {
    const schoolName = document.getElementById("schoolName").value.trim();
    const unit = document.getElementById("unit").value;
    const status = document.getElementById("status").value;
    const description = document.getElementById("description").value.trim();

    if (schoolName === "" || unit === "" || status === "" || description === "") {
        message.innerHTML = `<div class="alert alert-danger py-2">Vui lòng nhập đầy đủ thông tin</div>`;
        return;
    }

    records.unshift({
        id: Date.now(),
        schoolName: schoolName,
        unit: unit,
        status: status,
        description: description
    });

    clearForm();
    message.innerHTML = `<div class="alert alert-success py-2">Đã thêm hồ sơ mới</div>`;
    renderRecords();
});

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        filterButtons.forEach(btn => {
            btn.classList.remove("btn-primary", "active");
            btn.classList.add("btn-light");
        });

        this.classList.remove("btn-light");
        this.classList.add("btn-primary", "active");
        currentFilter = this.dataset.filter;
        renderRecords();
    });
});

renderRecords();
