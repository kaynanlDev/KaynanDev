import figma from '../../assets/figma.svg'
import code from '../../assets/code.svg'
import smartphone from '../../assets/smartphone.svg'
import CardService from '../CardService'

import SubtitleComp from '../SubtitleComp'
import Container from '../Container'

export default function Services({showMsg}){

    const msgs = ['mensagem1', 'mensagem2', 'mensagem3']

    return(
        <section className='pt-25 pb-63'>
            <Container>
                <SubtitleComp subtitle={'Serviços'} />
                <div className='grid grid-cols-3 gap-8 mt-12'>
                    <CardService iconService={code} altService={'icon de code'} textoService={'Criação de sites'} />
                    <CardService iconService={figma} altService={'icon do Figma'} textoService={'UI/UX design'} />
                    <CardService iconService={smartphone} altService={'icon de smartphone'} textoService={'Sites responsivos'} />
                </div> 
            </Container>
                 
        </section>
    )
}