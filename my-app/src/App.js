
import './App.css';

function App() {
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
}

export default App;
