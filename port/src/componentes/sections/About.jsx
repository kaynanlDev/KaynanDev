import msg from '../../assets/msg.svg'
import github from '../../assets/Github.svg'
import linkedIn from '../../assets/LinkedIn.svg'
import email from '../../assets/email.svg'

import Button from '../Button'

export default function About(){
    const linksAbout = [
        {
            icon: msg,
            hrefLink: '#',
            altAbout: 'Icon de menssagem'
        },
        {
            icon: email,
            hrefLink: '#',
            altAbout: 'Icon de Email'
        },
        {
            icon: github,
            hrefLink: '#',
            altAbout: 'Icon do Github'
        },
        {
            icon: linkedIn,
            hrefLink: '#',
            altAbout: 'Icon do LinkedIn'
        },
    ]
    return(
        <div className='bg-[var(--color-black-3)] pt-25 pb-63'>
            <div className="container">
                <h2 className='text-[2rem] text-[var(--color-primary)] font-preahvihear'>Sobre mim</h2>
                <p className='text-[1.25rem] font-medium pt-4 pb-6'>Natal, Brasil</p>
                <p className='text-[1.25rem] font-medium pb-10 max-w-3/4'>
                    Meu nome é Kaynan Teixeira, sou programador e designer com mais de dois anos de experiência.
                    Atualmente sou Frontend Developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade,
                    concentrado em performance, animações, responsividade e SEO.
                </p>
                <div>
                    <ul className='flex items-center gap-10 mb-12'>
                        {linksAbout.map((item) =>
                            <li><a href={item.hrefLink}><img src={item.icon} alt={item.altAbout} /></a></li>
                        )}
                    </ul>
                </div>

                <Button texto="Baixar currículo" />
            </div>
        </div>
    );
}