import React, { useState, useRef, useEffect } from 'react';
//import { getFirestore, collection, onSnapshot } from 'firebase/firestore'; // 引入 Firestore 相關的函式
import './App.css'; // 引入 CSS 樣式
//import { getDoc } from './FirebaseSDK';

function MessagePage() {
  const [messages, setMessages] = useState([]); // 用於儲存訊息的狀態
  const [newMessage, setNewMessage] = useState(''); // 用於儲存新訊息的狀態
  const messageListRef = useRef(null); // 用於訪問訊息列表的 DOM 元素

  // 發送訊息的處理函式
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') { // 檢查訊息是否為空
      const timestamp = new Date().toLocaleTimeString(); // 取得目前時間作為訊息的時間戳記
      const newMessageObj = { content: newMessage, timestamp }; // 新訊息的物件
      setMessages([...messages, newMessageObj]); // 將新訊息加入訊息列表中
      setNewMessage(''); //  清空新訊息的輸入框
    }
  };

  // 訊息列表滾動到最底部的處理函式
  const scrollToBottom = () => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  };

  
  useEffect(() => {
    scrollToBottom(); // 訊息列表加載完成後自動滾動到最底部
  }, [messages]); // 當訊息列表有變動時觸發
  
/*
  useEffect(() => {
    scrollToBottom(); // 訊息列表加載完成後自動滾動到最底部

    // 使用 onSnapshot 監聽 Firestore 中的訊息集合
    FirebaseSDK.db = getFirestore(); // 取得 Firestore 實例
    const messagesCollection = collection(FirebaseSDK.db, 'Rooms', 'Room2', 'Messages', 'messages001'); // 取得訊息集合的參考
    onSnapshot(messagesCollection, (snapshot) => {
      const updatedMessages = snapshot.docs.map(doc => doc.data()); // 取得快照中的資料並轉換為陣列形式
      setMessages(updatedMessages); // 更新訊息列表的狀態
    });

  }, []); // 當元件掛載完成時觸發
*/

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { // 檢查是否按下 'Enter' 鍵
      handleSendMessage(); // 呼叫發送訊息的處理函式
      //getDoc();
    }
  };

  return (
    <div className="message-page-container">
      <div className="message-list" ref={messageListRef}>
        {messages.map((message, index) => (
          <div key={index} className="message-item">
            <span className="message-timestamp">{message.timestamp}</span>
            <span className="message-content">{message.content}</span>
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <input
          type="text"
          className="message-input"
          placeholder="輸入訊息..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown} // 加入 onKeyDown 事件處理函式
        />
        <button className="send-button" onClick={handleSendMessage}>
          發送
        </button>
      </div>
    </div>
  );
}

export default MessagePage;