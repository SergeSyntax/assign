import { yupResolver } from '@hookform/resolvers/yup';
import { Divider } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { EmailField } from '../common/email-field';
import { PasswordRecoveryActions } from './password-recovery-actions.styled';
import { PasswordRecoveryCancelButton } from './password-recovery-cancel-button.styled';
import { PasswordRecoveryContent } from './password-recovery-content.styled';
import { PasswordRecoveryLogo } from './password-recovery-logo.styled';
import { passwordRecoverySchema } from './password-recovery-schema';
import { PasswordRecoverySubmitButton } from './password-recovery-submit-button.styled';
import { PasswordRecoveryTitleMain } from './password-recovery-title-main.styled';
import { PasswordRecoveryTitleSub } from './password-recovery-title-sub.styled';
import { PasswordRecoveryWrapper } from './password-recovery-wrapper.styled';

export const PasswordRecovery: React.FC = () => {
  const { control } = useForm({
    resolver: yupResolver(passwordRecoverySchema),
    mode: 'all',
  });
  return (
    <PasswordRecoveryWrapper>
      <PasswordRecoveryLogo />
      <PasswordRecoveryContent>
        <PasswordRecoveryTitleMain>Recover Password</PasswordRecoveryTitleMain>
        <Divider />
        <PasswordRecoveryTitleSub>
          <span>If you’ve lost or forgotten your password fill the next form</span>
          <span>to receive an email with a password recovery code.</span>
        </PasswordRecoveryTitleSub>
        <form autoComplete="off" noValidate>
          <EmailField control={control} />
          <PasswordRecoveryActions>
            <Link passHref href="/login">
              <PasswordRecoveryCancelButton>back</PasswordRecoveryCancelButton>
            </Link>

            <PasswordRecoverySubmitButton>send recovery code</PasswordRecoverySubmitButton>
          </PasswordRecoveryActions>
        </form>
      </PasswordRecoveryContent>
    </PasswordRecoveryWrapper>
  );
};
