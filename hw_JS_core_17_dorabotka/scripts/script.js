'use strict'
// position absolute
// -- ЗАВДАННЯ 1----------------------------------------------------------------

$(document).ready(function () {
    let stopTimerId;
    let count = 0;

    // ---  таймер
    function timer (blMin){
        count = 60;
        stopTimerId = setInterval(() => {
            if (count>0) {
                count -= 1;
                let minTimer = Math.trunc(count/60);
                let secTimer = count - (minTimer*60);
                if (minTimer < 10) minTimer = "0" + minTimer;
                if (secTimer < 10) secTimer = "0" + secTimer;
                $(blMin).text(minTimer + ":" + secTimer);
            }
            if (count == 0) {
                $('.message').css('display', 'none');
                $('.message-check').css('display', 'block');
                $('.m-text-2').text('Your time is out!');
                $('.pop-up').css('display', 'block');
            }
        }, 1000);    
    }

    // --- таймер
    function initTimer (blMin){
        count = 60;
        let minTimer = Math.trunc(count/60);
        let secTimer = count - (minTimer*60);
        if (minTimer < 10) minTimer = "0" + minTimer;
        if (secTimer < 10) secTimer = "0" + secTimer;
        $(blMin).text(minTimer + ":" + secTimer);    
    }


    // --- массив порядка и рандомайзер
    let arrOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    
    //--- проверка порядка
    function checkOrder() {
        let flag = true;
        $('.main__puzzle-img img').each(function (index, elem) {
            if (flag) {
                if ($(elem).attr('data-posStart') != $(elem).attr('data-posDrop')) flag = false
            }
        })
        return flag
    }


    //--- вощврат на исходные координаты
    function returnStartPos() {
        $('.main__puzzle-left img').each(function(ind, elem) {
            $(elem).css({
                left: 0,
                top: 0
            })
        })
    }

//--------------------------

    $('#start').css("background-color", "#ee8684")
    $('#check').css("background-color", "#ee8684")

    initTimer('.stw-min');

    $('#new').on('click', function () {
        returnStartPos();
        let shuffleArrOrder = shuffle(arrOrder);
        for (let i = 0; i < shuffleArrOrder.length; i++) {
            $('.main__puzzle-img').eq(i).css('order', shuffleArrOrder[i])
        }
		
		$('#start').prop('disabled', false);
        $('#start').css("background-color", "#e84542")
    })

    $('img').draggable({
        containment: '.main__puzzle',
        grid: [125, 125],
        snap: ".main__puzzle-img, .main__recive-puzzle",
        snapMode: "inner",
        start: function (event, ui) {
            $(event.target).css('z-index', 50)
        }
    })

    $('.main__puzzle-img img').draggable("disable");

    $('.main__recive-puzzle').droppable({
        accept: 'img',
        drop: function (event, ui) {
            let pos = ui.draggable.data().posStart;
            let posDrop = $(event.target).attr('data-posDrop');
            $(ui.draggable).attr('data-posDrop', posDrop);
            $(ui.draggable).css('z-index', 0)
        },
        out: function (event, ui) {
            $(ui.draggable).attr('data-posDrop', 0)
        }
    })

    $('#check').on('click', function () {
        console.log(checkOrder())
		$('.pop-up').css('display', 'block');
        $('.message').css('display', 'block');
        $('.message-check').css('display', 'none');
        $('.m-text-1').text('You still have time, you sure?');
    })

    $('#start').on('click', function () {

        $('.main__puzzle-img img').draggable("enable");
        $('#check').prop('disabled', false);
		$('#new').prop('disabled', true);
		$(this).prop('disabled', true);
        $('#start').css("background-color", "#ee8684")
        $('#check').css("background-color", "#e84542")
        $('#new').css("background-color", "#ee8684")
        timer('.stw-min');
    })

    $('.msgCheck').on('click', function(){
        if(!checkOrder()) {
            $('.message-check').css('display', 'block');
            $('.m-text-2').text('It is a pity, but you lost.');
        }
        if(checkOrder()) {
            $('.message-check').css('display', 'block');
            $('.m-text-2').text('Woohoo, well done, you did it!');
        }
    })
    

    $('.message .msgClose').on('click', function(){
        $('.pop-up').css('display', 'none')
    })


    $('.message-check .msgClose').on('click', function(){
        clearInterval(stopTimerId);
        initTimer('.stw-min');
		returnStartPos();
        $('.pop-up').css('display', 'none');
        $('#check').prop('disabled', true);
        $('#start').prop('disabled', true);
		$('#new').prop('disabled', false);

        $('#start').css("background-color", "#ee8684")
        $('#check').css("background-color", "#ee8684")
        $('#new').css("background-color", "#e84542")
        $('.main__puzzle-img img').draggable("disable");
    })
});

// -- ЗАВДАННЯ 2----------------------------------------------------------------


// -- ЗАВДАННЯ 3----------------------------------------------------------------


// -- ЗАВДАННЯ 4----------------------------------------------------------------
