import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import employeeList from './views/employee/employeeList.vue'
import customerList from './views/customer/customerList.vue'
import Home from './views/all/Home.vue'

// eslint-disable-next-line no-unused-vars
const routes = [
    {path:'/employee',component:employeeList},
    {path:'/customer',component:customerList},
    {path:'/home',component:Home}
]

// eslint-disable-next-line no-undef
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    // eslint-disable-next-line no-undef
    history:createWebHistory(),
    routes:routes, // short for `routes: routes`
  })

createApp(App).use(router).mount('#app')
