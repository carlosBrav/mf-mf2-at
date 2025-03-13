

export const usePrincipal = () => {

  const historicals = localStorage.getItem("historical_searchs")

  return {
    historicals: historicals ? JSON.parse(historicals) as any : []
  }
}