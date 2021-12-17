import React, {FC} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {IActor} from '../../interfaces/interfaces';
import {yupResolver} from '@hookform/resolvers/yup';
import {actorValidation} from '../../Validation/Validation';
import {CreateInputField} from '../../UI/formFields/InputField';
import DateField from '../../UI/formFields/DateField';
import ImageField from '../../UI/formFields/ImageField';
import MarkDownField from '../../UI/formFields/MarkDownField';
import Button from '../../UI/Button';
import {Link, useLocation} from 'react-router-dom';


interface ActorFormProps {
  model: IActor
  onSubmit: (values: IActor) => void
}

const ActorForm: FC<ActorFormProps> = ({model, onSubmit}) => {
  const location = useLocation()
  const methods = useForm<IActor>({
    defaultValues: {
      name: model.name,
      dateOfBirth: model.dateOfBirth,
      pictureUrl: model.pictureUrl,
      biography: model.biography
    },
    resolver: yupResolver(actorValidation),
    mode: 'onBlur',
  })

  const onSubmitHandler: SubmitHandler<IActor> = async (data: IActor) => {
    await onSubmit(data)
    if (location.pathname === '/actors/create') {
      methods.formState.isSubmitted && methods.reset()
      methods.setValue('pictureUrl', '')
    }
  }
  
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <CreateInputField label="Name" name="name" className="form-control"/>
        <DateField label="Date of Birth" name="dateOfBirth"/>
        <ImageField label="Picture" name="pictureUrl" register={methods.register}/>
        <div className=" mt-4 mb-3">
          <MarkDownField label="Biography" name="biography"/>
        </div>
        <Button
          type="submit"
          disabled={methods.formState.isSubmitting}
          className="btn btn-primary mt-3"
        >
          Save Changes
        </Button>
        <Link to="/actors" className="btn btn-secondary mt-3">Cancel</Link>
      </form>
    </FormProvider>
  );
};

export default ActorForm;