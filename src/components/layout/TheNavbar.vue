<template>
  <div class="navbar expand">
    <div class="logo-header">
      <div class="mi m-24 toggle toggle-option"></div>
      <a href="#" class="logo"
        ><img
          src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
          class="m-size"
      /></a>
    </div>
    <div class="navbar-content">
      <router-link to="/home" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-dashboard"></div>
        </div>
        <div class="menu-item__tittle">Tổng quan</div>
      </router-link>
      <router-link to="/employee" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-emp"></div>
        </div>
        <div class="menu-item__tittle">Nhân Viên</div>
      </router-link>
       <router-link to="/customer" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-cus"></div>
        </div>
        <div class="menu-item__tittle">Khách hàng</div>
      </router-link>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-bank"></div>
        </div>
        <div class="menu-item__tittle">Tiền gửi</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-pu"></div>
        </div>
        <div class="menu-item__tittle">Mua Hàng</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-sale"></div>
        </div>
        <div class="menu-item__tittle">Bán Hàng</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-invoice"></div>
        </div>
        <div class="menu-item__tittle">Quản lý hoá đơn</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-stock"></div>
        </div>
        <div class="menu-item__tittle">Kho</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-tool"></div>
        </div>
        <div class="menu-item__tittle">Công cụ dụng cụ</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-tscd"></div>
        </div>
        <div class="menu-item__tittle">Tài sản cố định</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-thue"></div>
        </div>
        <div class="menu-item__tittle">Thuế</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-gt"></div>
        </div>
        <div class="menu-item__tittle">Giá thành</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-th"></div>
        </div>
        <div class="menu-item__tittle">Tổng hợp</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-ns"></div>
        </div>
        <div class="menu-item__tittle">Ngân sách</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-bc"></div>
        </div>
        <div class="menu-item__tittle">Báo cáo</div>
      </a>
      <a href="#" class="menu-item">
        <div class="menu-item__icon">
          <div class="mi mi-24 mi-sidebar-pttc"></div>
        </div>
        <div class="menu-item__tittle">Phân tích tài chính</div>
      </a>
    </div>
  </div>
</template>

<!-- <script>
export default {
    name: "NavbarMenu",}
</script> -->

<style scoped>
</style>
