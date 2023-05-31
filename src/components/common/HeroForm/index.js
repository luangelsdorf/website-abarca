import React, { useId } from 'react';
import { useForm } from 'react-hook-form';
import submitForm from 'src/utils/submitForm';
import styles from './HeroForm.module.scss';
import Arrow from 'public/images/icons/Arrow.svg';
import Button from '../Button';
import Spinner from '../Spinner';
import { onChange } from 'src/utils/phoneMask';
import fields from 'src/data/formFields.json';

export default function HeroForm({ short, light, children }) {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
  const errorMessage = 'Este campo é obrigatório.';

  const formId = useId();

  return (
    <div className={styles.form}>
      {children}
      <form onSubmit={handleSubmit(submitForm)} className={light ? ' light' : undefined}>
        <div className={`floating${!errors[fields.name] ? '' : ' ' + 'error'} light`}>
          <input id={`name_${formId}`} placeholder="Como podemos lhe chamar?" type="text" {...register(fields.name, { required: errorMessage })} />
          <label htmlFor={`name_${formId}`}>Nome</label>
          <span>{errors[fields.name] && errorMessage}</span>
        </div>

        <div className={`floating${!errors[fields.phone] ? '' : ' ' + 'error'} light prefixed`}>
          <input id={`phone_${formId}`} placeholder="(51) 98983.6186" type="tel" {...register(fields.phone, { required: errorMessage, minLength: 14, onChange: e => onChange(e, setValue) })} />
          <label htmlFor={`phone_${formId}`}>Telefone</label>
          <span className="prefix">+55</span>
          <span>{errors[fields.phone] && errorMessage}</span>
        </div>

        {
          !short && (
            <div className={`floating${!errors[fields.service] ? '' : ' ' + 'error'} light`}>
              <select defaultValue="" id={`service_${formId}`} {...register(fields.service, { required: errorMessage, })}>
                <option hidden />
                <option value="Marca">Marca</option>
                <option value="Estratégia">Estratégia</option>
                <option value="Naming">Naming</option>
                <option value="Website">Website</option>
                <option value="Landing Page">Landing Page</option>
                <option value="E-commerce">E-commerce</option>
              </select>
              <label htmlFor={`service_${formId}`}>Serviços Necessários</label>
              <span>{errors[fields.service] && errorMessage}</span>
            </div>
          )
        }

        {
          !short && (
            <div className={`floating${!errors[fields.investment] ? '' : ' ' + 'error'} light`}>
              <select defaultValue="" id={`investment_${formId}`} {...register(fields.investment, { required: errorMessage })}>
                <option value="" hidden />
                <option value="Menos de R$2.000">Menos de R$2.000</option>
                <option value="R$2.000 - R$5.000">R$2.000 - R$5.000</option>
                <option value="R$5.000 - R$10.000">R$5.000 - R$10.000</option>
                <option value="R$10.000 - R$15.000">R$10.000 - R$15.000</option>
                <option value="R$15.000 - R$20.000">R$15.000 - R$20.000</option>
                <option value="Mais de R$20.000">Mais de R$20.000</option>
              </select>
              <label htmlFor={`investment_${formId}`}>Estimativa de Investimento</label>
              <span>{errors[fields.investment] && errorMessage}</span>
            </div>
          )
        }

        <Button id={`submit_${formId}`} btnElement type="submit" className="lg form-submit" RightIcon={Arrow}>
          Enviar Solicitação
        </Button>
        <Spinner style={{ display: isSubmitting ? 'block' : 'none' }} />
        <span style={{ opacity: isSubmitSuccessful ? '1' : '0' }}>✓ Enviada com sucesso!</span>
      </form>
    </div>
  )
}
