# AI Usage Log

## 1. Công cụ AI
ChatGPT trong phiên làm bài ngày 17/10/2026.

## 2. Mục đích sử dụng
Đọc đề; truy xuất nguồn công khai; phân tích yêu cầu; thiết kế thẻ sách; tạo HTML/CSS và SVG; viết báo cáo; rà soát giá và tài nguyên nội bộ.

## 3. Prompt đã sử dụng
### Yêu cầu thực tế của người dùng
“Bạn là 1 chuyên gia phát triển ứng dụng với 50 năm kinh nghiệm và hiện tại nhiệm vụ của bạn là làm bài tập về nhà cho Kiệt, Yêu cầu làm nghiêm túc, trình bày học thuật, dễ nhìn và nghiên cứu kĩ. Nếu có thắc mắc gì hãy hỏi tôi thêm”.

### Các chỉ dẫn triển khai do AI cụ thể hóa từ đề
Các đoạn dưới là bản tóm tắt chỉ dẫn AI dùng để tổ chức công việc, không phải lịch sử hội thoại do Kiệt đã tự nhập:
1. Phân tích FAHASA tại năm khu vực; chỉ dùng chi tiết có bằng chứng; tách quan sát nội dung, đánh giá và đề xuất; ghi rõ phần không truy cập được.
2. Chọn cải tiến thẻ sách; giải thích bố cục, ngữ nghĩa HTML, CSS Grid, các điểm ngắt và tiêu chí sử dụng trước khi tạo mã.
3. Tạo một trang HTML5 với CSS3 tách riêng; ít nhất bốn sản phẩm; ảnh, tên, giá và thao tác; không backend, cơ sở dữ liệu hoặc thư viện không cần thiết.
4. Đối chiếu tên, đường dẫn tài nguyên, tỷ lệ giảm, số tiền tiết kiệm và các thành phần hỗ trợ truy cập; không ghi kiểm thử trình duyệt nếu chưa chạy.

## 4. Kết quả AI đề xuất
Chọn thương hiệu mẫu Mộc; bốn thẻ sách; ưu tiên đầy đủ tên và cặp giá; một nút mở thông tin cho mỗi sách bằng details/summary; lưới thay đổi 4/2/1 cột. Các giả thuyết về phân tán chú ý và khó so sánh giá chưa được kiểm thử với người dùng.

## 5. Kiểm tra và điều chỉnh
- Đã thực hiện bởi AI: đọc nguồn; kiểm tra tĩnh số sản phẩm, tài nguyên, liên kết và số học giá; rà soát CSS về các điểm ngắt, chiều cao thao tác và focus.
- Điều chỉnh bởi AI khi rà soát: đổi chú thích CSS từ “mobile first” sang “các điểm ngắt responsive” vì mã thực tế tổ chức từ màn hình lớn xuống nhỏ. Đây là sửa chú thích, không phải bằng chứng Kiệt tự cải tiến giao diện.
- Không sử dụng: khẳng định AI được xem là khảo sát tương tác thực tế; số liệu chuyển đổi, tốc độ trang, tỷ lệ hài lòng không có đo lường; ảnh bìa thương mại lấy từ website tham khảo.
- Chưa thực hiện: Kiệt tự chạy, khảo sát tương tác, tự chỉnh một điểm, công khai GitHub.


## 6. Nhật ký của Kiệt sau khi tự làm
- Ngày và thiết bị: Ngày thực hiện 17/10/2026, trình duyệt, kích thước đã thử
- Vấn đề tự phát hiện: lỗi font chữ
- File và đoạn mã đã sửa: /* 6. Chỉnh font tiếng Việt và cải thiện giao diện */

/* Màu sắc tổng thể */
:root {
  --ink: #203b32;
  --muted: #596b62;
  --green: #205744;
  --paper: #f7f8f3;
  --line: #dce5dc;
}

/* Dùng font phổ biến, không cần tải từ Internet */
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Đồng bộ font cho thương hiệu và các tiêu đề */
.brand,
h1,
h2,
h3,
.hero-note p {
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: normal;
}

/* Tiêu đề chính: tăng khoảng cách dòng để dấu rõ hơn */
h1 {
  font-size: clamp(1.9rem, 3.8vw, 3.25rem);
  font-weight: 700;
  line-height: 1.3;
}

/* Tiêu đề các khu vực */
h2 {
  font-size: clamp(1.45rem, 2.5vw, 1.8rem);
  font-weight: 700;
  line-height: 1.45;
}

/* Đầu trang */
.site-header {
  box-shadow: 0 3px 16px rgb(32 59 50 / 5%);
}

nav a:hover {
  color: var(--green);
  text-underline-offset: 6px;
}

/* Phần giới thiệu */
.hero-copy {
  font-size: 16px;
  line-height: 1.8;
}

.hero-note {
  background: #e8efe4;
  border: 1px solid #d5e1d1;
  border-radius: 20px;
}

.hero-note p {
  font-size: clamp(1.25rem, 2.3vw, 1.65rem);
  font-weight: 600;
  line-height: 1.6;
}

/* Nút chuyển đến tủ sách */
.hero-link {
  padding: 12px 18px;
  border: 1px solid var(--green);
  border-radius: 12px;
  background: var(--green);
  color: #fff;
}

.hero-link:hover {
  background: #173f32;
}

/* Thẻ sách */
.product-card {
  border-radius: 16px;
  box-shadow: 0 6px 20px rgb(32 59 50 / 6%);
}

.product-art {
  background: #f0eee5;
}

.product-body {
  padding: 20px;
}

.product-card h3 {
  font-weight: 700;
  line-height: 1.5;
}

.discount {
  padding: 5px 10px;
  border-radius: 8px;
  background: var(--sale);
  color: #fff;
}

/* Nút mở mô tả */
summary {
  min-height: 48px;
  border-radius: 10px;
}

.description {
  line-height: 1.75;
}

/* Hiệu ứng khi dùng chuột */
@media (hover: hover) {
  .product-card:hover {
    border-color: #9ab7a1;
    box-shadow: 0 10px 28px rgb(32 59 50 / 12%);
  }
}

/* Điều chỉnh riêng trên điện thoại */
@media (max-width: 599px) {
  .hero-note {
    padding: 22px;
  }

  .product-body {
    padding: 18px;
  }

  .hero-link {
    width: 100%;
  }
}
- Vì sao sửa và kết quả trước/sau: lỗi font chữ, mất thẩm mĩ và đã đổi sang font chữ khác
- Kiểm thử lại: đã thử lại với kích thước màn hình lap top và điện thoại ( 390 X 844)
