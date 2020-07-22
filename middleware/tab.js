const setActiveTab = context => {
  const isHome = context.route.name === 'index'
  context.store.dispatch(
    'changeTab',
    isHome ? 'home' : context.route.name || 'error'
  )
}

export default setActiveTab
