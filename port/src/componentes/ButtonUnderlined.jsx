export default function ButtonUnderlined({texto}){
    return(
        <>
        <button className="px-10 py-2.5 bg-transparent border-1 border-[var(--color-primary)] text-base font-medium text-[var(--color-black-2)] rounded-[0.25rem] cursor-pointer duration-200 ease-in-out hover:opacity-80">{texto}</button>
        </>
    )
}