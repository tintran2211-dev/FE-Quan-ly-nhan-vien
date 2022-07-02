<template>
  <div class="header">
    <div class="name-cpn-box">
      <div
        class="header-icon mi mi-14 mi-header-3strip"
        onclick="toggleSidebar()"
      ></div>
      <div class="name-cpn">CÔNG TY CỔ PHẦN TỰ LỰC</div>
      <div class="header-icon mi mi-14 mi-header-down icon-cpn-option"></div>
    </div>
    <div class="m-mode">
      <div class="moon-sun">
        <div class="bx bx-moon pos moon-icon"></div>
        <div class="bx bx-sun pos sun-icon"></div>
      </div>
      <span class="mode-text text">Sáng</span>
      <div class="toggle-switch">
        <span class="switch"></span>
      </div>
    </div>
    <div class="user-box">
      <div class="mi mi-24 mi-icon-notify"></div>
      <div class="user-img"></div>
      <div class="name-user">Trần Công Tín</div>
      <div class="mi mi-14 mi-header-down icon-user-option"></div>
    </div>
  </div>
</template>

<script>
export default{
  mounted(){
    const body = document.querySelector("body"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

        modeSwitch.addEventListener("click",()=>{
            body.classList.toggle("dark");
            if(body.classList.contains("dark")){
              modeText.innerText = "Sáng"
            }else{
              modeText.innerText = "Tối"
            }
        });
  }
}
</script>
<style></style>
