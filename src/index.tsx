import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./Pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const Root = () => {
    return <React.StrictMode>
        {/*<Provider store={store}>*/}
        {/*        <ThemeProvider theme={}>*/}
        <BrowserRouter>
            <App/>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
        {/*</ThemeProvider>*/}
    </React.StrictMode>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement);
root.render(
    <Root/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
