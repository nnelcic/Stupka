import React from "react";
import { Footer } from "../../components/ui/footer";
import { MainBlock } from "../../components/ui/mainBlock";


const Home: React.FC<{}> = () => {
    return (
        <>          
           
            <body>
                 <MainBlock />
            </body>
           
           <footer>
                <Footer />
           </footer>
        </>
    );
};

export default Home;
