import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { notifications, totalNotificationsSelector } from './atoms/atoms'
import { useEffect } from 'react';

function App() {
  return <RecoilRoot>
      <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationsSelector);

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

export default App;
