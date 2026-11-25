import '@fontsource/barlow-condensed/latin-800.css';
import '@fontsource/be-vietnam-pro/latin-400.css';
import '@fontsource/be-vietnam-pro/latin-600.css';
import '@fontsource/barlow-condensed/vietnamese-800.css';
import '@fontsource/be-vietnam-pro/vietnamese-400.css';
import '@fontsource/be-vietnam-pro/vietnamese-600.css';
import './style.css';
const shop='https://s.shopee.vn/4fy4AhOHGl';
const storefront='https://shopee.vn/sunlandhobby';
const arrow='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
const external='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>';
const machina=(name)=>`/images/machina/${name}.webp`;
const image=(view)=>view === 'combined' ? '/images/rex-kaiser-d9-full.webp' : `/images/rex-kaiser-black-${view}.webp`;
const views=[
{key:'box',name:'Hộp sản phẩm',title:'Bắt đầu một bộ sưu tập.',text:'Thiết kế bao bì đen–vàng đồng điệu với tạo hình Black Edition. Xem đúng phân loại và phụ kiện kèm theo tại gian hàng.'},
{key:'coin',name:'Huy hiệu',title:'Dấu ấn của bạo chúa.',text:'Biểu tượng T-Rex vàng trên nền đen, nối tiếp ngôn ngữ hình khối góc cạnh của Rex Kaiser.'},
{key:'beast',name:'Dạng thú',title:'Bản năng T-Rex.',text:'Dáng đứng mạnh mẽ, bộ hàm cơ giới và các điểm nhấn vàng tạo nên diện mạo khủng long của Black Edition.'},
{key:'car',name:'Dạng xe',title:'Một diện mạo khác.',text:'Thân xe đen với đường nét đỏ và chi tiết vàng. Một góc nhìn khác trong hành trình biến đổi của Rex Kaiser.'},
{key:'robot',name:'Dạng robot',title:'Bạo chúa thức tỉnh.',text:'Thanh kiếm lớn, giáp đen và áo choàng đỏ. Hình thái robot thể hiện rõ nét diện mạo của phiên bản Black Edition Deluxe.'},
{key:'combined',name:'Hợp thể D9',title:'Sức mạnh của cả đội hình.',text:'Hình ảnh Rex Kaiser Black Edition kết hợp cùng các chiến binh D9 nhiều màu. Các chiến binh nâng cấp có thể được bán riêng; kiểm tra cấu hình và khả năng tương thích trước khi mua.'},
];
const cta=(label='Mua trên Shopee',classes='button red',href=shop)=>`<a class="${classes}" href="${href}" target="_blank" rel="noopener noreferrer">${label}${external}</a>`;
document.querySelector('#app').innerHTML=`
<div class="reading-progress" aria-hidden="true"></div>
<header class="header">
 <a class="brand" href="#dau-trang" aria-label="Sunland Hobby — về đầu trang"><img src="/images/sunland-wordmark.png" alt="Sunland Hobby" width="210" height="74" /></a>
 <span class="header-edition">REX KAISER <b>BLACK EDITION</b></span>
 <button class="menu-toggle" aria-label="Mở menu" aria-expanded="false" aria-controls="navigation"><span></span><span></span></button>
 <nav id="navigation" aria-label="Điều hướng chính"><a href="#thiet-ke">Thiết kế</a><a href="#phu-kien">Phụ kiện</a><a href="#bien-hinh">Biến hình</a><a href="#hop-the">Hợp thể D9</a><a href="#video">Video</a>${cta('Gian hàng Shopee','header-shop',storefront)}</nav>
</header>
<main id="noi-dung">
<section class="hero reference-hero" id="dau-trang" aria-labelledby="hero-title">
 <div class="hero-art reference-hero-art"><img src="${machina('title-background')}" alt="Cận cảnh giáp ngực và tạo hình Rex Kaiser Black Edition" width="2880" height="1520" fetchpriority="high" /></div>
 <p class="hero-series eyebrow">MINIFORCE<br><span>DINOID WARRIORS</span></p>
 <div class="reference-hero-copy"><p class="hero-miniforce">MINIFORCE</p><h1 id="hero-title">REX KAISER <span>BLACK EDITION</span></h1><p>GIÁP ĐEN. ĐIỂM VÀNG. KHÍ CHẤT RIÊNG.</p><div class="hero-actions">${cta('Khám phá trên Shopee')}<a class="text-link" href="#thiet-ke">Tìm hiểu thiết kế ${arrow}</a></div></div>
</section>
<div class="edition-strip"><span>SUNLAND HOBBY</span><span>REX KAISER BLACK EDITION</span><span>BUILD · COLLECT · ENJOY</span></div>
<section class="cape-feature section" id="thiet-ke" aria-labelledby="cape-title">
 <div class="cape-feature-copy"><p class="eyebrow gold">ĐIỂM NHẤN BLACK EDITION</p><h2 id="cape-title">ÁO CHOÀNG KAISER.<br><em>DIỆN MẠO ĐẦY UY LỰC.</em></h2><p>Áo choàng đỏ–đen tạo nên đường nét đặc trưng của Black Edition, làm nổi bật tạo hình robot khi trưng bày.</p><a class="text-link gold" href="#chi-tiet">Khám phá các chi tiết ${arrow}</a><figure class="cape-inset"><img src="${machina('addition-box')}" alt="Tư thế trưng bày Rex Kaiser với áo choàng Kaiser mở rộng" loading="lazy" width="1140" height="834" /></figure></div>
 <div class="cape-feature-art"><img src="${machina('addition-main')}" alt="Toàn cảnh robot Black Edition với áo choàng Kaiser đỏ đen" loading="lazy" width="2880" height="1400" /></div>
</section>
<section class="components section" id="phu-kien" aria-labelledby="components-title">
 <div class="section-meta"><span>PHỤ KIỆN & THÀNH PHẦN</span><span>BLACK EDITION</span></div><div class="components-heading"><h2 id="components-title">NHỮNG MẢNH GHÉP<br><em>CỦA BLACK EDITION.</em></h2><div class="component-arrows"><button class="arrow-button component-prev" aria-label="Xem phụ kiện trước">${arrow}</button><button class="arrow-button component-next" aria-label="Xem phụ kiện tiếp theo">${arrow}</button></div></div>
 <div class="component-rail" tabindex="0" aria-label="Danh sách thành phần theo tài liệu tham khảo bản Hàn">
 <figure class="component-item"><div class="component-photo"><img src="${machina('card-1')}" alt="Robot Rex Kaiser Black Edition đứng thẳng không áo choàng" loading="lazy" width="260" height="260" /></div><figcaption><span>01</span><h3>REX KAISER</h3><p>Robot Black Edition</p></figcaption></figure>
 <figure class="component-item"><div class="component-photo"><img src="${machina('card-2')}" alt="Thanh kiếm Rex Blade riêng biệt" loading="lazy" width="780" height="780" /></div><figcaption><span>02</span><h3>REX BLADE</h3><p>Kiếm Rex Blade</p></figcaption></figure>
 <figure class="component-item"><div class="component-photo"><img src="${machina('card-3')}" alt="Áo choàng Kaiser đỏ đen riêng biệt" loading="lazy" width="780" height="780" /></div><figcaption><span>03</span><h3>KAISER CAPE</h3><p>Áo choàng Kaiser</p></figcaption></figure>
 <figure class="component-item"><div class="component-photo"><img src="${machina('card-4')}" alt="Hai mặt huy hiệu Great Coin, chú thích mặt trước và mặt sau bằng tiếng Việt" loading="lazy" width="780" height="780" /></div><figcaption><span>04</span><h3>GREAT COIN</h3><p>Mặt trước & mặt sau</p></figcaption></figure>
 <figure class="component-item"><div class="component-photo"><img src="${image('box')}" alt="Hộp phiên bản Trung đang giới thiệu" loading="lazy" width="784" height="906" /></div><figcaption><span>05</span><h3>HỘP SẢN PHẨM</h3><p>Bao bì phiên bản Trung</p></figcaption></figure>
 </div><p class="gallery-note">Danh sách thành phần được Việt hóa từ ảnh chụp Machina Core (bản Hàn). Phụ kiện thực nhận của bản Trung theo đúng phân loại Shopee.</p>
</section>
<section class="design-concept section" aria-labelledby="concept-title"><p class="concept-tag">Ý TƯỞNG THIẾT KẾ</p><h2 id="concept-title">CẢM HỨNG <em>PHẢN ANH HÙNG.</em></h2><p>Rex Kaiser Black Edition là phiên bản đặc biệt nhấn mạnh hình tượng phản anh hùng so với phối màu nguyên bản. Ba sắc đen, vàng và đỏ được phối lại cân bằng để thể hiện tinh thần ấy. Áo choàng Kaiser được thiết kế riêng cho Black Edition, tập trung tạo nên một dáng hình mạnh mẽ.</p><span>Việt hóa nội dung thiết kế từ Machina Core</span></section>
<section class="details-section section" id="chi-tiet" aria-labelledby="details-title"><div class="section-meta"><span>CHI TIẾT THIẾT KẾ</span><span>ĐẦU · VAI · CÁNH TAY</span></div><h2 id="details-title">TỪNG CHI TIẾT.<br><em>CÙNG MỘT KHÍ CHẤT.</em></h2><div class="details-layout"><div class="details-model"><img src="${machina('detail-dimmed-image')}" alt="Robot Rex Kaiser Black Edition và các vị trí chi tiết đầu, vai, cánh tay" width="2760" height="2772" loading="lazy" /><a href="#detail-head" class="detail-hotspot hotspot-head">ĐẦU <span>01</span></a><a href="#detail-shoulder" class="detail-hotspot hotspot-shoulder">VAI <span>02</span></a><a href="#detail-arms" class="detail-hotspot hotspot-arms">CÁNH TAY <span>03</span></a></div><div class="detail-crops">
 <article class="detail-panel" id="detail-head"><div class="detail-crop"><img src="${machina('detail-view-card-1')}" alt="Cận cảnh trang trí đầu lấy cảm hứng từ khủng long" loading="lazy" width="1060" height="660" /></div><div><span>01 / ĐẦU</span><h3>DẤU ẤN KHỦNG LONG.</h3><p>Trang trí trên đầu phản ánh các yếu tố thiết kế gợi lên nét hoang dã của khủng long, như răng và móng vuốt.</p></div></article>
 <article class="detail-panel" id="detail-shoulder"><div class="detail-crop"><img src="${machina('detail-view-card-2')}" alt="Cận cảnh huy hiệu đỏ ở trung tâm giáp vai" loading="lazy" width="1060" height="660" /></div><div><span>02 / VAI</span><h3>ĐIỂM NHẤN ĐỎ.</h3><p>Mảng huy hiệu đỏ ở trung tâm vai thu hút ánh nhìn, tạo độ tương phản mạnh trên thân robot màu đen.</p></div></article>
 <article class="detail-panel" id="detail-arms"><div class="detail-crop"><img src="${machina('detail-view-card-3')}" alt="Cận cảnh phần cánh tay và các chi tiết móng vuốt" loading="lazy" width="1060" height="660" /></div><div><span>03 / CÁNH TAY</span><h3>NGÔN NGỮ MÓNG VUỐT.</h3><p>Chi tiết vuốt vàng ở hai đầu tay cùng hình dáng móng khủng long tạo nên ngôn ngữ thiết kế nhất quán trước và sau biến hình.</p></div></article>
 </div></div></section>
<section class="transform-section section" id="bien-hinh" aria-labelledby="transform-title"><div class="section-meta"><span>BA CHẾ ĐỘ BIẾN HÌNH</span><span>XE · KHỦNG LONG · ROBOT</span></div><h2 id="transform-title">BA HÌNH THÁI.<br><em>MỘT REX KAISER.</em></h2><div class="transform-grid">
 <button class="transform-card selected" data-mode="car" aria-pressed="true"><div><img src="${machina('mode-card-1-1')}" alt="Machine Dinocar dạng xe" loading="lazy" width="720" height="720" /></div><span>DẠNG XE</span><h3>MACHINE DINOCAR</h3><p>Bánh xe ở mặt dưới cho phép xe lăn tự do.</p></button>
 <button class="transform-card" data-mode="beast" aria-pressed="false"><div><img src="${machina('mode-card-1-2')}" alt="Dinoid Tyra dạng khủng long" loading="lazy" width="720" height="720" /></div><span>DẠNG KHỦNG LONG</span><h3>DINOID TYRA</h3><p>Các khớp ở miệng, cổ, tay và chân cho phép thay đổi tư thế.</p></button>
 <button class="transform-card" data-mode="robot" aria-pressed="false"><div><img src="${machina('mode-card-1-3')}" alt="Robot Rex Kaiser Black Edition" loading="lazy" width="720" height="720" /></div><span>DẠNG ROBOT</span><h3>REX KAISER</h3><p>Kết hợp Dinoid Tyra và Machine Dinocar để tạo thành Rex Kaiser.</p></button>
 </div><p class="gallery-note">Mô tả ba chế độ được Việt hóa từ tài liệu bản Hàn. Kiểm tra hướng dẫn đúng phiên bản trước khi biến hình.</p></section>
<section class="forms section" id="hinh-thai" aria-labelledby="forms-title">
 <div class="section-meta"><span>THƯ VIỆN SẢN PHẨM</span><span>REX KAISER BLACK EDITION</span></div>
 <div class="forms-heading"><h2 id="forms-title">MỘT CHIẾN BINH.<br><em>NHIỀU GÓC NHÌN.</em></h2><p>Chạm để chọn. Vuốt để khám phá.<br>Hộp, huy hiệu và các hình thái của Rex Kaiser.</p></div>
 <div class="gallery" aria-roledescription="carousel" aria-label="Bộ ảnh Rex Kaiser Black Edition">
  <div class="gallery-stage" tabindex="0" aria-label="Ảnh sản phẩm. Dùng phím trái và phải để chuyển ảnh."><span class="gallery-backdrop" aria-hidden="true">BLACK<br>EDITION</span><img id="gallery-image" src="${image('box')}" alt="Hộp Rex Kaiser Black Edition" width="1400" height="1456" loading="lazy" /><button class="gallery-prev arrow-button" aria-label="Ảnh trước">${arrow}</button><button class="gallery-next arrow-button" aria-label="Ảnh tiếp theo">${arrow}</button><button class="zoom-button" aria-label="Phóng to ảnh hiện tại"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6M10 7v6M7 10h6"/></svg></button><span class="gallery-count">01 / 06</span></div>
  <div class="gallery-copy"><span class="gold eyebrow" id="view-name">HỘP SẢN PHẨM</span><h3 id="view-title">Bắt đầu một bộ sưu tập.</h3><p id="view-description">${views[0].text}</p><div class="gallery-control"><span>Tự chuyển mỗi 7 giây</span><button id="autoplay" aria-pressed="false">Tạm dừng</button></div></div>
 </div>
 <div class="view-tabs" role="group" aria-label="Chọn ảnh sản phẩm">${views.map((v,i)=>`<button data-view="${i}" aria-pressed="${i===0}"><span class="tab-number">0${i+1}</span><img src="${image(v.key)}" alt="" loading="lazy" width="110" height="95" /><span>${v.name}</span></button>`).join('')}</div>
 <p class="gallery-note">Ảnh sản phẩm đã tách nền từ ảnh gốc. Hình huy hiệu là hình dựng minh họa. Hình hợp thể có thể gồm các sản phẩm bán riêng.</p><p class="sr-only" id="gallery-status" aria-live="polite"></p>
</section>
<section class="combination" id="hop-the" aria-labelledby="combine-title">
 <div class="combination-copy"><p class="eyebrow gold">HỢP THỂ D9</p><h2 id="combine-title">KHI CẢ ĐỘI HÌNH<br><em>CÙNG THỨC TỈNH.</em></h2><p>Rex Kaiser ở trung tâm.<br>Các chiến binh D9 mở rộng diện mạo hợp thể.</p><p class="muted">Khám phá Rex Kaiser Black Edition ở trung tâm, kết hợp cùng các chiến binh D9 nhiều màu. Hãy kiểm tra đúng phiên bản và từng chiến binh đi kèm tại gian hàng.</p>${cta('Tìm hiểu bộ hợp thể','text-link gold',storefront)}</div>
 <div class="combination-art"><span aria-hidden="true">D9</span><img src="${image('combined')}" alt="Rex Kaiser Black Edition hợp thể cùng các chiến binh D9 nhiều màu" width="1320" height="1191" loading="lazy" /><p>Ảnh minh họa cấu hình hợp thể. Các chiến binh có thể bán riêng.</p></div>
</section>
<section class="video-section section" id="video" aria-labelledby="video-title">
 <div class="section-meta"><span>VIDEO THỰC TẾ</span><span>XEM TRƯỚC KHI CHỌN</span></div>
 <div class="video-layout"><div><h2 id="video-title">TỪ HÌNH ẢNH.<br><em>ĐẾN CHUYỂN ĐỘNG.</em></h2><p>Quan sát mô hình Black Edition Deluxe và quá trình biến đổi qua video thực tế.</p><a class="text-link" href="#chon-san-pham">Xem sản phẩm ${arrow}</a></div><div class="video-frame"><video controls playsinline preload="none" poster="/images/rex-kaiser-black-robot.webp" aria-label="Video biến hình Rex Kaiser Black Edition Deluxe"><source src="/videos/rex-kaiser-black-deluxe.mp4" type="video/mp4" />Trình duyệt không hỗ trợ video. <a href="/videos/rex-kaiser-black-deluxe.mp4">Tải video</a></video><span>REX KAISER BLACK EDITION DELUXE · VIDEO THỰC TẾ</span></div></div>
</section>
<section class="purchase section" id="chon-san-pham" aria-labelledby="purchase-title">
 <div class="section-meta"><span>THÊM VÀO BỘ SƯU TẬP</span><span>SUNLAND HOBBY</span></div>
 <div class="purchase-layout"><div class="box-art"><img src="${image('box')}" alt="Bao bì gốc Rex Kaiser Black Edition với chữ in nguyên bản" width="784" height="906" loading="lazy" /></div><div class="purchase-copy"><p class="eyebrow gold">MINIFORCE · DINOID WARRIORS</p><h2 id="purchase-title">REX KAISER<br><em>BLACK EDITION.</em></h2><p class="purchase-subtitle">Dành một vị trí cho bạo chúa.</p><dl><div><dt>Phiên bản giới thiệu</dt><dd>Black Edition Deluxe</dd></div><div><dt>Chiều cao robot</dt><dd>32 cm</dd></div><div><dt>Thị trường phiên bản</dt><dd>Chinese Version</dd></div><div><dt>Mua hàng tại</dt><dd>Shopee · Sunland Hobby</dd></div></dl><p class="purchase-note">Giá, tình trạng hàng và phụ kiện theo từng phân loại tại Shopee. Kiểm tra đúng phiên bản trước khi đặt mua.</p>${cta('Xem giá & mua trên Shopee')}<p class="small-note">Bạn sẽ được chuyển đến sản phẩm Rex Kaiser Black trên Shopee.</p></div></div>
</section>
<section class="faq section" id="cau-hoi" aria-labelledby="faq-title"><div class="section-meta"><span>CÂU HỎI THƯỜNG GẶP</span><span>TRƯỚC KHI MUA</span></div><div class="faq-layout"><h2 id="faq-title">BẠN MUỐN<br><em>BIẾT THÊM?</em></h2><div class="faq-list">
<details><summary>Đây là bản CoolPlay hay Deluxe?<span>+</span></summary><p>Trang này giới thiệu Rex Kaiser Black Edition Deluxe 32 cm. CoolPlay là phân loại khác. Khi đến Shopee, bạn hãy chọn đúng tên phiên bản và kiểm tra mô tả của shop.</p></details>
<details><summary>Trang này giới thiệu bản Hàn hay bản Trung?<span>+</span></summary><p>Phiên bản giới thiệu là Chinese Version. Không nên xác định phiên bản chỉ từ hình minh họa. Bạn hãy đối chiếu bao bì, mô tả và phân loại trên Shopee trước khi mua.</p></details>
<details><summary>Bộ Rex Kaiser có sẵn toàn bộ chiến binh D9 không?<span>+</span></summary><p>Ảnh hợp thể cho thấy một cấu hình kết hợp. Các chiến binh D9 có thể bán riêng; chỉ nội dung phân loại tại Shopee mới xác định đầy đủ sản phẩm và phụ kiện bạn nhận được.</p></details>
<details><summary>Làm sao chọn đúng bộ hợp thể?<span>+</span></summary><p>Gửi tên hoặc hình bộ Rex Kaiser bạn đang có qua chat Shopee của Sunland Hobby để shop kiểm tra phiên bản và khả năng tương thích trước khi đặt mua.</p></details>
<details><summary>Thông tin bản Hàn có giống bản Trung không?<span>+</span></summary><p>Machina Core giới thiệu bản Hàn với mã MFS7. Trang Sunland giới thiệu Chinese Version; bao bì, phụ kiện, mã sản phẩm và chính sách có thể khác. Thông số đóng hộp, chứng nhận KC, giá và bảo hành của bản Hàn không được áp dụng mặc định cho sản phẩm tại Sunland.</p></details>
<details><summary>Áo choàng có thể tạo dáng không?<span>+</span></summary><p>Nguồn Machina Core mô tả áo choàng Kaiser của bản Hàn có 6 dây kim loại để tạo dáng. Với bản Trung, hãy hỏi shop về cấu tạo áo choàng trong đúng phân loại bạn chọn.</p></details>
<details><summary>Mua hàng và nhận hỗ trợ ở đâu?<span>+</span></summary><p>Các nút mua Rex Kaiser Black dẫn đến trang sản phẩm trên Shopee của Sunland Hobby. Bạn có thể xem giá hiện tại, hỏi về phụ kiện, giao hàng và chính sách hỗ trợ tại đó.</p></details>
</div></div></section>
<section class="closing"><p class="eyebrow">BUILD · COLLECT · ENJOY</p><h2>GÓC TRƯNG BÀY CỦA BẠN.<br><em>KHÍ CHẤT CỦA BLACK EDITION.</em></h2><a class="button red" href="https://www.facebook.com/sunlandhobby" target="_blank" rel="noopener noreferrer">Theo dõi Sunland Hobby trên Facebook ${external}</a></section>
</main>
<footer><a class="footer-brand" href="#dau-trang">SUN<span>LAND</span> HOBBY</a><p>© Sunland Hobby. Hình ảnh sản phẩm: SAMG/EBS và nguồn ảnh được cung cấp. Nội dung thiết kế tham khảo: Machina Core.<br>Miniforce, Dinoid Warriors và các nhân vật thuộc chủ sở hữu tương ứng.</p><a href="#dau-trang" class="text-link">Về đầu trang ↑</a></footer>
<div class="mobile-purchase"><div><strong>REX KAISER</strong><span>Black Edition Deluxe · Chinese Version</span></div><p>Giá & phụ kiện theo phân loại tại Shopee</p>${cta('Mua trên Shopee')}</div>
<dialog id="image-dialog" aria-label="Ảnh sản phẩm phóng to"><button class="close-dialog" aria-label="Đóng ảnh">Đóng ×</button><img src="${image('box')}" alt="" /><p></p></dialog>
`;
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
let index=0,manualUntil=0,isLoading=false,inView=false,hover=false,focus=false;
const reduced=matchMedia('(prefers-reduced-motion: reduce)'),stage=document.querySelector('.gallery-stage'),gallery=document.querySelector('.gallery'),mainImage=document.querySelector('#gallery-image'),tabs=[...document.querySelectorAll('[data-view]')],pause=document.querySelector('#autoplay');
let paused=reduced.matches;
function pauseLabel(){pause.textContent=paused?'Tự chuyển':'Tạm dừng';pause.setAttribute('aria-pressed',String(paused));}
pauseLabel();reduced.addEventListener('change',e=>{if(e.matches){paused=true;pauseLabel();}});
let request=0;
function showView(next,manual=true){index=(next+views.length)%views.length;const view=views[index];isLoading=true;const id=++request;mainImage.src=image(view.key);mainImage.alt=`Rex Kaiser Black Edition — ${view.name}`;mainImage.decode().catch(()=>{}).finally(()=>{if(id===request)isLoading=false;});document.querySelector('#view-name').textContent=view.name;document.querySelector('#view-title').textContent=view.title;document.querySelector('#view-description').textContent=view.text;document.querySelector('.gallery-count').textContent=`0${index+1} / 06`;tabs.forEach((tab,i)=>tab.setAttribute('aria-pressed',String(index===i)));if(manual){manualUntil=Date.now()+10000;document.querySelector('#gallery-status').textContent=`${view.name}, ảnh ${index+1} trên 6`;const tab=tabs[index];if(tab.offsetLeft<tab.parentElement.scrollLeft||tab.offsetLeft+tab.offsetWidth>tab.parentElement.scrollLeft+tab.parentElement.clientWidth)tab.parentElement.scrollTo({left:tab.offsetLeft-tab.parentElement.offsetLeft,behavior:reduced.matches?'instant':'smooth'});}}
tabs.forEach((tab,i)=>tab.addEventListener('click',()=>showView(i)));
document.querySelector('.gallery-prev').addEventListener('click',()=>showView(index-1));document.querySelector('.gallery-next').addEventListener('click',()=>showView(index+1));
stage.addEventListener('keydown',e=>{if(e.target!==stage)return;if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();showView(e.key==='Home'?0:e.key==='End'?5:index+(e.key==='ArrowLeft'?-1:1));}});
let pointer;
stage.addEventListener('pointerdown',e=>{if(e.target.closest('button')||!e.isPrimary)return;pointer={x:e.clientX,y:e.clientY,id:e.pointerId};});
stage.addEventListener('pointerup',e=>{if(!pointer||e.pointerId!==pointer.id)return;const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3)showView(index+(dx<0?1:-1));pointer=null;});stage.addEventListener('pointercancel',()=>pointer=null);
gallery.addEventListener('mouseenter',()=>hover=true);gallery.addEventListener('mouseleave',()=>hover=false);gallery.addEventListener('focusin',()=>focus=true);gallery.addEventListener('focusout',e=>{focus=gallery.contains(e.relatedTarget);});
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;},{threshold:.25}).observe(gallery);
pause.addEventListener('click',()=>{paused=!paused;pauseLabel();manualUntil=Date.now()+1000;});
setInterval(()=>{if(!paused&&!hover&&!focus&&!document.hidden&&inView&&!isLoading&&Date.now()>manualUntil)showView(index+1,false);},7000);
const dialog=document.querySelector('#image-dialog');document.querySelector('.zoom-button').addEventListener('click',()=>{dialog.querySelector('img').src=image(views[index].key);dialog.querySelector('img').alt=mainImage.alt;dialog.querySelector('p').textContent=views[index].name;dialog.showModal();});document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
const bar=document.querySelector('.reading-progress');let scheduled=false;function progress(){const max=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${max>0?scrollY/max:0})`;scheduled=false;}addEventListener('scroll',()=>{if(!scheduled){requestAnimationFrame(progress);scheduled=true;}},{passive:true});addEventListener('resize',()=>{progress();if(innerWidth>1000)closeMenu();});progress();

const componentRail=document.querySelector('.component-rail');
document.querySelector('.component-prev').addEventListener('click',()=>componentRail.scrollBy({left:-componentRail.clientWidth*.7,behavior:reduced.matches?'instant':'smooth'}));
document.querySelector('.component-next').addEventListener('click',()=>componentRail.scrollBy({left:componentRail.clientWidth*.7,behavior:reduced.matches?'instant':'smooth'}));
document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-mode]').forEach(other=>{other.classList.toggle('selected',other===button);other.setAttribute('aria-pressed',String(other===button));});}));
