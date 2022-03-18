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

$('.open').on('click', function(){
    $('body').addClass('overflow-hidden')
})
$('.close').on('click', function(){
    $('body').removeClass('overflow-hidden')
})

$('.review-popup-open').on('click', function(){
    $('.writing').addClass('active')
})

$('.review-popup-close').on('click', function(){
    $('.writing').removeClass('active')
})


$('.photos__upload--input').on('change', function(){
    hotelPhotoUpload(this);
})

function hotelPhotoUpload(input) {
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