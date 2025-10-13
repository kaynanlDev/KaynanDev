export default function Header(){
    return(
        <>
        <header className="container w-full flex justify-between border-b-[#151515] border-b-2">
            <div className="font-bold text-[#3E82F3]">KaynanDev</div>
            <nav>
                <ul className="flex items-center gap-13 text-white">
                    <li className="hover:opacity-80 hover:text-[#3E82F3] duration-200 ease-in-out"><a href="#">Início</a></li>
                    <li className="hover:opacity-80 hover:text-[#3E82F3] duration-200 ease-in-out"><a href="#">Sobre Mim</a></li>
                    <li className="hover:opacity-80 hover:text-[#3E82F3] duration-200 ease-in-out"><a href="#">Serviços</a></li>
                    <li className="hover:opacity-80 hover:text-[#3E82F3] duration-200 ease-in-out"><a href="#">Projetos</a></li></ul>
            </nav>
        </header>
        </>
    );
}