import React, { useId } from 'react';
import { useForm } from 'react-hook-form';
import submitForm from 'src/utils/submitForm';
import Button from '../Button';
import Spinner from '../Spinner';
import styles from './ShortForm.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import { onChange } from 'src/utils/phoneMask';
import fields from 'src/data/formFields.json';

export default function ShortForm({ light }) {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
  const errorMessage = 'Este campo é obrigatório.';

  const formId = useId();

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(submitForm)} className={light ? ' light' : undefined}>
        <div className={`floating${!errors[fields.name] ? '' : ' ' + 'error'} sm`}>
          <input id={`name_${formId}`} placeholder="Como podemos lhe chamar?" type="text" {...register(fields.name, { required: errorMessage })} />
          <label htmlFor={`name_${formId}`}>Nome</label>
          <span>{errors[fields.name] && errorMessage}</span>
        </div>

        <div className={`floating${!errors[fields.phone] ? '' : ' ' + 'error'} sm prefixed`}>
          <input id={`phone_${formId}`} placeholder="(51) 98983.6186" type="tel" {...register(fields.phone,  { required: errorMessage, minLength: 14, onChange: e => onChange(e, setValue) })} />
          <label htmlFor={`phone_${formId}`}>Telefone</label>
          <span className="prefix">+55</span>
          <span>{errors[fields.phone] && errorMessage}</span>
        </div>

        <Button id="form-submit_cover" btnElement type="submit" className="lg form-submit" RightIcon={Arrow}>
          Enviar Solicitação
        </Button>
        <Spinner style={{ display: isSubmitting ? 'block' : 'none' }} />
        <span style={{ opacity: isSubmitSuccessful ? '1' : '0' }}>✓ Enviada com sucesso!</span>
      </form>
    </div>
  )
}
