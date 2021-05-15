/*
 * @Author: zzj
 * @Date: 2021-05-11 21:52:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 16:39:45
 * @Description:
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/class/component-old', component: '@/pages/class/component-old' },
    { path: '/class/lists', component: '@/pages/class/lists' },
    { path: '/class/dva', component: '@/pages/class/dva' },
  ],
  fastRefresh: {},
});
