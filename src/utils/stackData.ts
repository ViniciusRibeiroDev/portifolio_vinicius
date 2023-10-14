import imgHTML from '../public/static/img/stack/html.svg';
import imgCSS from '../public/static/img/stack/css.svg';
import imgJS from '../public/static/img/stack/js.svg';
import imgNode from '../public/static/img/stack/node.svg';
import imgStyled from '../public/static/img/stack/styled.svg';
import imgReact from '../public/static/img/stack/react.svg';
import { SiPython } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import { SiNestjs } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const stackData = [
  {
    title: 'HTML',
    img: imgHTML,
  },
  {
    title: 'CSS',
    img: imgCSS,
  },
  {
    title: 'JavaScript',
    img: imgJS,
  },
  {
    title: 'Node JS',
    img: imgNode,
  },
  { title: 'Express', img: SiExpress },
  { title: 'Nest', img: SiNestjs },
  {
    title: 'Styled Components',
    img: imgStyled,
  },
  {
    title: 'React',
    img: imgReact,
  },
  { title: 'TypeScript', img: SiTypescript },
  { title: 'Python', img: SiPython },
  { title: 'Django', img: SiDjango },
  { title: 'PostgreSQL', img: DiPostgresql },
  { title: 'Git', img: BsGithub },
  { title: 'Java', img: FaJava },
];
