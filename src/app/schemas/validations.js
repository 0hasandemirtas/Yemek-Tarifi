import * as yup from "yup";

const Validations = yup.object().shape({
    userName: yup
        .string()
        .min(5, 'Kullanıcı adınız en az 5 karakter olmalıdır.')
        .required('Zorunlu Alan'),
    email: yup
        .string()
        .email('Geçerli bir email girin.')
        .required('Zorunlu Alan.'),
    password: yup
        .string()
        .min(5, 'Parolanız en az 5 karakter olmalıdır.')
        .required('Zorunlu alan.'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], 'Parolalar uyuşmuyor.')
        .required('Zorunlu alan.')
});

export default Validations;