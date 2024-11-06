document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const searchPanelHeader = document.querySelector('header .search-panel');
    const searchPanelFooter = document.querySelector('footer .search-panel');
    const searchPopup = document.querySelector('.search-popup');
    const searchPopupClose = document.querySelector('.search-popup-close');
    const headerMenu = document.querySelector('header');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hoverPopup = document.querySelector('.hover-popup');
    
    // Event Listeners
    searchPanelHeader.addEventListener('click', e => {
        searchPopup.classList.add('show');
        document.body.classList.add('popup-opened');
    });
    searchPanelFooter.addEventListener('click', e => {
        searchPopup.classList.add('show');
        document.body.classList.add('popup-opened');
    });
    searchPopupClose.addEventListener('click', e => {
        searchPopup.classList.remove('show');
        document.body.classList.remove('popup-opened');
    });
    mobileMenu.addEventListener('click', e => {
        if(headerMenu.classList.contains('show')) {
            headerMenu.classList.remove('show');
            hoverPopup.classList.remove('show');
            document.body.classList.remove('popup-opened');
        } else {
            headerMenu.classList.add('show');
            hoverPopup.classList.add('show');
            document.body.classList.add('popup-opened');
        }
    });
    hoverPopup.addEventListener('click', e => {
        headerMenu.classList.remove('show');
        hoverPopup.classList.remove('show');
        document.body.classList.remove('popup-opened');
    });
});