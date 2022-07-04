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

        function closePopup(popup) {
            popup.classList.remove('open')
        }

        openPopupBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const popup = document.querySelector(`#${btn.dataset.popupTarget}`)
                openPopup(popup)
            })
        })

        closePopupBtns.forEach((btn) => {
            btn.addEventListener('click', function () {
                closePopup(this.closest('.popup'))
            })
        })
    }
})()
