# Trảm Long — Mã Tuấn Kiệt

Mở index.html bằng Chrome/Edge hoặc Open with Live Server trong VS Code. Không cần npm, Internet hay file âm thanh.

- index.html: bố cục và nhân vật SVG.
- style.css: cảnh nền, chuyển động, hiệu ứng bị thương/né/kiếm/lửa.
- game.js: chỉ số từ anhhung.js, xác suất và điều phối từng lượt, âm thanh Web Audio.
- Nhấn Tấn công hoặc Space; Tự động để chạy liên tục. Dừng tự động hoàn tất lượt đang chạy rồi dừng.
- Đổi tên/phân cấp/chế độ rồi nhấn Tạo trận mới để áp dụng.
- Âm thanh bắt đầu sau thao tác nhấn nút. Kiểm tra âm lượng trình duyệt nếu chưa nghe được.

Giữ logic gốc: XP=350, điểm kỹ năng=40, tính STR/AGI/INT trước khi đặt level=5. Tên chính xác Mã Tuấn Kiệt được +5 INT, tên khác -5 INT. Chiến binh có STR=74, AGI=68, INT=28. Anh hùng HP=105, rồng HP=600, STR=100, AGI=15, INT=80. Chí mạng = STR + STR*2 = STR*3 (đúng phép tính gốc dù chú thích gốc ghi double damage). Rồng không phản công khi đã bị hạ.

Chế độ Biểu diễn chỉ đổi HP anh hùng lên 1200 để xem nhiều hoạt ảnh. Không tự cân bằng hoặc đổi công thức sát thương. Hiệu ứng HP dừng ở 0. Bản này dùng hình hiệp sĩ/rồng SVG, chưa ghép ảnh chân dung đính kèm vào nhân vật.
