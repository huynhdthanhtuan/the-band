var header = document.querySelector("#header");
var homeButton = document.querySelector(".nav > li:first-child");
var moreButton = document.querySelector('.more-button')
var subnav = document.querySelector('.subnav');

/*  BuyTicketButton - modalCloseButton.onclick   */
var modal = document.querySelector('.modal');
var buyTicketButtons = document.querySelectorAll('.buy-ticket-btn');
var modalCloseButton = document.querySelector('.modal-container__close-btn');

for(var i = 0; i < buyTicketButtons.length; i++) {
    buyTicketButtons[i].onclick = function() {
        modal.style.display = 'flex';
    }

    modalCloseButton.onclick = function() {
        modal.style.display = 'none';
    }
}


/* MOBILE */
if (window.matchMedia("(max-width: 739px)").matches) {
    var mobileMoreButton = document.querySelector(".mobile-more-button");

    //Ẩn hiện navigation khi bấm button more-mobile (góc trên bên phải)
    header.style.overflow = 'hidden';
    var height = header.clientHeight;

    mobileMoreButton.onclick = function () {
        // Ẩn subnav
        subnav.style.display = 'none';

        if(header.style.overflow === 'hidden') {
            header.style.overflow = 'visible';
            header.style.height = 'auto';
        } else {
            header.style.overflow = 'hidden';
            header.style.height = `${height}px`;
        }
    }


    //Lấy tất cả các nút bấm của nav
    var navButtons = document.querySelectorAll('#header > .nav > li');

    //Lặp qua nó
    navButtons.forEach (function(navButton) {

        //LNSK kích chuột -> ẩn navigation của header 
        navButton.onclick = function (event) {
            if(event.target.innerHTML.indexOf('More') === -1) {
                header.style.overflow = 'hidden';
                header.style.height = `${height}px`;
            }
        }
    });


    
    /* Ẩn hiện subnav */
    //Lấy tất cả các nút bấm của subnav (3)
    var subnavButtons = document.querySelectorAll('.subnav li');
    
    subnavButtons.forEach(function(subnavButton) {
        // Ẩn nav và subnav khi lướt màn hình
        window.onscroll = function() {
            header.style.overflow = 'hidden';
            header.style.height = `${height}px`;
        }

        // Ẩn hiện subnav khi nhấn more-mobile-button
        moreButton.onclick = function (event) {
            if(subnav.style.display === 'none' || subnav.style.display === '') {
                subnav.style.display = 'block';
            } else {
                subnav.style.display = 'none';
            }
        }


        // Ẩn nav và subnav khi chạm vào phần không thuộc nav và subnav
        // moreButton.onmouseleave = function () {
        //     subnav.style.display = 'none';
        // }

        // subnavButton.onclick = function(event) {
        //     event.preventDefault();
        //     subnav.style.display = 'block';
        // }
    });
    


    /* Open apps on mobile-device  */
    var mapsApp = document.querySelector('.contact-info .contact-location a');
    mapsApp.setAttribute("href", "geo:124.028582,-29.201930");
    
    var emailApp = document.querySelector('.contact-info .contact-email a');
    emailApp.setAttribute("href", "mailto:tuan40655@gmail.com");

    var facebookApp = document.querySelector('.socials-list .facebook-app');
    facebookApp.setAttribute("href", "fb://facewebmodal/f?href=https://www.facebook.com/huynhducthanhtuan/");
    
    var instagramApp = document.querySelector('.socials-list .instagram-app');
    instagramApp.setAttribute("href", "instagram://user?username=hdttuan");
    
    var youtubeApp = document.querySelector('.socials-list .youtube-app');
    youtubeApp.setAttribute("href", "vnd.youtube:IYCxDVoy6lo");
    
} 

/* PC & TABLET  */
else {

}