import React from 'react'
import styles from '../styles'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex flex-[1] flex-col justify-start mr-10'>
                <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain' />
                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
            </div>

            <div className='flex-[1.5] w-full flex flex-row flex-wrap justify-between mt-10'>
                {footerLinks.map((footerLink) => (
                    <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                        <h4 className='font-poppins font-medium text-[18px] text-white leading-[27px]'>{footerLink.title}</h4>
                        <ul className='list-none mt-4'>
                            {footerLink.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex flex-col md:flex-row w-full justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]'>
            <p className='font-poppins font-normal text-center text-[18px] text-white leading-[27px]'>2021 Hoobank. All Rights Reserved</p>

            <div className='flex flex-row mt-6 md:mt-0'>
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'} w-[21px] h-[21px] object-contain cursor-pointer`}
                    />
                ))}
            </div>
        </div>
    </section>
)

export default Footer