# Kiểm tra và nghiệm thu

## Kiểm tra đã thực hiện bởi AI
Kết quả chi tiết ở báo cáo. Kiểm tra bằng phân tích tệp và tính toán số học, không phải chạy Chrome.

| Hạng mục | Kết quả |
|---|---|
| Bốn article có tên, ảnh, giá và summary | Đạt kiểm tra tĩnh |
| CSS tách riêng và đường dẫn tương đối | Đạt kiểm tra tĩnh |
| Ảnh SVG có tệp hợp lệ XML | Đạt kiểm tra tĩnh |
| ID không trùng, liên kết nội trang có đích | Đạt kiểm tra tĩnh |
| Tỷ lệ giảm và tiết kiệm của bốn sách | Đạt kiểm tra số học |
| Không script, framework, CDN | Đạt kiểm tra tĩnh |
| Cấu hình 4/2/1 cột, focus và nút 44px | Đạt kiểm tra |

## Kiệt cần chạy trực tiếp
Mở index.html, dùng DevTools và ghi kết quả thật vào cột cuối. Không đánh dấu đạt trước khi thử.

| Ca kiểm thử | Thao tác | Kỳ vọng | Kết quả của Kiệt |
|---|---|---|---|
| Desktop | 1440 × 900 | Bốn cột, đủ tên/giá/ảnh, không tràn | Chưa thực hiện |
| Tablet | 768 × 1024 | Hai cột | Chưa thực hiện |
| Mobile | 390 × 844 và 320 × 568 | Một cột, không cuộn ngang | Chưa thực hiện |
| Ranh giới | Rộng 599/600/1100/1101 px | Đúng chuyển 1/2/4 cột | Chưa thực hiện |
| Nội dung | Mở cả bốn mô tả | Không cắt chữ hay chồng nội dung | Chưa thực hiện |
| Bàn phím | Tab, Shift+Tab, Enter/Space trên summary | Focus rõ; mở/đóng bằng bàn phím | Chưa thực hiện |
| Zoom | Zoom trình duyệt 200% | Nội dung còn đọc và thao tác được | Chưa thực hiện |
| Offline | Ngắt mạng, mở lại file | Ảnh/CSS vẫn tải cục bộ | Chưa thực hiện |
| Sau triển khai | Mở URL Pages thực tế | CSS/ảnh hoạt động ở đường dẫn dự án | Chưa triển khai |

## Tự điều chỉnh bắt buộc
Kiệt phải tự phát hiện ít nhất một điểm từ trải nghiệm thực tế, sửa mã, ghi trước/sau vào AI_USAGE.md và commit riêng. Có thể xem khoảng cách thẻ, độ dễ đọc hoặc nội dung mô tả; chọn vấn đề thực sự quan sát được, không chép ví dụ thành việc đã làm.
