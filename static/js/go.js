function go(baseurl) {
  var query = document.getElementById("url").value
  window.location.href = baseurl + query
  return false
}