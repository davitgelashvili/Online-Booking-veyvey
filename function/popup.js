;(() => {
    'use strict'

    initPopup()

    function initPopup() {
        if (!document.querySelector('[popup]')) return

        const popup = document.querySelector('[popup]')
        const openPopupBtn = document.querySelector('[popup-open]')
        const closePopupBtn = popup.querySelector('[popup-close]')

        function openPopup() {
            popup.classList.add('open')
        }

        function closePopup() {
            popup.classList.remove('open')
        }

        openPopupBtn.addEventListener('click', openPopup)
        closePopupBtn.addEventListener('click', closePopup)
    }
})()
