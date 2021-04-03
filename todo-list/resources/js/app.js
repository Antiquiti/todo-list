/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import routes from './routes';
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);
Vue.component('register-page', require('./components/RegisterPage.vue').default);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});
