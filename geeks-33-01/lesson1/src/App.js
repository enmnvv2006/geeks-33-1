import './App.css';
// import { Button } from './components/button/Button';
import User from './components/user/User';
import Example from './components/example/Example';
import Header from './components/header/Header';
import Kanat from './components/kanat/Kanat';

function App() {
    const navbar = ['Главная', 'О нас','Контакты']

    return (
        <>
            <Header navbar={navbar}/>
            <h1 className="textBlue">Hello</h1>
            <h1 className="textGreen">Hello</h1>
            {/* <Button text={'Открыть'}/>
            <Button text={'Открыть'}/>
            <Button text={'Закрыть'}/>
            <Button text={'Редактировать'}/> */}
            <User name={'Bakyt'} age={18}/>
            <Example>
                <div >
                    <h1>Hello</h1>
                    <p style={{
                        color: 'blue',
                        fontSize: '20px'
                    }}>Привет</p>
                </div>
            </Example>
            <Kanat name={'kanat'} age={17}/>
        </>

    );
}


export default App;


// const sum = (a,b) => a+b
//
// sum(5,9)

// const user = {
//     name: 'Bakyt',
//     age: 18
// }
//
// user.name