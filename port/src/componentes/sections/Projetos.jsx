import CardProjetos from "../CardProjetos";
import Container from "../Container";
import SubtitleComp from "../SubtitleComp";
import code from '../../assets/code.svg'
import arrow from '../../assets/arrow.svg'



export default function Projetos(){

    const listProjets = [
    {
        id: 1,
        name: "Nome do projeto",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
        tecs: [code, arrow, code]
    }
]
    return(
        <div>
            <Container>
            <SubtitleComp subtitle={'Projetos'} />
            <div>
                {listProjets.map((projeto) => (
                    <CardProjetos nameProjeto={projeto.name} descProjeto={projeto.desc} tecsProjeto={projeto.tecs}/>
                ))}
            </div>
            </Container>
        </div> 
    );
}