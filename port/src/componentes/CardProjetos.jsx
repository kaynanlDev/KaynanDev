import Button from "./Button";
import ButtonUnderlined from "./ButtonUnderlined";

export default function CardProjetos({nameProjeto, descProjeto, tecsProjeto}){
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <h3>{nameProjeto}</h3>
            <p>{descProjeto}</p>
            <div className="flex tracking-[20px]">{tecsProjeto}</div>
            <div>
                <Button texto={'Acessar o projeto'} />
                <ButtonUnderlined texto={'Acessar o repositório'}/>
            </div>
        </div>
    )
}