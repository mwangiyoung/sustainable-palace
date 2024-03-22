document.getElementById("logoutForm").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = `${window.location.origin}/index.html`;
  });
