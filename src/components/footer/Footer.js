import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default () => {
    return (
        <footer>
            <div className='footer--left'>
                Projeto de estudos em React! Inspirado no projeto da B7web.<br />
                Direitos de imagem para a Netflix.<br />
                Dados pegos do site Themoviedb.org<br />
            </div>
            <div className='footer--right'>
                <a href='/' alt='Instagram'>
                    <InstagramIcon className='footer--icon' />
                </a>
                <a href='https://www.linkedin.com/in/david-lucas-mendes-92b755231/' target='_blank' alt='LinkedIn'>
                    <LinkedInIcon className='footer--icon' />
                </a>
                <a href='/' alt='GitHub'>
                    <GitHubIcon className='footer--icon' />
                </a>



            </div>
        </footer>
    );
}