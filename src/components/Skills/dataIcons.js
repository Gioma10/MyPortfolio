// Framework
import Nextjs from '../../assets/Icon-Skills/nextjs.webp'
import React from '../../assets/Icon-Skills/react.webp'
import Tailwind from '../../assets/Icon-Skills/tailwind.webp'
import Framer from '../../assets/Icon-Skills/framer.webp'

// Languages
import Html from '../../assets/Icon-Skills/html.webp'
import Css from '../../assets/Icon-Skills/css.webp'
import Javascript from '../../assets/Icon-Skills/js.webp'
import Php from '../../assets/Icon-Skills/php.webp'

// Tools
import Figma from '../../assets/Icon-Skills/figma.webp'
import Unix from '../../assets/Icon-Skills/unix.webp'
import Vscode from '../../assets/Icon-Skills/vscode.webp'
import Git from '../../assets/Icon-Skills/git.webp'



export const skills = () => 
[
    [
        {id: 1, title: 'nextjs', url: `${Nextjs}`, percentage: 30},
        {id: 2, title: 'react', url: `${React}`, percentage: 80},
        {id: 3, title: 'tailwind', url: `${Tailwind}`, percentage: 90},
        {id: 4, title: 'framer', url: `${Framer}`, percentage: 60},
    ],
    [
        {id: 1, title: 'html', url: `${Html}`, percentage: 100},
        {id: 2, title: 'css', url: `${Css}`, percentage: 85},
        {id: 3, title: 'javascript', url: `${Javascript}`, percentage: 80},
        {id: 4, title: 'php', url: `${Php}`, percentage: 50},
    ],
    [
        {id: 1, title: 'figma', url: `${Figma}`, percentage: 75},
        {id: 2, title: 'unix', url: `${Unix}`, percentage: 80},
        {id: 3, title: 'vscode', url: `${Vscode}`, percentage: 100},
        {id: 4, title: 'git', url: `${Git}`, percentage: 70},
    ]
];

 
