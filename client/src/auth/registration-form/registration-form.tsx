
        import React from 'react';
        import { useMutation } from '@apollo/client';
        import { REGISTRATION_GQL } from './registration-form.gql'
        
        interface RegistrationFormProps {}
        
        export const RegistrationForm:React.FC<RegistrationFormProps> = () => {
          const [register, { loading }] = useMutation(REGISTRATION_GQL)
          return (
            <div><button onClick={async () => {
              await register({ variables: {
                createUserData: {
                  email: 'tdest@test.com',
                  password: 'tedst',
                  name: 'test'
                }
              } })
            }}>test</button></div>
          );
        };
        
/*

      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate autoComplete="off">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => {
              const errorProps = getErrorProps(fieldState);
              const { name } = field;

              return (
                <>
                  <Label name={name} htmlFor={name} icon={MdPersonOutline} />
                  <TextField
                    {...field}
                    {...errorProps}
                    fullWidth
                    id={name}
                    variant="outlined"
                    size="medium"
                    type="text"
                    placeholder="i.e. example@example.com"
                  />
                </>
              );
            }}
          />
          <EmailField control={control as any} />
          <PasswordField control={control as any} />
          <SubmitButton fullWidth text="Agree 	&amp; Join" inProgress={loading} />
        </form>

        */
