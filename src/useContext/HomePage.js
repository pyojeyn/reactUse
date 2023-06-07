import React, { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "../context/ThemeContext"; // 2. 내가만든 Context import 하기.
import { UserContext  } from "../context/UserContext";

const HomePage = () => {

    // 전역적임. 
    const [isDark, setIsDark] = useState(false);
    
    // 3. ThemeContext.Provider 로 감싸주기. 
    return (
        <UserContext.Provider value={"사용자"}>
            <ThemeContext.Provider value={{isDark, setIsDark}}>
                <Page />
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}

export default HomePage;