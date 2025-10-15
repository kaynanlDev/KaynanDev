import Button from "./Button";

export default function Hero(){
    return(
        <>
        <section className=" bg-[var(--color-black-1)]">
            <div className="container grid grid-cols-2 items-center">
                <div>
                    <p className="text-2xl">Olá, eu sou</p>
                    <div className="hidden">Apaixonado por café</div>
                    <h1 className="font-preahvihear text-5xl text-[var(--color-primary)] my-4">Kaynan Dev</h1>
                    <p className="text-2xl mb-8">Desenvolvedor Frontend & UI Designer.</p>
                    <Button texto="Fale comigo"/>
                </div>
                <div>
                    <div><img src="me.png" alt="Emoji Me" /></div>
                </div>
            </div>
        </section>
        </>
    );
}