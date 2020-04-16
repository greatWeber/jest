import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path:'*',
            name:'home',
            component:()=>import('@/views/home')
        },
        {
            path:'/decimalPoint',
            name:'decimalPoint',
            meta:{title:'小数点'},
            component:()=>import('@/views/decimalPoint')
        },
        {
            path:'/backtrack',
            name:'backtrack',
            meta:{title:'括号生成'},
            component:()=>import('@/views/backtrack')
        }
    ]
})

export default router;