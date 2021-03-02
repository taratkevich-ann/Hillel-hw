const $searchForm = $('#search-form')
const $input = $('[name="video-name"]')
const $slider = $('.slider')

$(document).ready(function () {
    $slider.slick({
        arrows: true
    })
})

const createContent = (data) => {
    const dataObj = JSON.parse(data)
    for (let i = 0; i < dataObj.results.length; i++) {
        $slider.slick('slickAdd', $('<video>').addClass('slider-video').attr('src', dataObj.results[i].previewUrl).attr('controls', true))
    }
    $slider.on('beforeChange', function(){
        const video = $slider.find('.slick-active')[0]
        if(!video.paused) video.pause()
    })
}

const getVideos = (data) => {
    $.get('https://itunes.apple.com/search', {limit: 10, entity: "musicVideo", term: $input.val()})
        .done((response) => createContent(response))
        .fail((error) => console.log('error: ', error))
}

$searchForm.on('submit', function (e) {
    e.preventDefault()
    const text = $input.val().replaceAll(' ', '+')
    getVideos(text)
})