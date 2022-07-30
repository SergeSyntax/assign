
        import React from 'react';

        
        
        export const RegistrationForm:React.FC = () => {
          // const [register, { loading }] = useMutation(REGISTRATION_GQL)
          return (
            <div><button onClick={async () => {
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
