document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.header-mobile'),
    btnMenu = document.querySelector('.btn-menu'),
    html = document.querySelector('html');

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('open')

        btnMenu.classList.toggle('btn-menu--open')
        html.classList.toggle('no-scroll')
    })

    function resize() {
        let width = window.innerWidth;

        if (width > 1280) {
            menu.classList.remove('open')
            btnMenu.classList.remove('btn-menu--open')
            html.classList.remove('no-scroll')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

    let dropdownEvent = document.querySelector('#dropdown-events'),
        dropdownContainer = document.querySelector('.request-form__dropdown'),
        dropdownItem = document.querySelectorAll('.request-form__dropdown-item'),
        dropdownSelected = document.querySelector('#dropdown-events span'),
        inputEvent = document.querySelector('#selected-event')

    dropdownEvent.addEventListener('click', () => {
        dropdownEvent.closest('.request-form__dropdown').classList.toggle('open')
    })

    dropdownItem.forEach(el => {
        el.addEventListener('click', () => {
            let eventName = el.textContent;
            
            eventUpdate(eventName)
        })
    });

    function eventUpdate(name) {
        inputEvent.value = name;
        dropdownSelected.innerHTML = name;
        dropdownContainer.classList.remove('open')
    }

    // Мероприятия
    const wrapper = document.querySelector('.calendar__wrapper');
    const itemButtons = wrapper.querySelectorAll('.calendar__item-btn');
    const eventDetail = wrapper.querySelector('.event-detail');
    const details = wrapper.querySelector('.calendar__detail');
  
    itemButtons.forEach(button => {
      button.addEventListener('click', () => {
        details.style.display = 'block';
        eventDetail.classList.toggle('open')
      });
    });

    // О клубе
    let aboutBtn = document.querySelectorAll('.about__item-btn');
    const aboutDetail = document.querySelector('#about-detail');

    aboutBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            aboutDetail.classList.toggle('open')
        })
    })
})
