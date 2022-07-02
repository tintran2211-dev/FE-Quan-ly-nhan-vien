<template>
  <div class="header-content">
    <div class="content-tittle">Nhân Viên</div>
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
            <th class="left">STT</th>
            <th class="left">Mã nhân viên</th>
            <th class="left">Tên nhân viên</th>
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
          <tbody>
            <tr v-for="(emp, index) in employees" :key="emp.EmployeeId">
              <td class="td_check center">
                <div class="div_checkbox">
                  <label class="checkbox_box">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td class="td_stt left">{{ index + 1 }}</td>
              <td class="td_id left">{{ emp.EmployeeCode }}</td>
              <td class="td_name left">{{ emp.EmployeeName }}</td>
              <td class="td_gender left">{{ emp.Gender }}</td>
              <td class="td_date left">{{formatDate(emp.IdentityDate)}}</td>
              <td class="td_card left">{{ emp.IdentityNumber }}</td>
              <td class="td_position left">{{ emp.EmployeePosition }}</td>
              <td class="td_company left">{{ emp.DepartmentName }}</td>
              <td class="td_accountnumber left">{{ emp.BankAccountNumber }}</td>
              <td class="td_bankname left">{{ emp.BankName }}</td>
              <td class="td_bankbranch left">{{ emp.BankBranchName }}</td>
              <td class="td_feature center">
                <button class="btn_feature">
                  Sửa
                  <i class="fas fa-angle-up feature_icon_up"></i>
                  <i class="fas fa-angle-down feature_icon_down"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import * as Vue from 'vue'
export default {
  name: "employeeList",
  components: {},

  methods: {
    formatDate(dob) {
      //Định dạng ngày tháng năm
      //Lấy ngày
      let dateConvert = new Date(dob);
      if (dob && (dateConvert instanceof Date && !isNaN(dateConvert.valueOf()))) {
        let date = dateConvert.getDate();
        //Lấy tháng
        date = date < 10 ? `0${date}` : date;
        let month = dateConvert.getMonth() + 1;
        //Lấy năm
        month = month < 10 ? `0${month}` : month;
        let year = dateConvert.getFullYear();
        //kiểu định dạng(ngày/tháng/năm)
        dob = `${date}/${month}/${year}`;
        return dob;
      }else {
        return "";}
    },
  },

  data: () => {
    return {
      FullName: "Trần Công Tín",
      employees: [],
    };
  },

  created() {
    try {
      var vm = this;
      axios
        .get("https://amis.manhnv.net/api/v1/Employees")
        .then(function (res) {
          vm.employees = res.data;
          console.log(res);
        })
        .catch(function (res) {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
