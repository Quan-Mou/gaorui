// 导航部分
let current_position = document.querySelector(".current_position");
let company_info_list = document.querySelectorAll(".company_info_list li")
let company_info_list_a = document.querySelectorAll(".company_info_list li a")
let flag = 0;

let getCurrentPosition = function navWidthChange() {
  current_position.style.width = (company_info_list_a[0].offsetLeft + company_info_list_a[0].offsetWidth) + "px";

  for (let i = 0; i < company_info_list.length; i++) {
    company_info_list[i].addEventListener("click", function () {
      for (let i = 0; i < company_info_list.length; i++) {
        company_info_list[i].firstChild.className = "";
      }
      this.firstChild.classList.add("company_info_list_active")
      current_position.style.width = (company_info_list_a[i].offsetLeft + company_info_list_a[i].offsetWidth) + "px";
      flag = i;
    });
  }
}

getCurrentPosition();
window.addEventListener("resize", function () {
  current_position.style.width = (company_info_list_a[flag].offsetLeft + company_info_list_a[flag].offsetWidth) + "px"
})

