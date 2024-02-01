import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '../pages/HomePage.vue';

export default createRouter({
    //Hash모드는 특정 페이지에서 새로고침 했을 때 페이지가 찾을 수 없음이라는 메시지가 뜨는 것을 방지하기 위해 사용
    history: createWebHashHistory(),

    //pages : page를 구분해주는 개념
    routes:[
        {
            // 페이지 경로 
            path: "/",
            name: HomePage,
            component: HomePage
        }
    ]
})