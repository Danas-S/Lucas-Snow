document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const searchPanelHeader = document.querySelector('header .search-panel');
    const searchPanelFooter = document.querySelector('footer .search-panel');
    const searchPopup = document.querySelector('.search-popup');
    const searchPopupClose = document.querySelector('.search-popup-close');
    const header = document.querySelector('header');
    const mobileHeader = document.querySelector('.mobile-header');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hoverPopup = document.querySelector('.hover-popup');
    const discountOpen = document.querySelector('.discount-button');
    const mountainJew = document.querySelector('.mountain-jew');
    const mountainJewAudio = mountainJew.querySelector('audio');
    const formSubmitButton = document.querySelector('.contact-form .contact-button[type=submit]');
    //Contact form
    let contactForm = null;
    let contactFormError = null;
    //Contact Inputs
    let contactNameInput = null;
    let contactEmailInput = null;
    let contactPhoneInput = null;
    let contactMessageInput = null;
    if(document.title.includes("Contact")) {
        contactForm = document.querySelector('.contact-form');
        contactNameInput = document.querySelector('.contact-form #name');
        contactEmailInput = document.querySelector('.contact-form #email');
        contactPhoneInput = document.querySelector('.contact-form #phone');
        contactMessageInput = document.querySelector('.contact-form #message');
        contactFormError = document.querySelector('.contact-form-wrapper .error-message');
        contactFormSuccess = document.querySelector('.contact-form-wrapper .submit-message');
    }

    
    //Modifiers
    const show = 'show';
    const hide = 'hide';
    const popupOpened = 'popup-opened';
    
    //Form serialize
    function serializeFormData(form) {
        const formData = new FormData(form);
        const serializedData = {};
        for (const [name, value] of formData) {
            serializedData[name] = value;
        }
        return serializedData;
    }
    //Number format
    function phoneFormat(input) {//returns (###) ###-####
        input = input.replace(/\D/g,'');
        const size = input.length;
        if (size>0) {input="("+input}
        if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
        if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
        if (size===10) {input = input.slice(0,13)}
        console.log(input);
        return input;
    }
    //Event Listeners
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
        if(header.classList.contains(show)) {
            header.classList.remove(show);
            hoverPopup.classList.remove(show);
            document.body.classList.remove(popupOpened);
        } else {
            header.classList.add(show);
            hoverPopup.classList.add(show);
            document.body.classList.add(popupOpened);
        }
    });
    hoverPopup.addEventListener('click', e => {
        if(header.classList.contains(show)) {
            header.classList.remove(show);
        }
        if(mountainJew.classList.contains(show)) {
            mountainJew.classList.remove(show);
            mountainJew.querySelector('audio').pause();
            mobileHeader.classList.remove(hide);
        }
        hoverPopup.classList.remove(show);
        document.body.classList.remove(popupOpened);
    });
    discountOpen.addEventListener('click', e => {
        document.body.classList.add(popupOpened);
        e.target.remove();
        hoverPopup.classList.add(show);
        mobileHeader.classList.add(hide);
        mountainJew.classList.add(show);
        mountainJewAudio.currentTime = 0;
        mountainJewAudio.play();
    });
    mountainJew.addEventListener('click', e => {
        document.body.classList.remove(popupOpened);
        hoverPopup.classList.remove(show);
        mobileHeader.classList.remove(hide);
        mountainJew.classList.remove(show);
        mountainJew.querySelector('audio').pause();
    });

    if(document.title.includes("Contact")) {
        const nameRegex = /^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
        const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        contactPhoneInput.addEventListener('keydown', e => {
            const phone = e.target.value;
            contactPhoneInput.value = phoneFormat(phone);
        });
        formSubmitButton.addEventListener('click', e => {
            e.preventDefault();
            const nameStatus = nameRegex.test(contactNameInput.value);
            console.log('nameRegex', nameRegex.test(contactNameInput.value));
            const emailStatus = emailRegex.test(contactEmailInput.value);
            console.log('emailRegex', emailRegex.test(contactEmailInput.value));
            const phoneStatus = phoneRegex.test(contactPhoneInput.value);
            console.log('contactPhoneInput.value=', contactPhoneInput.value);
            console.log('phoneRegex', phoneRegex.test(contactPhoneInput.value));
            //Clear Form error field
            contactFormError.textContent = "";
            if (!nameStatus) {
                contactFormError.innerHTML += "<span>Error: Enter your full name.</span></br>";
            } 
            if (!emailStatus) {
                contactFormError.innerHTML += "<span>Error: Enter your email.</span></br>";
            } 
            if (!phoneStatus) {
                contactFormError.innerHTML += "<span>Error: Enter your phone.</span></br>";
            } 
            if(nameStatus && emailStatus && phoneStatus){
                const formData = serializeFormData(contactForm);
                contactForm.classList.add("hide");
                contactFormSuccess.classList.add("show");
                console.log("form: ", formData);
            }
        });
    }
});