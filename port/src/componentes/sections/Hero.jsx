import arrow from '../../assets/arrow.svg'
import Button from "../Button";

export default function Hero(){
    return(
        <section className=" bg-[var(--color-black-2)]">
            <div className="container-hero grid grid-cols-2 items-center">
                <div>
                    <div className="grid grid-cols-3 items-center justify-center gap-6 mb-2">
                        <p className="text-2xl col-span-1 self-end">Olá, eu sou</p>
                        <img className="col-span-2" src="apaixonadoCafe.png" alt="apaixonado por cafe" />
                    </div>
                    <h1 className="font-preahvihear text-5xl text-[var(--color-primary)] mb-4 relative">Kaynan Dev</h1>
                    <p className="text-2xl mb-8">Desenvolvedor Frontend & UI Designer.</p>
                    <Button texto="Fale comigo"/>
                </div>
                <div className="flex items-center justify-center">
                    <div className="rounded-full bg-gradiente flex">
                        <img src="me.png" alt="Emoji Me" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center pt-40 pb-10'>
                <a href="#"><img src={arrow} alt="icon arrow down" /></a>
            </div>
        </section>
    );
}