let naver = document.getElementById('naver');
naver.addEventListener('click', function(event){
  window.open('https://www.naver.com/', '_blank');
});

let daum = document.getElementById('daum');
daum.addEventListener('click', function(event){
  window.open('https://www.daum.net/', '_blank');
});

let duksung = document.getElementById('duksung');
duksung.addEventListener('click', function(event){
  window.open('https://www.duksung.ac.kr/main.do', '_blank');
});

let picture = document.getElementById('picture');
picture.addEventListener('mouseover', function(event){ 
  picture.src=('https://i.pinimg.com/originals/78/29/aa/7829aae50e38dfe50100a59423251805.png');
});
picture.addEventListener('mouseout',function(event){
  picture.src=('https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/111244088_2750385825231145_4769597032151565082_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=HDHw9o98mjkAX_KF8Yf&oh=7faf9477f2a38fb11b6039693d07bb85&oe=5F4DFBCE');
});