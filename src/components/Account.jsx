import React, { useState } from 'react';

const Account = () => {
    const [mail, setMail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [validation, setValidation] = useState(true)
    const [text, setText] = useState('')
    const [textMail, setTextMail] = useState('')


    const handleMail = (e) => {
        setMail(e.target.value);
    }
    const handlePass1 = (e) => {
        setPassword1(e.target.value);
    }
    const handlePass2 = (e) => {
        setPassword2(e.target.value);
    }



    const login = (e) => {
        e.preventDefault()
        if(password1 == password2 && password1 !== '' && mail !== ''){
        setValidation(false)
    }
    else if(password1 == '' && mail == ''){
        return ((setTextMail('( Enter your mail!!! )'))(setText('( Error password!!! ) ')))
    }
    else if(password1 !== password2 && mail == ''){
        return ((setTextMail('( Enter your mail!!! )'))(setText('( Error password!!! ) ')))
    }

    else if(mail == ''){
            return setTextMail('( Enter your mail!!! )')
    }else{
        return setText('( Error password!!! ) ')
    }

    }

    const exit = (e) => {
        e.preventDefault()
        setValidation(true)
        setMail('')
        setPassword1('')
        setPassword2('')
        setText('')
        setTextMail('')
    }

    return (
        <div>
        {validation ? (

            <div className='login'>
            <div className="form_auth_block">
  <div className="form_auth_block_content">
    <p className="form_auth_block_head_text">Авторизация</p>
    <form className="form_auth_style" action="#" method="post">
      <label>E-mail <span id='err-pass'> {textMail} </span> </label>
      <input type="email" name="auth_email" value={mail} placeholder="Введите Ваш имейл" onChange={handleMail} required />
      <label>Password</label>
      <input type="password" name="auth_pass" value={password1} placeholder="Введите пароль" onChange={handlePass1} required />
      <label>Password again <span id='err-pass'> {text} </span> </label>
      <input type="password" name="auth_pass" value={password2} placeholder="Введите пароль" onChange={handlePass2} required />
      
      <button className="form_auth_button" type="submit" name="form_auth_submit" onClick={login}>Войти</button>
      <button className="form_exit_button" type="submit" name="form_auth_submit" onClick={exit}>Выйти</button>
    </form>
  </div>
</div>
        </div>
        ):
        (
            <div className='login'>
            <div className="form_auth_block">
  <div className="form_auth_block_content">
    <p className="form_auth_block_head_text">Добро пожаловать, {mail}</p>
        
      <button className="form_exit_button" type="submit" name="form_auth_submit" onClick={exit}>Выйти</button>
  </div>
</div>
        </div>
        )}
        </div>

    );
};

export default Account;