import { ChatEngine } from 'react-chat-engine';
import ChatMessages from './components/ChatMessages';

import newMessageSound from '../src/music/newMessage.wav';

import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  if (!localStorage.getItem('userName')) {
    return <LoginForm />
  }
  else {
    return (
      <div className="App">
        <ChatEngine
          height="100vh"
          projectID="bd08082d-bd0d-4925-b6a8-e4d0ccb8a495"
          userName={localStorage.getItem('userName')}
          userSecret={localStorage.getItem('userPassword')}
          renderChatFeed={(props) => <ChatMessages {...props} />}
          onNewMessage={() => new Audio(newMessageSound).play()}
        />
      </div>
    );
  }
}

export default App;
