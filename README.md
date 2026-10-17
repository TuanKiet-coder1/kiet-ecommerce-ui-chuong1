# E-commerce UI Improvement

## 1. Giới thiệu
Bài tập Chương 1 của Kiệt: khảo sát FAHASA và thiết kế thẻ sách cho thương hiệu minh họa Mộc. Sản phẩm tập trung vào độ rõ của tên, giá bán, giá gốc, giảm giá và khả năng hiển thị ở nhiều kích thước.

## 2. Website tham khảo
- Tên website: FAHASA.
- URL: https://www.fahasa.com/
- Khu vực khảo sát: trang chủ, danh mục, chi tiết, tìm kiếm, giỏ hàng.
- Bằng chứng và giới hạn: xem SURVEY.md. Nội dung công khai đọc được cho ba khu vực đầu và trường tìm kiếm; tương tác và trang giỏ hàng chưa được kiểm chứng.

## 3. Chức năng
- Hiển thị 4 sách mẫu, mỗi sách có ảnh SVG, tên, giá và nút mở thông tin.
- Hiển thị giá gốc, tỷ lệ giảm và khoản tiết kiệm được đối chiếu số học.
- Nút “Xem thông tin” mở/đóng mô tả bằng details/summary.
- Điều hướng nội trang; liên kết bỏ qua điều hướng; trạng thái focus bàn phím.
- Lưới 4 cột khi rộng hơn 1100 px, 2 cột từ 600 đến 1100 px, 1 cột dưới 600 px.
- Không triển khai giỏ hàng, đặt hàng, thanh toán hoặc tìm kiếm dữ liệu.

## 4. Công nghệ
HTML5, CSS3, SVG. Không JavaScript, backend, cơ sở dữ liệu, framework hoặc CDN.

## 5. Cách chạy
Giải nén toàn bộ thư mục rồi mở index.html bằng Chrome hoặc Edge. Giữ nguyên vị trí styles.css và thư mục images/. Không cần cài gói hoặc chạy lệnh build.

## 6. Cải tiến đã thực hiện
- Dùng cùng thứ tự thông tin trên bốn thẻ để thuận tiện so sánh.
- Ghi rõ nhãn giá gốc, giá bán và tiết kiệm; không chỉ dùng màu để phân biệt.
- Không cắt tên bằng dấu ba chấm; cho phép xuống dòng và nở chiều cao.
- Dùng minmax(0, 1fr), min-width: 0 và overflow-wrap để hạn chế tràn nội dung.
- Thiết kế nút mở mô tả cao tối thiểu 44 px, có focus-visible.
- Bìa và dữ liệu mẫu do AI tạo riêng; không lấy logo hoặc ảnh bìa của FAHASA.

## 7. Hỗ trợ từ AI
ChatGPT hỗ trợ phân tích, viết HTML/CSS/SVG, giải thích mã, soạn báo cáo và kiểm tra tĩnh. Kiệt cần tự mở trang, đối chiếu khảo sát, tự điều chỉnh ít nhất một điểm và ghi nhận kết quả. Không coi bước kiểm tra của AI là bước tự thực hiện của sinh viên. Xem AI_USAGE.md, TESTING.md và HUONG_DAN_NOP.md.

## 8. Các tệp
index.html; styles.css; images/; README.md; AI_USAGE.md; SURVEY.md; TESTING.md; HUONG_DAN_NOP.md; SOURCES.md.

## 9. Thông tin nộp bài
Sinh viên: Mã Tuấn Kiệt. MSSV: 31241024731. Lớp: EE0002. Liên kết GitHub cần được bổ sung sau khi công khai repository. 

