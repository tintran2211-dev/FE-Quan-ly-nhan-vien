<template>
  <div class="header-content">
    <div class="content-tittle">Khách Hàng</div>
    <button class="t-btn btnAdd" id="btnAdd">Thêm nhân viên</button>
  </div>
  <div class="ms-main-content">
    <div class="header-m-content">
      <div class="content-input ms-con-input">
        <input
          class="ms-input"
          type="text"
          placeholder="Tìm theo mã, tên nhân viên"
        />
        <div class="mi mi-16 mi-icon-search icon-search-opt"></div>
      </div>
      <div class="mi mi-24 mi-refresh icon-refresh-opt"></div>
    </div>
    <div class="table-main-content">
      <div class="content-table">
        <table id="tbEmployee" class="table">
          <tr>
            <th class="center">
              <div class="div_checkbox">
                <label class="checkbox_box">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </th>
            <th class="left">Mã Khách Hàng</th>
            <th class="left">Tên Khách Hàng</th>
            <th class="left">Giới tính</th>
            <th class="left">Ngày sinh</th>
            <th class="left">Số CMND</th>
            <th class="left">Chức danh</th>
            <th class="left">Tên đơn vị</th>
            <th class="left">Số tài khoản</th>
            <th class="left">Tên ngân hàng</th>
            <th class="left">Chi nhánh ngân hàng</th>
            <th class="center">Chức năng</th>
          </tr>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
