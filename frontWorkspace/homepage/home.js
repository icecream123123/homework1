document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#top_menu a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toTop = document.querySelector('.nv a[href="#header_wrap"]');
    const toBottom = document.querySelector('.nv a[href="#footer_wrap"]');

    toTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    toBottom.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const imageElements = document.querySelectorAll(".main1_menu1, .main1_menu2, .main1_menu3, .main1_menu4"); // 모든 이미지 요소 선택

    imageElements.forEach(imageElement => {
        imageElement.addEventListener("click", function() {
            const img = this.querySelector("img");
            const newImageUrl = img.src;
            changeBackgroundImages(newImageUrl);
        });
    });
});

function changeBackgroundImages(imageUrl) {
    const hContainer = document.getElementById('h_container'); 
    const fContainer = document.getElementById('f_container');

    hContainer.style.backgroundImage = `url(${imageUrl})`;
    fContainer.style.backgroundImage = `url(${imageUrl})`;
}
