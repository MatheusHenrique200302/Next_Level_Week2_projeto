import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem(){
    return(
    <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/36648821?s=460&u=a25f887841fd710ab53f874a2bfc9035b3a60815&v=4" alt="Matheus Henrique"/>
                        <div>
                            <strong>Matheus Henrique</strong>
                            <span>Ed Fisica</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de quimica avançada.
                        <br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida.
                    </p>
                    <footer>
                        <p>Preço/hora
                        <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em Contato
                        </button>
                    </footer>
                </article>
    );
    
}
export default TeacherItem;