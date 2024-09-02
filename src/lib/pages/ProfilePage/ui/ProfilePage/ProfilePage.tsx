import React from 'react';
import cls from './ProfilePage.module.scss'
import avatar from '../../assets/avatar.png'
import {EventsList} from "@/lib/widgets";
import Image from "next/image";

interface ProfilePageProps {
    isCreator: boolean;
}

const ProfilePage = ({ isCreator }: ProfilePageProps) => {
    return (
        <section className={cls.container}>
            <div className={cls.profile}>
                <Image className={cls.avatar} src={avatar} alt={"avatar"}></Image>
                <div className={cls.content}>
                    <h3>Денис Давыдов</h3>
                    <div className={cls.content_ad}>
                        {!isCreator ? (
                            <>
                                <p>Москва</p>
                                <p><span>144</span> друга</p>
                                <p><span>10</span> событий посещено</p>
                            </>
                        ) : <>
                            <p>Москва</p>
                            <p><span>144</span> подписчика</p>
                            <p><span>10</span> событий организовано</p>
                        </>}
                    </div>
                    <p className={cls.work}>{!isCreator ? 'Топ-менеджер Яндекс. Отвечаю за стратегическое планирование, управление проектами и развитие ЯндексПлюс' : 'Frontend-разработчик в Square Solutions'}</p>
                    <div className={cls.interests}>
                        <div className={cls.interest}>Стартапы</div>
                        <div className={cls.interest}>IT</div>
                        <div className={cls.interest}>Йога</div>
                        <div className={cls.interest}>Технологии</div>
                    </div>
                    <div className={cls.buttons}>
                        {!isCreator ?
                            <button className={cls.add_btn}>Подписаться</button>
                            :
                            <>
                                <button className={cls.add_btn}>Добавить в друзья</button>
                                <button className={cls.write_btn}>Написать</button>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className={cls.events}>
                <h2>Посещенные события</h2>
                <EventsList/>
            </div>
        </section>
    );
};

export default ProfilePage;