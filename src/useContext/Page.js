import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


// 이 Page 에서는 isDark 를 사용하지 않고 전달만 하고있다.
const Page = () => {

    return (
        <div className="page">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Page;