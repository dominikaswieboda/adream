import React, {useState} from "react";
import * as styles from './form.module.scss';
import InputItem from "../input/inputItem";
import {TermCheckBox} from "../termCheckBox/termCheckBox";
import Container from "../../layouts/container/container";
import * as buttonStyles from "../button/button.module.scss";
import {Button} from "../button/button";

export default function Form() {
    const [isChecked, setIsChecked] = useState(false);
    const handleChecked = (event) => {
        setIsChecked(event.target.checked)
    }
    return (
        <form className={styles.form}>
            <Container>
                <div data-sal="slide-left"
                     data-sal-duration="1000"
                     data-sal-easing="ease"
                     className={styles.formContent}>
                    <div className={styles.formDescription}>
                        <h3>Lorem ipsum</h3>
                        <h3>Lorem ipsum lorem ipsum</h3>
                        <span>consectetur adipiscing elit. Ut auctor arcu</span>
                        <p>Zostaw kontakt, zadzwonimy do Ciebie</p>
                    </div>
                    <div className={styles.formGroup}>
                        <InputItem
                            label='Imię i nazwisko'
                            name='username'
                            required={true}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputItem
                            label='Telefon'
                            name='phone'
                            required={true}
                            type='number'
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputItem
                            label='Email'
                            name='email'
                            type='email'
                            required={true}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputItem
                            label='Wiadomość'
                            name='message'
                            required={true}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <TermCheckBox
                            name='acceptTerm'
                            children='Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...'
                            checked={isChecked}
                            onchange={handleChecked}
                            required={true}
                        />
                    </div>
                    <div className={styles.formGroupButton}>
                        <Button
                            type='submit'
                            className={`${buttonStyles.btn} ${buttonStyles.btnSecondary} ${buttonStyles.btnHover} ${buttonStyles.btnBeforeRight}`}
                            children="Wyślij"
                        />
                    </div>
                </div>
            </Container>
        </form>
    )
}