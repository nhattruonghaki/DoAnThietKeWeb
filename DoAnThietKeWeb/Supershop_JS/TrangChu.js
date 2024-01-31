var showDuration = 2000; // thời gian hiển thị của 1 hình (ms)
var transitionDuration = 1000; // thời gian chạy hiệu ứng chuyển hình (ms)
var slideshow = document.querySelector('#slideshow');
var slides = document.querySelectorAll('#slideshow .slide');
var numOfSlide = slides.length;
var current = 0;
var next = 1;

slides[current].classList.add('current');
// cách thêm class cho 1 thẻ trong js
slideshow.style.transitionDuration = transitionDuration + 'ms';
//  cách thay đổi inline css của 1 thẻ trong js, lưu ý cách ghi tên thuộc tính css

function changeSlide() {
  slides[next].classList.add('next');
  slides[current].classList.remove('current');
  slides[current].classList.add('prev');
  // thêm class nẽt để tạo hiệu ứng,
  // hẹn thời gian xử lý sau khi kết thúc hiệu ứng thì đưa current cũ ra ngoài và chuyển next thành currnet mới

  setTimeout(function () {
    slides[current].classList.remove('prev');
    // cach bo class cho 1 the trong js
    slides[next].classList.remove('next');
    slides[next].classList.add('current');
    current = next;
    next = (next + 1)%numOfSlide;
  }, transitionDuration);
}

setInterval(changeSlide,showDuration); // hen thoi gian lap lai viec chuyen slide
