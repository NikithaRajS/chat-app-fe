// src/components/Message.tsx
import React from 'react';
import styled from 'styled-components';

interface MessageProps {
  text: string;
  isSent: boolean;
}

const MessageBubble = styled.div<{ isSent: boolean }>`
  max-width: 60%;
  padding: 0.5rem;
  border-radius: 10px;
  margin: 0.5rem 0;
  background-color: ${({ isSent }) => (isSent ? '#b03052' : '#e5e5ea')};
  color: ${({ isSent }) => (isSent ? 'white' : 'black')};
  align-self: ${({ isSent }) => (isSent ? 'flex-end' : 'flex-start')};
`;

const Message: React.FC<MessageProps> = ({ text, isSent }) => {
  return <MessageBubble isSent={isSent}>{text}</MessageBubble>;
};

export default Message;
