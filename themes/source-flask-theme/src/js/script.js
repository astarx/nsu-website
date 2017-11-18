import 'tether'
import 'jquery'
// import 'popper.js'
import 'bootstrap/dist/js/bootstrap'

$.fn.extend({
  animateCss: function (animationName, callback) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    this.addClass('animated ' + animationName).one(animationEnd, () => {
      $(this).removeClass('animated ' + animationName)
      if (callback) {
        callback()
      }
    })
    return this
  }
})

$(document).ready(() => {
  let member = $('#member')
  let sponsor = $('#sponsor')
  $('#sponsor-btn').on('click', () => {
    if (!member.hasClass('hidden')) {
      member.animateCss('fadeOut', () => {
        member.addClass('hidden')
        sponsor.removeClass('hidden')
        sponsor.animateCss('fadeIn')
      })
    }
  })
  $('#member-btn').on('click', () => {
    if (!sponsor.hasClass('hidden')) {
      sponsor.animateCss('fadeOut', () => {
        sponsor.addClass('hidden')
        member.removeClass('hidden')
        member.animateCss('fadeIn')
      })
    }
  })

  // let timeout = null
  // let target = $('#title-card').offset().top + $('#title-card').height()
  //
  // $(window).scroll(function () {
  //   if (!timeout) {
  //     timeout = setTimeout(function () {
  //       clearTimeout(timeout)
  //       timeout = null
  //       if ($(window).scrollTop() >= target) {
  //         $('#header').removeClass('nav-hidden')
  //       } else {
  //         $('#header').addClass('nav-hidden')
  //       }
  //     }, 250)
  //   }
  // })
})
