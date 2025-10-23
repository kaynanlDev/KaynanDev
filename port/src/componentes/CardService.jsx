export default function CardService({iconService, textoService, altService}) {
    return (
        <div className="border-b-[var(--color-primary)] border-b-1 pl-10 py-10">
            <div>
                <img src={iconService} alt={altService} />
            </div>
            <h3 className="text-[2rem] mt-10">{textoService}</h3>
        </div>
    )
}