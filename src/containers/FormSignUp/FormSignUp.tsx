import { AuthApi } from 'api';
import { AuthApiSignUpKeys } from 'api/AuthApi/AuthApi.types';
import { Form } from 'components/Form/Form';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignUp() {
  function onSubmit(data) {
    return AuthApi.signUp(data);
  }

  return (
    <Form
      title="Присоединиться к игре"
      onSubmit={onSubmit}
      fields={[
        {
          id: `FormSignUp[${AuthApiSignUpKeys.first_name}]`,
          name: AuthApiSignUpKeys.first_name,
          placeholder: 'Имя',
        },
        {
          id: `FormSignUp[${AuthApiSignUpKeys.second_name}]`,
          name: AuthApiSignUpKeys.second_name,
          placeholder: 'Фамилия',
        },
        {
          id: `FormSignUp[${AuthApiSignUpKeys.login}]`,
          name: AuthApiSignUpKeys.login,
          placeholder: 'Логин',
          required: true,
        },
        {
          id: `FormSignUp[${AuthApiSignUpKeys.email}]`,
          name: AuthApiSignUpKeys.email,
          placeholder: 'Email',
          type: 'email',
        },
        {
          id: `FormSignUp[${AuthApiSignUpKeys.phone}]`,
          name: AuthApiSignUpKeys.phone,
          placeholder: 'Телефон',
          type: 'tel',
          required: true,
        },
        {
          id: `FormSignUp[${AuthApiSignUpKeys.password}]`,
          name: AuthApiSignUpKeys.password,
          placeholder: 'Пароль',
          type: 'password',
          required: true,
        },
      ]}
      buttons={[
        {
          children: 'Зарегистироваться',
          type: 'submit',
        },
        {
          children: 'Уже зарегистирован?',
          mod: 'link',
          href: AppRoutes.signIn,
        },
      ]}
    />
  );
}