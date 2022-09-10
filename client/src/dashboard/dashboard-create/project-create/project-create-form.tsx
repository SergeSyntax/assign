import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TiTag } from 'react-icons/ti';
import { DialogActions, FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { Accessibility } from '../../../../__generated__/globalTypes';
import { CreateProjectVariables } from './__generated__/CreateProject';
import { useCreateProject } from './create-project.hook';
import { TextButton } from '../buttons/text-button';
import { SubmitButton } from '../../../common/buttons';
import { TextField } from '../text-field.styled';
import { Label } from '../../../common/label';
import { projectCreateDefaultValues } from './project-create-defualt-values';
import { projectCreateSchema } from './project-create-schema';
import { getErrorProps } from '../../../common/react-hook-form/get-error-props';

interface ProjectCreateFormProps {
  closeDialog: () => void;
}

export const ProjectCreateForm: React.FC<ProjectCreateFormProps> = ({ closeDialog }) => {
  const [createProject, { loading, error, data }] = useCreateProject(projectCreateDefaultValues);

  const handleFormSubmit: SubmitHandler<CreateProjectVariables> = async (variables) => {
    await createProject({ variables });
    closeDialog();
  };

  const { control, handleSubmit, watch } = useForm<CreateProjectVariables>({
    defaultValues: projectCreateDefaultValues,
    resolver: yupResolver(projectCreateSchema),
    mode: 'all',
  });

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit(handleFormSubmit)}>
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => {
          const errorProps = getErrorProps(fieldState);
          const { name } = field;

          return (
            <>
              <Label name={name} htmlFor={name} icon={TiTag} />
              <TextField
                {...field}
                {...errorProps}
                fullWidth
                id={name}
                variant="outlined"
                size="medium"
                type="text"
                placeholder="i.e. SkyNet Project"
              />
            </>
          );
        }}
      />

      <Controller
        name="accessibility"
        control={control}
        render={({ field, fieldState }) => {
          const { error, helperText } = getErrorProps(fieldState);
          const { name } = field;
          return (
            <FormControl fullWidth>
              <Label name={name} htmlFor={name} icon={TiTag} />
              <Select id={name} {...field} variant="outlined" error={error}>
                {Object.values(Accessibility).map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText error={error}>{helperText}</FormHelperText>
            </FormControl>
          );
        }}
      />

      <DialogActions>
        <TextButton onClick={closeDialog}>cancel</TextButton>
        <SubmitButton inProgress={loading} text="create" />
      </DialogActions>
    </form>
  );
};
