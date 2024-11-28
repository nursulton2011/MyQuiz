import { useState } from "react";
import { useNavigate } from "react-router";

import { Button, Input } from '../components';

export const Welcome = () => {
  const navigate = useNavigate()

  const [isDisabled, setIsDisabled] = useState(true)

  const onNameInputHandler = e => {
    const value = e.target.value.trim()

    // проверка чтобы количество символов в имени было больше или равно 3
    if (value.length >= 3) {
      setIsDisabled(false)
      return
    }

    if (value.length < 3) {
      setIsDisabled(true)
      return
    }
  }

  // Функция обработчик для ввода телефона должна быть здесь
  // Функция обработчик для onSubmit должна быть здесь

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          {/* Вынести функцию из JSX */}
          <form className="welcome__form" onSubmit={(e) => {
            e.preventDefault()
            navigate('/step/1')
          }}>
            <Input label="Ваше имя" type="text" name="username" id="username" placeholder="Ваш ответ" onInput={onNameInputHandler} />
            {/* <Input label="Ваш номер" type="tel" name="phone" id="phone" placeholder="+998 9- --- -- -- " pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$" ref={telRef} /> */}
            <Button type={'submit'} id={'next-btn'} text='Далее' disabled={isDisabled} />
          </form>
        </div>
      </div>
    </div>
  );
};
