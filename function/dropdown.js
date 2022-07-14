;(() => {
    'use strict'

    customDropdown()

    function customDropdown() {
        if (!document.querySelector('.dropdown')) return

        const dropdowns = document.querySelectorAll('.dropdown')

        dropdowns.forEach((dropdown) => {
            const trigger = dropdown.querySelector('.dropdown__trigger')
            trigger.addEventListener('click', () => {
                dropdown.classList.toggle('open')
            })

            const options = dropdown.querySelectorAll('.dropdown__options li')

            options.forEach((option) => {
                option.addEventListener('click', () => {
                    const selectedOptionContent = option.innerHTML

                    dropdown.querySelector('.dropdown__selected').innerHTML = selectedOptionContent
                    dropdown.classList.remove('open')
                })
            })
        })

        // Close Dropdown on outside click
        document.addEventListener('click', (e) => {
            if (
                !e.target.classList.contains('dropdown') &&
                !e.target.classList.contains('dropdown__trigger') &&
                !e.target.classList.contains('dropdown__list')
            ) {
                dropdowns.forEach((dropdown) => {
                    dropdown.classList.remove('open')
                })
            }
        })
    }
})()
