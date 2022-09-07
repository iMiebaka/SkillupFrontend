const resizerBtn = document.getElementById("resizer-btn")
const sidebar = document.querySelector(".sidebar")
const avatarImage = document.querySelector(".cover-image")
const makeHidden = document.querySelectorAll(".makehidden")
const imageHeader = document.querySelector(".image-header")
const uploadArea = document.querySelector(".upload-area")
const themeSection = document.querySelector(".theme-section")
const themeSide = document.querySelector(".themeside")
const inputText = document.querySelector('.input-text ') 

let resizeSidebar = false

resizerBtn.addEventListener("click", function (e) {
  if (document.body.clientWidth <= 480 || !resizeSidebar) {
    setVisiblity(e)
  }
  else {
    revokeVisiblity(e)
  }
})


inputText.addEventListener("focus", revokeVisiblity)

function setVisiblity(obj) {
  sidebar.style.width = "100px"
  avatarImage.style.width = "50px"
  imageHeader.style.flexDirection = "column"
  imageHeader.style.alignItems = "center"
  imageHeader.style.paddingLeft = "0"
  themeSection.style.display = "block"
  themeSection.style.marginLeft = "15px";
  themeSection.classList.add("mobile-theme")
  themeSection.classList.remove("theme-daylight")
  uploadArea.style.width = "60px"
  uploadArea.style.marginLeft = "12px"
  uploadArea.style.height = "60px"
  
  // Resize btn
  resizerBtn.style.marginTop = "5px"
  resizerBtn.style.transform = "rotate(180deg)"
  resizerBtn.style.borderTopRightRadius = "100%"
  resizerBtn.style.borderBottomRightRadius = "100%"
  
  
  makeHidden.forEach((e) => {
    e.style.display = "none"
  })
  resizeSidebar = true
}


function revokeVisiblity(obj) {
  sidebar.style.width = "320px"
  avatarImage.style.width = "70px"
  imageHeader.style.flexDirection = "row"
  imageHeader.style.paddingLeft = "20px"
  themeSection.style.display = "flex"
  themeSection.classList.remove("mobile-theme")
  themeSection.classList.add("theme-daylight")
  themeSection.style.width = "260px"
  uploadArea.style.width = "260px"
  uploadArea.style.height = "120px"
  uploadArea.style.marginLeft = "20px"


  // Resize btn
  resizerBtn.style.marginTop = "0px"
  resizerBtn.style.borderTopRightRadius = ""
  resizerBtn.style.borderBottomRightRadius = ""
  resizerBtn.style.transform = "rotate(0deg)"


  makeHidden.forEach((e) => {
    e.style.display = ""
  })
  resizeSidebar = false
}