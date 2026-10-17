# Hướng dẫn hoàn thiện và nộp bài

## 1. Điền thông tin
Thông tin đã cập nhật: Mã Tuấn Kiệt, MSSV 31241024731, lớp EE0002. Kiểm tra lại ngày nộp trước khi gửi bài.

## 2. Hoàn tất bằng chứng và phần tự làm
Mở FAHASA, thực hiện các bước trong SURVEY.md; thay nhận định chưa kiểm chứng bằng quan sát thật. Chạy giao diện theo TESTING.md. Tự sửa ít nhất một điểm và ghi AI_USAGE.md. Nếu lưu ảnh minh chứng, dùng trang không chứa thông tin cá nhân/thanh toán.

## 3. Tạo repository Public
Đăng nhập tài khoản GitHub của Kiệt; tạo repository kiet-ecommerce-ui-chuong1, chọn Public. Nếu sẽ đẩy thư mục có README này qua Git, để repository mới trống. Trước khi công khai, bảo đảm chỉ có tệp bài tập cần nộp.

### Cách tải qua giao diện GitHub
Trong repository chọn Add file → Upload files, tải toàn bộ nội dung thư mục dự án gồm cả images/, giữ index.html ở thư mục gốc, rồi commit. Không chỉ tải file ZIP: giảng viên cần xem mã trực tiếp. Không tải lại đề PDF của giảng viên nếu không cần.

### Cách dùng Git trong thư mục dự án
Các lệnh sau là hướng dẫn, chưa được thực thi thay cho sinh viên. Thay USERNAME bằng tài khoản thật và kiểm tra URL trước khi chạy.

```bash
git init
git add index.html styles.css images README.md AI_USAGE.md SURVEY.md TESTING.md HUONG_DAN_NOP.md SOURCES.md
git commit -m "Add responsive book product cards and survey"
git branch -M main
git remote add origin https://github.com/USERNAME/kiet-ecommerce-ui-chuong1.git
git push -u origin main
```

Nếu Git yêu cầu danh tính, dùng git config user.name "Họ tên của Kiệt" và git config user.email "Email GitHub của Kiệt" trong repository. Không sao chép nguyên chuỗi mẫu. Thực hiện đăng nhập theo phương thức GitHub đang hỗ trợ.

## 4. GitHub Pages
Mở Settings → Pages → Build and deployment → Source → Deploy from a branch. Chọn main và /(root), Save. Chờ trạng thái triển khai thành công, lấy chính URL GitHub cung cấp, mở thử ảnh và CSS. Không tự khẳng định đã public chỉ vì đã tải file.

## 5. Bài nộp
- Link repository Public có mã nguồn đọc được và README hiển thị.
- Báo cáo đã bổ sung thông tin, quan sát thực tế và nhật ký tự điều chỉnh.
- Link GitHub Pages nếu giảng viên yêu cầu hoặc muốn chạy trực tiếp.

Repository hiện chưa được tạo, chưa có commit hoặc URL triển khai được xác nhận. Ghi các URL thật sau khi hoàn tất; không dùng USERNAME làm link nộp.
