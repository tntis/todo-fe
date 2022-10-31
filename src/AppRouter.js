import React from "react";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import './index.css';
import App from "./App";
import Login from "./Login";


class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path="/" element={<App />}></Route>
                            <Route path="/login" element={<Login />}></Route>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default AppRouter;
