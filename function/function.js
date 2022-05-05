$(window).resize(function() {
    setSidebarBg();
});

function setSidebarBg(){
    if( $('body').height() < 900) {
        $('.sidebar__content > div').css('height', 1100)
    }else {
        $('.sidebar__content > div').css('height',$('body').height())
    }
}
setSidebarBg();

function calendar(className){
    const date = new Date();
    const [month, day, year] = [(date.getMonth() + 1), date.getDate(), date.getFullYear()];
    console.log(month, day, year)
    const myCalendar = new TavoCalendar(className, {
        dates: `${year - month - day }`,
        // date_start: "",
        // date_end: "",
        range_select: false,
        multi_select: false,
        future_select: true,
        past_select: true,
        frozen: false
    })
}

$('.detail__paymant--open').on('click', function(){
    $('.detail__paymant--show').toggle()
})

$('.js-edit-btn').on('click', function(){
    var thisElement = $(this).parent().parent().parent();
    thisElement.hide()
    $('.general__item--active').each(function(id, elem){
        if(thisElement.data('id') == $(elem).data('id')) {
            $(elem).show()
        } 
    })
})

$('.js-save-btn').on('click', function(){
    var thisElement = $(this).parent().parent().parent().parent();
    thisElement.hide()
    $('.general__item--deactive').each(function(id, elem){
        if(thisElement.data('id') == $(elem).data('id')) {
            $(elem).show()
        } 
    })
})

$(".quantity__btn").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
  
    if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
  
    $button.parent().find("input").val(newVal);
  
});


$('.upload__label--input').on('change', function(){
    fileUploadImage(this);
})

function fileUploadImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            input.value = null;
            $('.upload').prepend(`
                <div class="upload__cover">
                    <img src="${e.target.result}" alt="" class="upload__cover--img">
                    <div class="upload__cover--btns d-block align-items-center">
                        <img src="img/reset.svg" alt="" class="upload__cover--btn">
                        <img src="img/cancel.svg" alt="" class="upload__cover--btn upload__cover--delete">
                    </div>
                </div>
            `)
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$('.upload').on('click', '.upload__cover--delete', function(){
    $(this).parent().parent().remove();
})

$('body').on('click', '.open', function(){
    $('body').addClass('overflow-hidden')
})
$('body').on('click', '.close', function(){
    $('body').removeClass('overflow-hidden')
})


$('body').on('click', 'body', function(){
    $('body').removeClass('overflow-hidden')
})

$('.review-popup-open').on('click', function(){
    $('.writing').addClass('active')
})

$('.review-popup-close').on('click', function(){
    $('.writing').removeClass('active')
})


function hotelHeadPhotoUpload(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            input.value = null;
            $('.photos__dragdrop').prepend(`
                <div class="photos__dragdrop--item photos__item">
                    <div class="photos__item--in">
                        <div class="photos__item--btn d-flex align-items-center">
                            <button class="photos__open-popup open btn d-flex align-items-center">
                                <img src="./img/item-edit.svg" alt="">
                                Edit
                            </button>
                            <button class="btn d-flex align-items-center">
                                <img src="./img/cancel.svg" alt="">
                            </button>
                        </div>
                        <figure class="photos__item--cover">
                            <img src="${e.target.result}" alt="">
                        </figure>
                        <label class="photos__item--label d-flex align-items-center justify-content-center">
                            <input type="checkbox" class="photos__item--checkbox">
                            <div class="photos__item--check d-flex align-items-center">
                                <img src="./img/cover-check.svg" alt="">
                                <p>Set as cover</p>
                            </div>
                        </label>
                    </div>
                </div>
            `)
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$('.photos__head--upload').on('change', function(){
    hotelHeadPhotoUpload(this);
})

$('body').on('change', '.photos__head .photos__item--checkbox', function() {
    $('.photos__head .photos__item--checkbox').not(this).prop('checked', false);
});

function hotelBodyPhotoUpload(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            input.value = null;
            $('.photos__body--list').prepend(`
                <div class="photos__dragdrop--item photos__item">
                    <div class="photos__item--in">
                        <div class="photos__item--btn d-flex align-items-center">
                            <button class="photos__open-popup btn d-flex align-items-center">
                                <img src="./img/item-edit.svg" alt="">
                                Edit
                            </button>
                            <button class="btn d-flex align-items-center">
                                <img src="./img/cancel.svg" alt="">
                            </button>
                        </div>
                        <figure class="photos__item--cover">
                            <img src="${e.target.result}" alt="">
                        </figure>
                        <label class="photos__item--label d-flex align-items-center justify-content-center">
                            <input type="checkbox" class="photos__item--checkbox">
                            <div class="photos__item--check d-flex align-items-center">
                                <img src="./img/cover-check.svg" alt="">
                                <p>Set as cover</p>
                            </div>
                        </label>
                    </div>
                </div>
            `)
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$('.photos__body--upload').on('change', function(){
    hotelBodyPhotoUpload(this);
})

$('body').on('change', '.photos__body .photos__item--checkbox', function() {
    $('.photos__body .photos__item--checkbox').not(this).prop('checked', false);
});

$('.upload').on('click', '.upload__cover--delete', function(){
    $(this).parent().parent().remove();
})

$('body').on('click', '.photos__open-popup', function() {
    $('.photos__popup').show();
});

$('body').on('click', '.photos__popup--close', function() {
    $('.photos__popup').hide();
});

$('.js-profile__reviews--btn').on('click', function(){
    $('.js-profile__reviews--btn').removeClass('active');
    var thisElement = $(this);
    $(thisElement).addClass('active');
    $('.profile__reviews--body').each(function(id, elem){
        $(elem).removeClass('active');
        if(thisElement.data('id') == $(elem).data('id')) {
            $(elem).addClass('active');
        } 
    })
})

$('.trips__menu--btn').on('click', function(){
    $('.trips__menu--btn').removeClass('active');
    var thisElement = $(this);
    $(thisElement).addClass('active');
    $('.trips__body').each(function(id, elem){
        $(elem).removeClass('active');
        if(thisElement.data('id') == $(elem).data('id')) {
            $(elem).addClass('active');
        } 
    })
})

$('.trips__item--more').on('click', function(){
    $('.trips__item--more').removeClass('active');
    var thisElement = $(this);
    $(thisElement).addClass('active');
    $('.trips__list--all').each(function(id, elem){
        $(elem).removeClass('active');
        if(thisElement.data('id') == $(elem).data('id')) {
            $(elem).addClass('active');
        } 
    })
})


function projectSlider(){    
    $('.photos__slider').owlCarousel({
        margin:0,
        responsiveClass: true,
        dots: false,
        navContainer: '.photos__slider--navs',
        navText: [
        `<`,
        `>`    
        ],
        responsive:{
            0:{
                items:1,
            }
        }
    })
    
    // $('.projects__slider--dots .owl-dot').on( 'click', function() {
    //     $('.projects__slider').trigger('to.owl.carousel', [$(this).index(), 300]);
    //     $( '.projects__slider--dots .owl-dot' ).removeClass( 'active' );
    //     $(this).addClass( 'active' );
    // })

}
projectSlider()



document.querySelectorAll('.range-slider').forEach(element => {
    const tooltip = element.children[0]
    const range = element.children[1]

    setValue = ()=>{
        const
            newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
            newPosition = 16 - (newValue * 0.32);
            tooltip.innerHTML = `<span>${range.value}</span>`;
            tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };

    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);

});


function profileItemSlider(){    
    $('.profile__items--slider').owlCarousel({
        margin:0,
        responsiveClass: true,
        dotsContainer: '.profile__items--dots',
        dots: true,
        nav: false,
        responsive:{
            0:{
                items:1,
            }
        }
    })
    
    $('.profile__items--dots .owl-dot').on( 'click', function() {
        $('.profile__items').trigger('to.owl.carousel', [$(this).index(), 300]);
        $( '.profile__items--dots .owl-dot' ).removeClass( 'active' );
        $(this).addClass( 'active' );
    })

}
profileItemSlider()

function mapItemsSlider(){    
    $('.maps__item--slider').owlCarousel({
        margin:0,
        responsiveClass: true,
        dotsContainer: '.maps__item--dots',
        // navContainer: '.photos__slider--navs',
        // navText: [`<`,`>`],
        dots: true,
        nav: true,
        responsive:{
            0:{
                items:1,
            }
        }
    })
    
    $('.maps__item--dots .owl-dot').on( 'click', function() {
        $('.maps__item').trigger('to.owl.carousel', [$(this).index(), 300]);
        $( '.maps__item--dots .owl-dot' ).removeClass( 'active' );
        $(this).addClass( 'active' );
    })

}
mapItemsSlider()