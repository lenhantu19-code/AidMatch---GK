# AidMatch – Bảng ghép & Phân bổ

## 1. Giới thiệu dự án

**AidMatch** là giao diện web hỗ trợ điều phối viên quản lý nhu cầu hỗ trợ, ghép nối nguồn lực tài trợ và thực hiện phân bổ nguồn lực cho các nhu cầu đã được phê duyệt.

Dự án tập trung vào giao diện **Bảng ghép & Phân bổ**, giúp điều phối viên theo dõi số lượng đã duyệt, số lượng đã phân bổ, lựa chọn nhà tài trợ và kiểm tra điều kiện trước khi phê duyệt phân bổ mới.

Đây là sản phẩm thực hành thuộc học phần **Phát triển ứng dụng Web cơ bản**, sử dụng HTML5, CSS3 và JavaScript thuần.

## 2. Mục tiêu dự án

- Xây dựng giao diện quản lý phân bổ nguồn lực trực quan, dễ sử dụng.
- Hiển thị thông tin nhu cầu hỗ trợ và nguồn lực tài trợ.
- Mô phỏng chức năng AI xếp hạng nguồn lực phù hợp.
- Kiểm tra số lượng phân bổ để hạn chế phân bổ vượt mức cho phép.
- Hỗ trợ lựa chọn nhà tài trợ và lập đề xuất phân bổ.
- Thiết kế giao diện tương thích với máy tính và thiết bị di động.

## 3. Công nghệ sử dụng

| Công nghệ | Vai trò |
|---|---|
| HTML5 | Xây dựng cấu trúc và nội dung giao diện |
| CSS3 | Thiết kế giao diện, bố cục, màu sắc, hiệu ứng và responsive |
| JavaScript | Xử lý sự kiện, kiểm tra dữ liệu và tương tác với giao diện |
| Font Awesome 6.4.0 | Cung cấp biểu tượng cho các thành phần giao diện |
| Google Fonts – Inter | Sử dụng phông chữ Inter |
| Local assets | Sử dụng ảnh nền `nen.jpg` |

Dự án hiện sử dụng JavaScript thuần, không yêu cầu framework frontend như React hoặc Vue.

## 4. Cấu trúc thư mục

```text
AidMatch/
├── index.html       # Hoặc tên file HTML hiện tại
├── webgk.css        # File định dạng giao diện
├── webgk.js         # File xử lý chức năng
├── nen.jpg          # Ảnh nền giao diện
└── README.md        # Tài liệu giới thiệu dự án
```

**Lưu ý:** Thay `index.html` bằng tên file HTML thực tế của bạn nếu đang sử dụng tên khác. Các file CSS, JavaScript và ảnh nền cần được đặt đúng đường dẫn được khai báo trong HTML/CSS.

## 5. Các chức năng chính

### 5.1. Giao diện điều phối

- Thanh header hiển thị logo AidMatch, thông báo và thông tin điều phối viên.
- Sidebar cung cấp các mục điều hướng chức năng.
- Hiển thị mục đang được chọn bằng màu sắc và đường viền.
- Hỗ trợ đóng/mở sidebar trên màn hình nhỏ.

### 5.2. Đầu vào ghép nguồn lực

- Lựa chọn nhu cầu đã được phê duyệt.
- Lựa chọn khu vực phân bổ.
- Nhập hạn giao tối đa.
- Hiển thị thông báo khi thay đổi nhu cầu.
- Mô phỏng quá trình AI phân tích và xếp hạng nguồn lực.

### 5.3. Thống kê phân bổ

Giao diện minh họa các chỉ số:

- Số lượng nhu cầu đã duyệt.
- Số lượng đã phân bổ.
- Số lượng đã nhận.
- Số lượng tối đa có thể phân bổ mới.

Dữ liệu minh họa hiện tại:

| Chỉ số | Giá trị |
|---|---:|
| Nhu cầu đã duyệt | 500 bộ |
| Đã phân bổ | 400 bộ |
| Đã nhận | 300 bộ |
| Tối đa phân bổ mới | 100 bộ |

Công thức tính số lượng tối đa có thể phân bổ mới:

**Số lượng còn có thể phân bổ = Số lượng đã duyệt − Số lượng đã phân bổ**

Ví dụ: 500 − 400 = 100 bộ.

Số lượng đã nhận được hiển thị riêng và không tiếp tục trừ khỏi số lượng đã phân bổ.

### 5.4. Xếp hạng nguồn lực

- Hiển thị nhà tài trợ được xếp hạng ưu tiên.
- Trình bày các tiêu chí phù hợp như danh mục hàng hóa, số lượng, địa bàn và thời gian giao.
- Mô phỏng trạng thái đang xử lý và hoàn tất xếp hạng.
- Cho phép chấp nhận đề xuất nhà tài trợ.
- Hiển thị thông báo khi lưu ghi chú đề xuất ghép.

### 5.5. Phê duyệt phân bổ

Form phê duyệt gồm:

- Nguồn lực đã chọn.
- Cam kết tài trợ.
- Số lượng phân bổ.
- Ngày giao dự kiến.
- Điều phối viên phụ trách.
- Lý do phân bổ.

Chức năng kiểm tra số lượng:

- Nếu số lượng không vượt quá 100 bộ, hệ thống hiển thị trạng thái hợp lệ theo giới hạn số lượng.
- Nếu số lượng vượt 100 bộ, hệ thống hiển thị cảnh báo và thông báo không thể phê duyệt.
- Khi gửi form, JavaScript ngăn hành vi gửi mặc định của trình duyệt để kiểm tra dữ liệu trước.

**Lưu ý:** Phiên bản hiện tại mới kiểm tra giới hạn số lượng. Điều kiện cam kết tài trợ được xác nhận và các điều kiện nghiệp vụ khác cần được bổ sung trước khi sử dụng trong thực tế.

### 5.6. Thông báo Toast

Hệ thống sử dụng thông báo nổi để phản hồi thao tác của người dùng.

Các loại thông báo:

- `info`: thông tin.
- `success`: thao tác thành công.
- `warning`: cảnh báo.

Thông báo tự động mờ dần và được xóa khỏi giao diện sau một khoảng thời gian.

## 6. Thiết kế giao diện

Giao diện sử dụng phong cách dashboard quản trị hiện đại:

- Tông màu xanh dương và xanh ngọc, phù hợp với chủ đề hỗ trợ cộng đồng.
- Các thẻ thống kê có hiệu ứng khi rê chuột.
- Bảng dữ liệu trình bày rõ ràng, dễ theo dõi.
- Form nhập liệu có trạng thái cảnh báo.
- Sử dụng Flexbox và CSS Grid để tổ chức bố cục.
- Sử dụng Media Queries để điều chỉnh giao diện theo kích thước màn hình.

## 7. Hướng dẫn chạy dự án

### Bước 1: Chuẩn bị môi trường

Cài đặt Visual Studio Code và trình duyệt web như Google Chrome.

### Bước 2: Mở thư mục dự án

Mở thư mục chứa các file HTML, CSS, JavaScript và ảnh nền trong VS Code.

### Bước 3: Kiểm tra liên kết file

Trong file HTML, kiểm tra các dòng:

```html
<link rel="stylesheet" href="webgk.css" />
```

```html
<script src="webgk.js"></script>
```

Đảm bảo tên file và đường dẫn chính xác.

### Bước 4: Chạy giao diện

Mở file HTML bằng trình duyệt hoặc sử dụng tiện ích Live Server trong VS Code.

Để tải Font Awesome và Google Fonts, thiết bị cần có kết nối Internet.

## 8. Hạn chế hiện tại

- Dữ liệu đang là dữ liệu minh họa được khai báo trực tiếp trong HTML.
- Chức năng AI chỉ mô phỏng trạng thái xử lý, chưa kết nối mô hình AI thực tế.
- Các thông báo lưu và phê duyệt hiện chưa ghi dữ liệu vào cơ sở dữ liệu.
- Chưa có hệ thống đăng nhập và phân quyền người dùng thực tế.
- Điều kiện phê duyệt chưa kiểm tra đầy đủ trạng thái cam kết tài trợ.
- Dữ liệu thống kê chưa tự động cập nhật theo các thao tác phân bổ.


## 10. Tác giả và mục đích

**Tên dự án:** AidMatch
- Điều phối viên - Bảng ghép & Phân bổ

**Mục đích:** Bài tập thực hành học phần Phát triển ứng dụng Web cơ bản.

**Phạm vi:** Xây dựng giao diện frontend và mô phỏng các chức năng điều phối nguồn lực hỗ trợ.

---
