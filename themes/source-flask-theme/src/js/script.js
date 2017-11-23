import 'tether'
import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'ekko-lightbox/dist/ekko-lightbox'
import './gallery'

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault()
  $(this).ekkoLightbox()
})

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

$(document).ready(function () {
  let member = $('#member')
  let sponsor = $('#sponsor')
  let sponsorbtn = $('#sponsor-btn')
  let memberbtn = $('#member-btn')
  sponsorbtn.on('click', () => {
    if (!member.hasClass('hidden')) {
      member.addClass('hidden')
      sponsor.removeClass('hidden')
      memberbtn.removeClass('active')
      sponsorbtn.addClass('active')
    }
  })
  memberbtn.on('click', () => {
    if (!sponsor.hasClass('hidden')) {
      sponsor.addClass('hidden')
      member.removeClass('hidden')
      sponsorbtn.removeClass('active')
      memberbtn.addClass('active')
    }
  })

  let m1 = $('#itemM1')
  let m2 = $('#itemM2')
  let m3 = $('#itemM3')
  $('#itemMB1').on('click', () => {
    m1.addClass('active')
    m1.removeClass('fade')
    m2.removeClass('active')
    m3.removeClass('active')
  })
  $('#itemMB2').on('click', () => {
    m2.addClass('active')
    m2.removeClass('fade')
    m1.removeClass('active')
    m3.removeClass('active')
  })
  $('#itemMB3').on('click', () => {
    m3.addClass('active')
    m3.removeClass('fade')
    m2.removeClass('active')
    m1.removeClass('active')
  })
  let s1 = $('#itemS1')
  let s2 = $('#itemS2')
  let s3 = $('#itemS3')
  $('#itemSB1').on('click', () => {
    s1.addClass('active')
    s1.removeClass('fade')
    s2.removeClass('active')
    s3.removeClass('active')
  })
  $('#itemSB2').on('click', () => {
    s2.addClass('active')
    s2.removeClass('fade')
    s1.removeClass('active')
    s3.removeClass('active')
  })
  $('#itemSB3').on('click', () => {
    s3.addClass('active')
    s3.removeClass('fade')
    s2.removeClass('active')
    s1.removeClass('active')
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
