;(() => {
    'use strict'

    if (!document.querySelector('[popup]')) return

    initPopup()

    function initPopup() {
        const openPopupBtns = document.querySelectorAll('[popup-open]')
        const closePopupBtns = document.querySelectorAll('[popup-close]')

        function openPopup(popup) {
            popup.classList.add('open')
        }

        function closePopup() {
            const popups = document.querySelectorAll('[popup]')
            popups.forEach((popup) => {
                if (popup.classList.contains('open')) {
                    popup.classList.remove('open')
                } else {
                    return
                }
            })
        }

        openPopupBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const popup = document.querySelector(`#${btn.dataset.popupTarget}`)
                openPopup(popup)
            })
        })

        closePopupBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                closePopup()
            })
        })
    }
})()
