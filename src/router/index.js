// 导入组件
import Vue from 'vue'
import Router from 'vue-router'
// 登录
import login from '@/views/login'
// 首页
// 机器信息管理
// 货道信息管理
// 菜单管理
// 角色管理
// 公司管理
// 系统环境变量
// 权限管理
// 支付配置
// 图表界面

// 启用路由
Vue.use(Router)

// 导出路由
export default new Router({
  routes: [{
    path: '/',
    name: '',
    component: login,
    // hidden: true,
    meta: {
      requireAuth: false
    }
  }, {
    path: '/login',
    name: '登录',
    component: login,
    // hidden: true,
    meta: {
      requireAuth: false
    }
  }]
})
