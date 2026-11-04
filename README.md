# Mộc — Bài tập cá nhân Buổi 2 HTML và CSS

Sinh viên theo hồ sơ Buổi 1: Mã Tuấn Kiệt — 31241024731 — EE0002.
Học phần Phát triển ứng dụng WEB/TMĐT, giảng viên TS Nguyễn Mạnh Tuấn.
Buổi 2 kế thừa trực tiếp dự án Buổi 1; trọng tâm là thẻ sách và danh sách 4 sản phẩm.
Đây là bản mã do AI hỗ trợ chỉnh sửa, CHƯA hoàn tất kiểm thử trình duyệt và sửa đổi độc lập.

## Website tham khảo và phạm vi
Buổi 1 khảo sát FAHASA (https://www.fahasa.com/); chi tiết lịch sử trong SURVEY.md.
Buổi 2 không khảo sát lại FAHASA và không coi nội dung khảo sát cũ là dữ liệu hiện tại.
Mộc là nhà sách giả định, giữ màu xanh/kem, 4 bìa SVG cục bộ và toàn bộ dữ liệu mẫu.
Xem thông tin dùng details/summary. Hỏi Mộc chỉ có câu trả lời mẫu, chưa kết nối AI.
Không JavaScript, backend, API, giỏ hàng, thanh toán, tìm kiếm động hoặc framework CSS.

## Kỹ thuật đã có từ Buổi 1
- Semantic HTML: header, nav, main, section, article, footer; h1/h2/h3.
- img và alt; liên kết nội trang; CSS ngoài styles.css.
- Box Model, selector phần tử/class/hậu duệ, box-sizing: border-box.
- Flexbox ở .header-inner, nav, summary; Grid ở .product-grid.
- Grid 4 cột trên 1100 px, 2 cột từ 600–1100 px, 1 cột dưới 600 px.
- Hover, :focus-visible chung; ảnh object-fit: contain, height: auto.

## Thay đổi Buổi 2 do AI hỗ trợ
1. .product-body: padding 20px thành 24px ở quy tắc cuối cho desktop/tablet;
   quy tắc điện thoại max-width: 599px vẫn là 18px. Padding 18px ở đầu tệp
   bị quy tắc 24px phía sau ghi đè; đây là cascade có sẵn, không xóa các phần cũ.
2. Thêm transition 0.2s cho viền/bóng thẻ và màu nền/chữ summary sản phẩm.
   Thêm .product-card:focus-within để phản hồi thẻ khi Tab vào nội dung;
   giữ :focus-visible chung và tắt transition mới khi prefers-reduced-motion: reduce.
3. Thu hẹp details[open] summary thành details[open] > summary;
   quy tắc xoay span cũng dùng > summary để không chọn nhãn của details lồng bên trong.
4. Chỉ cập nhật meta description và nhãn chân trang sang Buổi 2 trong HTML.
Xem BUOI2.patch để biết từng dòng; không áp dụng patch lần nữa lên bản đã sửa này.

## Cách chạy
Giải nén, mở index.html bằng Chrome hoặc Edge. Giữ styles.css và images/ cạnh index.html.
Có thể dùng VS Code và Live Server nếu đã cài; không bắt buộc cài thêm.
Để chụp TRƯỚC, giải nén ho-so-buoi1/Ma_nguon_Buoi1_goc.zip ra một thư mục riêng.
Đó là bản sao nguyên gốc dùng đối chiếu, không phải dự án/repository mới.
Để chụp SAU, mở index.html ở thư mục chính của gói Buổi 2.
Chụp cùng vùng #tu-sach, cùng viewport, zoom, trạng thái đóng/mở details và vị trí cuộn.

## Kiểm tra và minh chứng
Đã kiểm tra tệp: 4 article giữ nguyên; 11 ID không trùng; 9 đích liên kết nội trang tồn tại;
7 img tham chiếu đủ tệp; 4 SVG phân tích XML được; dữ liệu tỷ lệ giảm khớp.
Đã phân tích HTML bằng lxml, kiểm tra cân bằng ngoặc CSS và đọc bản vá.
Đây không phải chứng nhận HTML/CSS validator hay kết quả hiển thị trình duyệt.
Không chạy được Chromium tại môi trường xử lý vì thiếu tệp thực thi.
Tất cả kiểm thử giao diện: **chờ sinh viên xác nhận**.
Xem TESTING.md và minh-chung/buoi2/kiem-tra-ma.json.

## Phần sinh viên cần tự làm
Thực hiện ít nhất một sửa đổi độc lập sau khi quan sát giao diện, ghi nguyên nhân,
thuộc tính đã đổi, dự đoán và kết quả thật. Gợi ý quan sát gap tại 768px;
nếu cần đổi, sinh viên tự chọn giá trị và nhập mã. AI chưa sửa gap thay sinh viên.
Điền phiếu trong HUONG_DAN_BUOI2.md, thêm ảnh thật và hoàn thiện câu 7 báo cáo.

## Tài liệu và cấu trúc
- README.md, AI_USAGE.md, TESTING.md: nội dung Buổi 2 đang áp dụng.
- HUONG_DAN_BUOI2.md: thử nghiệm, ảnh, nhiệm vụ độc lập và GitHub.
- SURVEY.md, SOURCES.md: hồ sơ Buổi 1, giữ nguyên nội dung.
- ho-so-buoi1/: bản gốc các tài liệu đã cập nhật và ZIP nguồn gốc.
- minh-chung/: giữ nguyên 25 ảnh cũ; không gán thành ảnh Buổi 2.
- minh-chung/buoi2/: chỉ có kết quả kiểm tra mã và hướng dẫn; chưa có ảnh giao diện thật.
- DOI_CHIEU_BUOI2.md: ma trận yêu cầu, 3 điểm cải thiện và nghiệm thu.

## Repository cũ
- Repository: https://github.com/TuanKiet-coder1/kiet-ecommerce-ui-chuong1
- URL Pages theo hồ sơ cũ: https://tuankiet-coder1.github.io/kiet-ecommerce-ui-chuong1/
Lần đọc chỉ đọc trong phiên Buổi 2 xác nhận repository public, nhánh mặc định main.
index.html công khai còn đoạn hero trùng và thẻ đóng aside dư đã bỏ ở ZIP Buổi 1.
Chưa cập nhật repository, chưa xác minh Pages Buổi 2. Kết nối hiện tại có pull=true,
push=false. Chỉ commit/push sau khi sinh viên hoàn tất kiểm thử và tự sửa.
Không dùng ảnh Pages cũ để khẳng định bản Buổi 2 đã triển khai.
