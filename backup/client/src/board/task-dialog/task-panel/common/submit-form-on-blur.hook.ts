import { useRef } from 'react';

interface UseSubmitFormOnBlurArguments {
  postBlur?: () => void;
}

export const useSubmitFormOnBlur = (postBlur = () => {}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleBlur = () => {
    formRef.current?.requestSubmit();
    postBlur();
  };
  return { formRef, handleBlur };
};
