import { Provider } from "react-redux"
import { RouterApp } from "./RouterApp"
import { store } from "./components/common"

export const CMSApp = () => {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  )
}
