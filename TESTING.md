# Báo cáo kiểm thử Buổi 2

## Phạm vi và trạng thái
Kiểm tra mã do AI thực hiện được tách khỏi kiểm thử giao diện của sinh viên.
Kết quả Buổi 1 chỉ là lịch sử, lưu tại ho-so-buoi1/TESTING.md.
Các kết quả hiện tại dưới đây áp dụng mã trong gói Buổi 2 trước sửa đổi độc lập.

| Hạng mục | Kiểm tra tệp đã thực hiện | Kiểm thử trình duyệt |
|---|---|---|
| HTML mở và cấu trúc | lxml phân tích không báo lỗi; không phải Nu validator | Chờ sinh viên xác nhận |
| CSS được áp dụng | href khớp styles.css; ngoặc CSS cân bằng | Chờ sinh viên xác nhận |
| Thẻ sách | 4 article không đổi so với ZIP | Chờ sinh viên xác nhận |
| Hình ảnh | 7 img đủ tệp; 4 SVG phân tích XML được | Chờ sinh viên xác nhận |
| Liên kết | 9 liên kết nội trang có đích; 11 ID không trùng | Chờ sinh viên xác nhận |
| Giá mẫu | 4 tỷ lệ giảm khớp giá gốc và giá bán | Chờ sinh viên xác nhận hiển thị |
| Box Model | Quy tắc 24px; max-width 599px vẫn 18px | Chờ sinh viên xác nhận computed style |
| Responsive | Mã giữ lưới 4/2/1 cột | Chờ sinh viên xác nhận 1366/768/390px |
| details/summary | Cấu trúc giữ nguyên, sửa selector con trực tiếp | Chờ sinh viên xác nhận mở/đóng 4 thẻ |
| Hover/focus/transition | Có khai báo, không suy ra thao tác đạt | Chờ sinh viên xác nhận chuột và Tab |
| Hỏi Mộc | Nhãn chưa kết nối AI được giữ nguyên | Chờ sinh viên xác nhận 4 câu mẫu |
| Sửa độc lập | Chưa thực hiện, gap chưa được AI sửa | Chờ sinh viên xác nhận |
| GitHub và Pages | Đọc được repo, main; bản index công khai khác ZIP | Chưa cập nhật, Pages chưa xác minh |

## Vấn đề và cách xử lý
V1: Padding vùng thông tin có thể thực hành rõ hơn: AI đổi 20px thành 24px ở desktop/tablet,
giữ 18px trên điện thoại. Đây là cải thiện, chưa có chứng cứ thẻ cũ bị lỗi.
V2: Chưa có transition và thẻ chỉ đổi viền/bóng qua hover: AI thêm chuyển đổi 0.2s,
focus-within và tắt transition theo prefers-reduced-motion. Focus-visible chung đã có.
V3: Selector details[open] summary chọn rộng: AI thêm > trước summary; cần thử lồng FAQ.
V4: GitHub còn hero trùng/aside dư so với ZIP: chưa sửa online; cần đồng bộ tệp sau kiểm thử.

## Giới hạn
Chưa mở được trình duyệt vì thiếu Chromium thực thi; chưa xác nhận render, bàn phím,
responsive, DevTools, giảm chuyển động hoặc Pages. Không có ảnh giao diện Buổi 2.
Kiểm tra ngoặc không thay cho CSS validator; phân tích HTML không chứng minh chuẩn tiếp cận.
Hướng dẫn chi tiết và danh sách ảnh: HUONG_DAN_BUOI2.md.

## Nhật ký sinh viên cần bổ sung
| Lần thử | Trình duyệt và phiên bản | Viewport và zoom | Thao tác | Thực tế | Đạt/Chưa đạt | Ảnh và cách sửa |
|---|---|---|---|---|---|---|
| Chờ sinh viên xác nhận | Chưa điền | Chưa điền | Chưa điền | Chưa điền | Chưa kết luận | Chưa điền |
# Báo cáo kiểm thử Buổi 2 HTML5 và CSS3

## 1. Thông tin kiểm thử

- Dự án: Nhà sách Mộc, kế thừa mã nguồn Buổi 1.
- Người thực hiện: Mã Tuấn Kiệt.
- Trình duyệt: Google Chrome..
- Ngày kiểm thử: 3/10.
- Thư mục chứa bản mã cuối: chuong-1.
- Tệp chính: `index.html`, `styles.css`.
- Kích thước kiểm tra: desktop 1366 × 900, tablet 768 × 1024, điện thoại 390 × 844.
- Zoom trang: 100%.

Kết quả dưới đây phân biệt kiểm tra mã, trạng thái nhìn thấy trong ảnh và thao tác cần xác nhận. Ảnh tĩnh không chứng minh đầy đủ quá trình tương tác hoặc hiệu ứng chuyển động.

## 2. Các thay đổi cần kiểm tra

1. Điều chỉnh padding của `.product-body` từ 20px lên 24px ở desktop/tablet; giữ 18px ở điện thoại.
2. Bổ sung transition cho thẻ sách và nút; bổ sung phản hồi `.product-card:focus-within`, giữ viền focus bàn phím.
3. Thu hẹp selector trạng thái mở bằng `details[open] > summary` để giới hạn phạm vi tác động.
4. Bổ sung `gap: 24px` cho `.product-grid` trong `@media (max-width: 1100px)` ở phần tự điều chỉnh. Ảnh mã đã thể hiện khai báo; cần kiểm tra giá trị thực tế trong trình duyệt.

## 3. Kiểm tra mã đã được ghi nhận trong gói Buổi 2

Các kết quả này thuộc bản mã ban đầu do AI chuẩn bị, trước phần tự điều chỉnh của sinh viên.

| Hạng mục | Kết quả kiểm tra mã |
|---|---|
| Cấu trúc HTML | Công cụ phân tích HTML đọc được tệp; chưa thay thế kiểm định HTML chuẩn |
| Thẻ sách | Giữ nguyên 4 thẻ sản phẩm |
| Hình ảnh | Các tệp ảnh được tham chiếu có tồn tại; 4 SVG đọc được dưới dạng XML |
| Liên kết nội trang | Ghi nhận 9 liên kết có đích và 11 ID không trùng |
| CSS | Đường dẫn liên kết khớp `styles.css`; kiểm tra ngoặc không thay thế CSS validator |
| Giá mẫu | Các tỷ lệ giảm khớp với giá gốc và giá bán trong mã |

## 4. Kiểm thử giao diện và chức năng

| Mã | Hạng mục | Cách kiểm tra và kết quả mong đợi | Kết quả hiện có | Trạng thái |
|---|---|---|---|---|
| T01 | Desktop | Mở ở 1366 × 900; danh sách hiển thị 4 cột, đủ tên, giá và nút | Có ảnh trước/sau thể hiện 4 cột | Có minh chứng hình ảnh; cần chốt đúng bản mã cuối |
| T02 | Tablet | Mở ở 768 × 1024; danh sách hiển thị 2 cột, không tràn ngang | Có ảnh thể hiện bố cục 2 cột, chưa thấy đầy đủ hàng thẻ và kích thước mô phỏng | Chờ xác nhận |
| T03 | Điện thoại | Mở ở 390 × 844; danh sách hiển thị 1 cột, đọc được nội dung và dùng được nút | Có ảnh phần giới thiệu và đầu thẻ | Chờ xác nhận toàn bộ thẻ |
| T04 | Box Model | Chọn `.product-body` trong DevTools; kiểm tra padding 24px ở desktop/tablet và 18px ở điện thoại | Chưa có ảnh Computed thể hiện giá trị | Chờ xác nhận |
| T05 | Thông tin sách | Bấm hai lần vào “Xem thông tin” của từng sách; mô tả mở rồi đóng đúng sách | Có ảnh cả 4 mô tả đang mở | Đã thấy trạng thái mở; chờ xác nhận thao tác đóng |
| T06 | Bàn phím | Dùng Tab đến các nút; nhấn Enter hoặc Space để mở/đóng mô tả | Có ảnh viền focus ở nút đầu tiên | Đã thấy focus; chờ xác nhận thao tác trên đủ 4 nút |
| T07 | Hover và transition | Rê chuột lên thẻ và nút; kiểm tra phản hồi màu, viền, bóng và chuyển đổi | Ảnh tĩnh chưa xác nhận được hiệu ứng chuyển động | Chờ xác nhận |
| T08 | Liên kết | Bấm logo, Tủ sách, Về Mộc, Khám phá và liên kết sách trong Hỏi Mộc; trang đến đúng đích | Kiểm tra mã có đích; chưa xác nhận thao tác thực tế | Chờ xác nhận |
| T09 | Hỏi Mộc | Mở/đóng từng câu hỏi; câu trả lời mẫu hiển thị đúng, nhãn câu hỏi đóng không bị ảnh hưởng bởi khối cha | Chưa có minh chứng đủ thao tác | Chờ xác nhận |
| T10 | Ảnh SVG | Cuộn xem đủ 4 sách; bìa hiển thị rõ, không mất ảnh hoặc méo bất thường | Ảnh desktop thể hiện đủ 4 bìa | Có minh chứng desktop; cần kiểm tra ở bản cuối |
| T11 | Flexbox | Tạm đổi `justify-content` của `.header-inner`, quan sát rồi hoàn tác | Ảnh DevTools thể hiện giá trị `flex-end` | Có minh chứng thử nghiệm; chờ xác nhận đã hoàn tác về `space-between` |
| T12 | Sửa đổi độc lập | Ở 768px, kiểm tra `.product-grid` trong Computed có gap 24px; chạy lại desktop và điện thoại | Có ảnh mã bổ sung `gap: 24px` | Chờ xác nhận áp dụng và kết quả sau sửa |
| T13 | Giảm chuyển động | Mô phỏng `prefers-reduced-motion: reduce`; kiểm tra transition được tắt | Chưa có kết quả thao tác | Chờ xác nhận |
| T14 | GitHub và Pages | Kiểm tra bản mã đã cập nhật trên repository cũ; thử lại website sau triển khai nếu dùng Pages | Chưa có minh chứng cập nhật Buổi 2 | Chưa xác minh |

## 5. Nhật ký tự điều chỉnh

- Quan sát trước sửa: [Em ghi nhu cầu thực tế về khoảng cách giữa các thẻ ở 768px].
- Tệp chỉnh sửa: `styles.css`.
- Selector: `.product-grid` trong `@media (max-width: 1100px)`.
- Thay đổi thể hiện trong ảnh mã: bổ sung `gap: 24px`.
- Giá trị gap thực tế trước sửa: [Kiểm tra bản trước và điền].
- Dự đoán trước khi chạy: [Em ghi dự đoán của mình].
- Kết quả sau khi lưu và tải lại trang: [Điền kết quả thực tế].
- Kiểm tra lại ở 1366px, 768px và 390px: [Điền kết quả từng kích thước].
- Phần em trực tiếp thực hiện và mức hỗ trợ của AI: [Ghi đúng quá trình thực hiện].

Lưu ý: khai báo nằm trong `max-width: 1100px` có thể tác động cả màn hình nhỏ hơn. Cần xem các quy tắc CSS phía sau và giá trị Computed để xác định gap đang được áp dụng.

## 6. Minh chứng và kết luận

Ảnh minh chứng Buổi 2 được lưu tại `minh-chung/buoi2/`. Tên ảnh và chú thích cần khớp với tệp thực tế, bản mã, kích thước màn hình và trạng thái giao diện.

Ảnh đã cung cấp thể hiện giao diện desktop, bố cục tablet, một phần giao diện điện thoại, mô tả sách đang mở, viền focus, thử nghiệm Flexbox và mã tự điều chỉnh.

Chưa kết luận toàn bộ bài đã kiểm thử đạt. Các mục “Chờ xác nhận” cần được thực hiện và cập nhật trước khi nộp. Hỏi Mộc chỉ sử dụng câu trả lời mẫu, không phải chatbot AI được kết nối thực tế.

Kết quả kiểm thử Buổi 1 được giữ riêng tại `ho-so-buoi1/TESTING.md`.
## Kết quả kiểm thử cuối cùng

Em xác nhận đã hoàn tất kiểm thử bản mã Buổi 2 trên máy cá nhân.

| Hạng mục | Kết quả |
|---|---|
| Giao diện desktop 1366 × 900, tablet 768 × 1024 và điện thoại 390 × 844 | Đạt — sinh viên xác nhận |
| Padding vùng thông tin thẻ sách | Đạt — sinh viên xác nhận |
| Mở và đóng thông tin của cả 4 sách | Đạt — sinh viên xác nhận |
| Điều hướng bằng Tab và thao tác Enter/Space | Đạt — sinh viên xác nhận |
| Hiệu ứng hover, focus và transition | Đạt — sinh viên xác nhận |
| Các liên kết nội trang | Đạt — sinh viên xác nhận |
| Hỏi Mộc hiển thị câu trả lời mẫu | Đạt — sinh viên xác nhận |
| Hiển thị đủ 4 ảnh bìa SVG | Đạt — sinh viên xác nhận |
| Thử nghiệm Flexbox và hoàn tác về bố cục cuối | Đạt — sinh viên xác nhận |
| Sửa đổi độc lập và kiểm tra lại giao diện | Đạt — sinh viên xác nhận |
| Chế độ giảm chuyển động | Đạt — sinh viên xác nhận |

**Kết luận:** Theo kết quả tự kiểm thử, em xác nhận toàn bộ hạng mục kiểm thử giao diện và chức năng nêu trên đã đạt yêu cầu. Các ảnh minh chứng được sử dụng để đối chiếu với kết quả kiểm thử.

**GitHub và Pages:** Trạng thái cập nhật và triển khai được ghi riêng sau khi thực hiện thực tế; không thuộc kết luận kiểm thử trên máy cá nhân.`