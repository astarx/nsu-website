import axios from 'axios'


$(document).ready(function () {
    $('body[data-facebook-token]').each(function () {
        let token = $(this).attr('data-facebook-token');
        $('div[data-facebook-album]').each(function(){
            let gallery_group = $(this)
            let album = $(this).attr('data-facebook-album');
            let pageing = null

            let query = function (url) {
                axios.get(url).then(function (response) {
                    pageing = response.data.paging
                    for (let x = 0 ; x < response.data.data.length; x++){
                        $(gallery_group).append("<div class=\"col-lg-3 col-md-4 col-xs-6\">\n" +
                            "                <a href=\" "+response.data.data[x].images[0].source+" \" data-toggle=\"lightbox\"\n" +
                            "                   data-gallery=\"example-gallery\" class=\"d-block mb-4 h-100\">\n" +
                            "                    <img src=\" "+response.data.data[x].images[0].source+" \" class=\"img-fluid\">\n" +
                            "                </a>\n" +
                            "            </div>");

                    }
                })
            }
            query('https://graph.facebook.com/v2.8/'+ album + '/photos?fields=images,link&limit=30&access_token='+ token)
            $(window).scroll(function () {
                if ($(window).scrollTop() + $(window).height() === $(document).height() &&  pageing.hasOwnProperty("next")) {
                    query(pageing.next)
                }
            })
        })
    })
})