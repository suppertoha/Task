document.querySelectorAll('.go-back').forEach(function(button) {
  button.addEventListener('click', function() {
    window.history.back();
  });
});
