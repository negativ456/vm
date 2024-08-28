"use client"

import React from 'react';
import cls from './Footer.module.scss'
import Link from "next/link";
import appstore from '../../assets/appstore.svg'
import googleplay from '../../assets/googleplay.svg'
import rustore from '../../assets/rustore.svg'
import Image from "next/image";
import { useAppSelector } from '@/hooks';

const Footer = () => {
    const isAuth = useAppSelector(state => state.globalSlice.user.isAuth)

    return (
        <div className={cls.wrapper} style={{
            marginTop: isAuth ? '0px' : '47px'
        }}>
            <div className={cls.content}>
                <div className={cls.row}>
                    <div className={cls.column}>
                        <Link href={"/"}>Пользовательское соглашение</Link>
                        <Link href={"/"}>Возврат билетов</Link>
                    </div>
                    <div className={cls.column}>
                        <p>+7 (800) 250-20-86</p>
                        <p>vmeste@team.ru</p>
                    </div>
                    <div className={cls.column}>
                        <h3>Скачайте приложение вМесте</h3>
                        <div className={cls.apps}>
                            <a href="#">
                                <Image src={appstore} alt={"appstore"}></Image>
                            </a>
                            <a href="#">
                                <Image src={googleplay} alt={"googleplay"}></Image>
                            </a>
                            <a href="#">
                                <Image src={rustore} alt={"rustore"}></Image>
                            </a>
                        </div>
                    </div>
                </div>
                <p className={cls.rights}>© 2024 «вМесте» Все права защищены</p>
            </div>
        </div>
    );
};

export default Footer;