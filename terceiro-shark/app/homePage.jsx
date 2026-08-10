import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./img/banner.png";

export default function HomePage(){
    return(
        <>
            <Header />
                <main>
                    <section>
                        <Image src={Banner}/>
                    </section>
                    <p>O restante da página eu devo criar, posso usar IA, mas devo fazer um trabalho bonito!!!</p>
                </main>
            <Footer />
        </>
    )
}