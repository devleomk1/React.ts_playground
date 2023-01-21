import React, { ChangeEvent, ChangeEventHandler, ReactEventHandler } from 'react';
import logo from './logo.svg';
import './App.css';
import { atom, useRecoilState } from 'recoil';


function App() {
  const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '디폴트', // default value (aka initial value)
  });
  const [text, setText] = useRecoilState(textState);
  const onChange = (event:React.ChangeEvent<HTMLInputElement>) => { //event 타입 지정 : onChange에 마우스를 올리고 Handler만 지우면됨
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <div>my text : {text}</div>
    </div>
  );
}

export default App;
