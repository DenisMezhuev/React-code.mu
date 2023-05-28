
import './App.css';

// Формирование тегов
function App() {

  /*
  const str1 = 'text1';
	const str2 = 'text1';
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const obj = {name: 'john', surname: 'smit'};
  const addArr = (arr)=>{
    const ul = document.createElement("ul");
    arr.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        ul.append(li);
    });
    document.body.append(ul);
  }


  const createLi = ()=>{
    let str = "";
    for(let i =0; i <=10; i++){
      str += i;
    }
    return console.log(str);
  }
  return (
    <div className="App">
      <p>
        name:    <span>{obj.name}</span>
        surname: <span>{obj.surname}</span>
</p>
      <p className="class_p1">{str1}</p>
      <p className="class_p2">{str2}</p>
      <>
        <ul>
            <li>text1</li>
            <li>text2</li>
            <li>text3</li>
	      </ul>
	      <ul>
            <li>text1</li>
            <li>text2</li>
            <li>text3</li>
	      </ul>;
        </>
        {createLi()}
        {addArr(arr)}
    </div>
  );
  */

/*
   
    const show = true;
    const isAdult = true;
    const isAdmin = false;
    const isAuth = false;
    function func(){
      let text;
      isAdmin ? text = <p className="admin">Admin</p> : text = <p className="noAdmin"> No Admin</p>;
      return text;
    }

return(
  
    <div>
      { show ? "text-true" : "text-false"}
      <input type="text" className="input"/>
      <p>{isAdult ? "Вам есть 18" : "Вам нет 18"}</p>
        {func()}
      {show && <p>text</p>}
      {show || <p>text1</p>}
      {isAuth && <p>Вы аворизованы</p>}
      {isAuth || <p>Вы не аворизованы</p>}

    </div>
  );
*/

//Использование функций Реакт


function square(num) {
  return num ** 2;
}

function cube(num) {
  return num ** 3;
}

const sum = <p>{square(3) + cube(4)}</p>;

const getDigitsSum =(num)=>{
    let result = 0;
    for(let i = 0; i <= num; i++){
      result += i;
    }

    return <p>{result}</p>
}

const showMess = (name)=> {
  alert('hello' + name);
}

const show1 =()=> {
  alert(1);
}

const show2 =()=> {
  alert(2);
}

const showNum =(num)=>alert(`number ${num}`);

function func(arg, event, arg1 ) {
  console.log(arg);
  console.log(arg1);
  console.log(event); // объект с событием
  console.log(event.target);
  console.log(event.textContent);
}

const handleClick = (e) =>{
  console.log("Значение this:", e)
}

return(
  <div>
    <input type="text"/>
    {sum}
    {getDigitsSum(12345)}

    <button onClick={()=>showMess("user")}>show</button>
    <button onClick={()=>showMess("User")}>show</button>
    <button onClick={show1}>act1</button>
		<button onClick={show2}>act2</button>
    <button onClick={show2}>act2</button>
    <button onClick={()=>showNum(1)}>act1</button>
		<button onClick={()=>showNum(2)}>act2</button>
    <button onClick={()=>showNum(3)}>act2</button>
    <button onClick={event=>func("eee", event, "rrrr")}>Event</button>
   <button onClick={(e)=>handleClick(e)}>Click</button>
   
  </div>
 
);


}

export default App;
