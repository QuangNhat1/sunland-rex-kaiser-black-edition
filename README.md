# Sunland Hobby — Rex Kaiser Black Edition

Dự án landing page độc lập. Dự án Sunland Hobby hiện tại không bị chỉnh sửa.

## Chạy thử

Node.js >= 20.19 (khuyến nghị Node 24).

```sh
npm ci
npm run dev -- --port 3001
```

Mở địa chỉ Vite hiển thị trên máy của bạn. `npm run build` tạo thư mục `dist`; `npm run preview -- --port 4174` xem bản production. Có thể import thư mục này vào Vercel, preset Vite, build `npm run build`, output `dist`.

## Trạng thái nguồn tham khảo

**Bản thiết kế Sunland đã đối chiếu ảnh chụp màn hình và dùng bộ ảnh gốc trong `machina.rar` do người dùng cung cấp.**

Nguồn: https://machina-core.com/magazine/134095660

Truy cập trực tiếp từ cloud bị chặn bởi allowlist (`CONNECT tunnel failed, response 403`); không tải được HTML/bộ ảnh gốc. Sau đó người dùng đã cung cấp ảnh chụp màn hình. Bố cục và phần chữ tiếng Hàn đọc được trong ảnh đã được đối chiếu và Việt hóa, gồm áo choàng, thành phần, ý tưởng thiết kế, chi tiết đầu–vai–tay và ba chế độ biến hình. Xem [TRANSLATION.vi.md](TRANSLATION.vi.md) để đọc bản dịch và nguồn của từng thông số. Bản này tái dựng bằng HTML/CSS, ảnh sản phẩm người dùng đã cung cấp và nhận diện Sunland, không phải bản sao nguyên mã nguồn.

Đề xuất thêm domain `machina-core.com` đã được lưu vào draft cấu hình, chưa áp dụng; chỉ cần lưu/Publish nếu muốn tải tiếp nội dung và tài sản gốc từ website. Bản hiện tại dùng ảnh chụp màn hình và ảnh gốc đã gửi để tiếp tục, không phụ thuộc việc duyệt cấu hình này.

## Nội dung và hình ảnh hiện tại

- Ảnh từ hai tệp `Black-Rex-Kaiser.rar` do người dùng gửi, đã tách nền bằng mặt nạ trên pixel gốc, tăng nét nhẹ và xóa chữ ngoài sản phẩm. Chữ in trên hộp được giữ nguyên. Không dùng ảnh AI vẽ lại.
- `machina.rar`: ảnh mở đầu, ảnh áo choàng chính và ảnh phụ, robot đứng thẳng, kiếm rời, áo choàng rời, hai mặt coin, mô hình chỉ vị trí chi tiết, ba ảnh cận cảnh và ba hình thái. Ảnh giữ nguyên pixel hiển thị và độ trong suốt của sản phẩm gốc, chỉ chuyển PNG sang WebP lossless; WebP có sẵn được giữ nguyên file. Riêng `card-4` xóa nhãn tiếng Anh rồi đặt chữ Việt, không thay đổi hình coin/mũi tên.
- 6 dạng: hộp → huy hiệu → thú → xe → robot → hợp thể D9.
- Thông tin Deluxe 32 cm / Chinese Version dựa trên mô tả người dùng trong dự án trước, cần đối chiếu đúng listing Shopee trước khi phát hành.
- Video chi tiết Black Edition Deluxe mới do người dùng gửi (3 phút 08 giây), chuyển từ HEVC sang H.264/AAC 720 × 1280, MP4 faststart để tương thích trình duyệt. Ảnh bìa lấy từ video. Video tải khi người xem yêu cầu, không autoplay.
- Ảnh nhân vật/quyền thương hiệu thuộc chủ sở hữu tương ứng; attribution SAMG/EBS nằm ở footer. Chưa gắn thông tin xuất xứ sản xuất, giá, khuyến mãi, tồn kho hay cam kết bảo hành chưa được cung cấp.
- Các nút mua Rex Kaiser Black dẫn tới https://s.shopee.vn/4fy4AhOHGl do người dùng cung cấp. Nút gian hàng và tìm hiểu bộ hợp thể giữ https://shopee.vn/sunlandhobby; nút cuối trang dẫn tới fanpage Facebook.

## Giới hạn tài sản tham khảo

Đã bỏ thẻ hướng dẫn sử dụng theo yêu cầu; danh sách phụ kiện hiển thị 5 mục có ảnh thực tế. Các ảnh kiếm, áo choàng, hai mặt coin, robot đứng thẳng và chi tiết đều đã thay bằng tài sản thật từ `machina.rar`, không còn crop tạm từ một ảnh robot. Ảnh hộp trong bản demo là hộp bản Trung do người dùng gửi; không tráo thành hộp bản Hàn. Hai JPG tạo dáng trong archive đã có bản tách nền tương ứng (`addition-box` và ảnh robot hiện tại), nên không đưa bản trùng/nền xám vào trang.

## Hành vi

Responsive; menu mobile; 6 ảnh có vuốt, bàn phím, mũi tên, tự chuyển/tạm dừng và phóng to bằng dialog. Tạm dừng khi hover/focus, tab ẩn, gallery ngoài viewport. Giảm chuyển động tắt tự chuyển mặc định. Reload quay về đầu trang. FAQ native details; video native controls. Font tiếng Việt lưu cùng build, không phụ thuộc Google Fonts.

## Cập nhật ảnh hợp thể D9

Ảnh từ `d9-full.rar` do người dùng cung cấp thay cho ảnh hợp thể cũ trong carousel, ảnh thu nhỏ, phóng to và mục hợp thể D9. Lưu tại `public/images/rex-kaiser-d9-full.webp`, WebP lossless giữ nguyên pixel sản phẩm và nền trong suốt. Không chỉnh sửa thêm chi tiết. Chú thích phản ánh Rex Kaiser Black Edition kết hợp các chiến binh D9 nhiều màu. Ảnh đen–vàng trước đó được giữ lại làm tài sản dự phòng.
