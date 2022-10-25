import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2022 BrainiacX. All rights reserved.</p>

            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
                <FaTiktok />
                <BsFacebook />
            </p>
        </div>
    )
}

export default Footer;