import React from 'react';
import { useForm } from 'react-hook-form';
import submitForm from 'src/utils/submitForm';
import Button from '../Button';
import Spinner from '../Spinner';
import styles from './ShortForm.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import { onChange } from 'src/utils/phoneMask';

export default function ShortForm({ content }) {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
  const errorMessage = 'Este campo é obrigatório.';

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className={`floating${!errors.entry_443452100 ? '' : ' ' + 'error'} sm light`}>
          <input id="name_cover" placeholder="Como podemos lhe chamar?" type="text" {...register('entry_443452100', { required: errorMessage })} />
          <label htmlFor="name_cover">Insira seu Nome</label>
          <span>{errors.entry_443452100 && errorMessage}</span>
        </div>

        <div className={`floating${!errors.entry_1354793341 ? '' : ' ' + 'error'} sm light prefixed`}>
          <input id="phone_cover" placeholder="(51) 98983.6186" type="tel" {...register('entry_1354793341',  { required: errorMessage, minLength: 14, onChange: e => onChange(e, setValue) })} />
          <label htmlFor="phone_cover">Telefone para Contato</label>
          <span className="prefix">+55</span>
          <span>{errors.entry_1354793341 && errorMessage}</span>
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
