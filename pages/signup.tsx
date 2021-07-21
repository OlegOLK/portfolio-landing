import useTranslation from 'next-translate/useTranslation'
import { LoginForm } from '../components/login.form';

export default function SignUp() {
    const { t } = useTranslation('home')

    return (
        <LoginForm
            apple={t('appleAuth')}
            google={t('googleAuth')}
            terms={t('termsDisclamer')}
            heading={t('Get Started') + '!'} />
    )
}