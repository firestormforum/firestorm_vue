export default [
  {
    path: '',
    component: () => import('../layouts/Categories'),
    children: [
      {
        name: 'allCategories',
        component: () => import('../pages/Categories'),
        path: ''
      },
      {
        component: () => import('../layouts/Category'),
        path: '/categories/:id',
        props: true,
        children: [
          {
            component: () => import('../pages/Threads'),
            name: 'allThreads',
            path: '',
            props: true
          },
          {
            path: '/categories/:id/threads/:threadId',
            component: () => import('../pages/Thread'),
            props: true,
            name: 'thread'
          },
          {
            name: 'newThread',
            component: () => import('../pages/NewThread'),
            path: '/categories/:id/new-thread',
            props: true
          },
          {
            name: 'newPost',
            component: () => import('../pages/NewPost'),
            path: '/categories/:id/threads/:threadId/new-post',
            props: true
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layouts/Login')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../layouts/Signup')
  }
]
