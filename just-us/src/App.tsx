// src/App.tsx
import React from 'react';
import styled from 'styled-components';
import Message from './components/Message';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Sidebar = styled.div`
  width: 30%;
  background-color: #b03052;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ChatContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-left: 1px solid #ccc;
`;

const MessageArea = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
`;

const InputArea = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: #f5f5f5;
  border-top: 1px solid #ccc;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  margin-right: 0.5rem;
  font-size: 1rem;
`;

const SendButton = styled.button`
  background-color: #b03052;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Sidebar>
        <h2>Contacts</h2>
        {/* Sidebar content */}
      </Sidebar>
      <ChatContainer>
        <MessageArea>
          <Message text="Hello!" isSent={false} />
          <Message text="Hi there! How's it going?" isSent={true} />
        </MessageArea>
        <InputArea>
          <Input placeholder="Type a message..." />
          <SendButton>Send</SendButton>
        </InputArea>
      </ChatContainer>
    </AppContainer>
  );
};

export default App;
