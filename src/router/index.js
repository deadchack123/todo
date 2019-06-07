import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/mainPage'
import jsonList from '../components/json'
import editList from '../components/edit';

Vue.use(Router)

export default new Router({
  // mode: "hash",
  routes: [
    {
      path: '/',
      redirect: '/todolist/1'
    },
    {
      path: '/todolist',
      redirect: '/todolist/1'
    },
    {
      path: '/todolist/:page',
      component: mainPage,
      props: true
  },
  {
      path: '/todolist/:page/:id',
      name: 'listId',
      component: editList,
      props: true
  },
  {
      path: '/jsonlist',
      component: jsonList
  },
  {
      path: '*',
      component: {
          name: 'note-found',
          template: `<h2>Not Found</h2>`
      }
  }
  ]
})
