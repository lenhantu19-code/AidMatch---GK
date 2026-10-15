/*đóng mở thanh menu trên điện thoại*/
function toggleMobileSidebar() {
  const sidebar = document.getElementById("appSidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  sidebar.classList.toggle("show");
  backdrop.classList.toggle("show");
}
/*chọn nhà tài trợ*/
function acceptDonor(donorName) {
  document.getElementById("selectedDonorInput").value = donorName;
  showToast(`Đã chọn ${donorName} vào form Phê duyệt!`, "success");
}
/*kiểm tra số lượng phân bổ*/
function validateAllocationQty() {
  const qtyInput = document.getElementById("allocationQtyInput");
  const warningText = document.getElementById("qtyWarningText");
  const alertBox = document.getElementById("approvalAlertBox");
  const alertDesc = document.getElementById("approvalAlertDesc");
  const val = parseInt(qtyInput.value) || 0;

  if (val > 100) {
    qtyInput.className = "form-control input-rose";
    warningText.style.display = "flex";
    warningText.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Vượt ${val - 100} bộ. Chỉ còn 100 bộ chưa phân bổ (500 - 400).`;
    alertBox.className = "alert-box alert-rose";
    alertDesc.innerText =
      "Giảm số lượng xuống ≤ 100 bộ và chờ cam kết CK-019 xác nhận. Không giữ chỗ thêm khi còn lỗi.";
  } else {
    qtyInput.className = "form-control";
    warningText.style.display = "none";
    alertBox.className = "alert-box alert-green";
    alertDesc.innerText = "Số lượng hợp lệ. Sẵn sàng phê duyệt.";
  }
}
/*loading xếp hạng AI*/
function triggerAIRanking() {
  const statusText = document.getElementById("matchingStatusText");
  statusText.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> AI đang tính toán ma trận xếp hạng...`;
  showToast("AI đang phân tích & xếp hạng nguồn lực tối ưu...", "info");

  setTimeout(() => {
    statusText.innerHTML = `<span class="dot-pulse"></span> Xếp hạng hoàn tất!`;
    showToast("Hoàn tất xếp hạng nguồn lực cho nhu cầu đã chọn!", "success");
  }, 1200);
}
/*lưu ghi chú đề xuất ghép */
function saveDecisionNote() {
  showToast("Đã lưu đề xuất ghép kèm ghi chú thành công!", "success");
}
/*phê duyệt phân bổ*/
function handleAllocationSubmit(event) {
  event.preventDefault();
  const qty =
    parseInt(document.getElementById("allocationQtyInput").value) || 0;

  if (qty > 100) {
    showToast(
      "Chưa thể phê duyệt: Số lượng vượt quá 100 bộ cho phép!",
      "warning",
    );
    return;
  }
  showToast("Đã tạo phê duyệt phân bổ mới thành công!", "success");
}

function updateMatchingInput() {
  const selectedReq = document.getElementById("requestSelect").value;
  showToast(`Đã tải dữ liệu nguồn lực cho nhu cầu ${selectedReq}`, "info");
}
/*hiển thị thông báo toast*/
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  let bg = "#1e293b";
  if (type === "success") bg = "#059669";
  if (type === "warning") bg = "#d97706";

  toast.style.cssText = `position: fixed; bottom: 20px; right: 20px; z-index: 9999; background: ${bg}; color: #fff; padding: 12px 18px; border-radius: 10px; font-size: 13px; font-weight: 600; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: opacity 0.3s;`;
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
