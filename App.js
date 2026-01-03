//import logo from './logo.svg';
//import './App.css';
import Header from './Header';
import Content from './Content';
import { Footer } from './Footer';
import './index.css';
import { useState } from 'react'

function App() {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        checked: true,
        item: "Practice coding"
      },
      {
        id: 2,
        checked: false,
        item: "play cricket"
      },
      {
        id: 3,
        checked: false,
        item: "Read about AI"
      }
    ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem("To do list", JSON.stringify(setItems))

  }


  const handleDelete = (id) => {
    const listItems = items.filter((item) =>
      item.id !== id)
    setItems(listItems)
    localStorage.setItem("To do list", JSON.stringify(setItems))


  }

  return (
    <div className='App'>
      <Header title="Schedule" />
      <Content  // Parameters
      items ={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer
      length={items.length}
       />
    </div>
  );
}

Header.defaultProps={
  title:"To Do List"
}
export default App;
