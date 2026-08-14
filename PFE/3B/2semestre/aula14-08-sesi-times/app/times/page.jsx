import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default function Times() {
    return (
        <>
            <Header titulo='Times da escola Sesi - Mirandópolis' />
            <section>
                <div>
                    <h4>Terceiro Médio B</h4>
                    <Link href='/times/3b'>Conhecer</Link>
                </div>
            </section>
            <Footer />
        </>
    )
}

