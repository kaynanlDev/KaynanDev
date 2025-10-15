export default function Button(props){
    return(
        <>
        <button className="px-10 py-2.5 bg-[var(--color-primary)] text-base font-medium text-[var(--color-black-2)] rounded-[0.25rem]">{props.texto}</button>
        </>
    )
}