import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {FaReact, FaJava} from 'react-icons/fa'
import {SiMysql, SiGithub} from 'react-icons/si'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <div className='skills-container'>
        <SkillCard icon={<FaJava/>} language='Java'/>
        <SkillCard icon={<AiFillHtml5/>} language='HTML'/>
        <SkillCard icon={<IoLogoCss3/>} language='CSS'/>
        <SkillCard icon={<IoLogoJavascript/>} language='JavaScript'/>
        <SkillCard icon={<BsFillBootstrapFill/>} language='Bootstrap'/>
        <SkillCard icon={<FaReact/>} language='React.js'/>
        <SkillCard icon={<SiMysql/>} language='SQL'/>
        <SkillCard icon={<SiGithub/>} language='Github'/>
    </div>
  )
}