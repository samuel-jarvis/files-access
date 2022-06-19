window.onload = function() {
  const imageBtn = document.querySelector('.image-btns')
  homeURL = window.location.hostname


  // Get url lik to pass
  let params = new URLSearchParams(location.search);
  currentEmail = params.get('email')

  console.log(currentEmail)

  const loadNewPage = () => {
    // window.location.href = `http://${homeURL}/download.html?email=${currentEmail}`;
    window.location.href = `http://${homeURL}/download.html?email=${currentEmail}`;
    console.log('Hello there')
  }

  imageBtn.addEventListener('click', loadNewPage)

  console.log('hello world')

};