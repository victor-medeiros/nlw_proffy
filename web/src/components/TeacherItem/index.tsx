import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/61799781?s=460&u=d5e2fd78b63213760c022db74807957debcfe0e4&v=4" alt="Professor"/>
                <div>
                    <strong>Victor Medeiros</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi iste quidem porro ipsam explicabo beatae exercitationem deleniti eaque culpa, incidunt, quam earum alias commodi laboriosam cumque aliquam, fugit voluptates.
                <br/> <br/>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quod eius aut necessitatibus reiciendis quam soluta eum modi velit doloremque ipsum, obcaecati neque ratione dicta vitae adipisci natus quis magni!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Ícone do whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;