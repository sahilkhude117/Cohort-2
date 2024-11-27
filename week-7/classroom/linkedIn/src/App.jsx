import './App.css'
import { RecoilRoot, useRecoilStateLoadable,useRecoilValue } from 'recoil'
import { notifications, totalNotificationsSelector } from './atoms/atoms'

function App() {
  return <RecoilRoot>
      <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const [networkCount, setNetworkCount] = useRecoilStateLoadable(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationsSelector);

  if(networkCount.state === "loading"){
    return <div>
      Loading...
    </div>
  }else {
    return (
      <div>
        <button>Home</button>
  
        <button>My Network ({networkCount.network})</button>
        <button>Jobs ({networkCount.jobs})</button>
        <button>Messagin ({networkCount.messaging})</button>
        <button>Notification ({networkCount.notifications})</button>
  
        <button>Me ({totalNotificationCount})</button>
      </div>
    )
  }
}

export default App;
