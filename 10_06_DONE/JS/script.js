// Gom hết thẻ img vô mảng
const IMAGES = document.querySelectorAll("img");
// Set size theo data-type
const SIZES = {
    showcase: "100vw",
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px",
};

//
function makeSrcset(imgSrc) {
    // Tạo 1 mảng rỗng để chứa
    let markup = [];
    // Độ rộng để 400px
    let width = 400;

    // srcset có 5 width tương ứng: 400px, 800px, 1200px, 1600px, 2000px vì vậy loop 5 times
    for (let i = 0; i<5; i++) {
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width+=400; // mỗi lần loop +400px
    }

    // join() mặc định return 1 mảng chứa các giá trị cách nhau bằng dấu phẩy
    // vd: [1, 2, 3] => join() = '1,2,3' | join('') = '123'
    return markup.join();
}

// For loop từng ảnh
for (let i = 0; i<IMAGES.length; i++) {
    // Nhận value trong thuộc tính src
    let imgSrc = IMAGES[i].getAttribute("src");
    // cắt đuôi '-800.jpg' => start = 0 đến trước end = -8
    imgSrc = imgSrc.slice(0,-8);
    // Gọi hàm makeSrcset để set srcset
    let srcset = makeSrcset(imgSrc);
    // Thêm thuộc tính srcset vào link ảnh
    IMAGES[i].setAttribute("srcset", srcset);

    // Tại thuộc tính data-type
    let type = IMAGES[i].getAttribute("data-type");
    // Phân loại size theo type
    let sizes = SIZES[type];
    // Set size theo data-type trong biến hằng SIZES
    IMAGES[i].setAttribute("sizes", sizes);

}
