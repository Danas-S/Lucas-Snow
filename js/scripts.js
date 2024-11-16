document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const searchPanelHeader = document.querySelector('header .search-panel');
    const searchPanelFooter = document.querySelector('footer .search-panel');
    const searchPopup = document.querySelector('.search-popup');
    const searchPopupClose = document.querySelector('.search-popup-close');
    const headerMenu = document.querySelector('header');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hoverPopup = document.querySelector('.hover-popup');
    const discountOpen = document.querySelector('.discount-button');
    const mountainJew = document.querySelector('.mountain-jew');
    const mountainJewAudio = mountainJew.querySelector('audio');
    
    //Modifiers
    const show = 'show';
    const popupOpened = 'popup-opened';
    
    // Event Listeners
    searchPanelHeader.addEventListener('click', e => {
        searchPopup.classList.add(show);
        document.body.classList.add(popupOpened);
    });
    searchPanelFooter.addEventListener('click', e => {
        searchPopup.classList.add(show);
        document.body.classList.add(popupOpened);
    });
    searchPopupClose.addEventListener('click', e => {
        searchPopup.classList.remove(show);
        document.body.classList.remove(popupOpened);
    });
    mobileMenu.addEventListener('click', e => {
        if(headerMenu.classList.contains(show)) {
            headerMenu.classList.remove(show);
            hoverPopup.classList.remove(show);
            document.body.classList.remove(popupOpened);
        } else {
            headerMenu.classList.add(show);
            hoverPopup.classList.add(show);
            document.body.classList.add(popupOpened);
        }
    });
    hoverPopup.addEventListener('click', e => {
        if(headerMenu.classList.contains(show)) {
            headerMenu.classList.remove(show);
        }
        if(mountainJew.classList.contains(show)) {
            mountainJew.classList.remove(show);
            mountainJew.querySelector('audio').pause();
        }
        hoverPopup.classList.remove(show);
        document.body.classList.remove(popupOpened);
    });
    discountOpen.addEventListener('click', e => {
        document.body.classList.add(popupOpened);
        e.target.remove();
        hoverPopup.classList.add(show);
        mountainJew.classList.add(show);
        mountainJewAudio.currentTime = 0;
        mountainJewAudio.play();
    });
    mountainJew.addEventListener('click', e => {
        document.body.classList.remove(popupOpened);
        hoverPopup.classList.remove(show);
        mountainJew.classList.remove(show);
        mountainJew.querySelector('audio').pause();
    });
});