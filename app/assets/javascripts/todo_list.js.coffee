setMainHeight = () =>
  headerHeight = $("header").outerHeight()
  mainHeight = window.innerHeight - headerHeight
  $("main").css("height", mainHeight)


$ ->
  setMainHeight()

$(window).on 'resize', () ->
  setMainHeight()
