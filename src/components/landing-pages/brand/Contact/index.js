import React, { useEffect, useId } from 'react';
import styles from './Contact.module.scss';
import { useForm } from 'react-hook-form';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/Arrow.svg';
import submitForm from 'src/utils/submitForm';
import Spinner from 'src/components/common/Spinner';
import { onChange } from 'src/utils/phoneMask';
import fields from 'src/data/formFields.json';

export default function Contact({ content }) {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
  const errorMessage = 'Este campo é obrigatório.';

  const formId = useId();

  /* useEffect(() => {
    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add('light');
        } else {
          document.body.classList.remove('light');
        }
      });
    }

    const observer = new IntersectionObserver(callback, { rootMargin: '0% 0% -60% 0%' });
    const targets = document.querySelectorAll(`.${styles.section}`);
    targets.forEach(target => observer.observe(target));

    return () => targets.forEach(target => observer.unobserve(target));
  }, []); */

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className={styles.textContent} data-reveal-parent={0.4}>
              <h2 className="d-none d-xl-block">{'Vamos Iniciar \nseu Projeto'}</h2>
              <h2 className="d-block d-xl-none">Inicie seu Projeto</h2>
              <p className="d-none d-lg-block">Não importa se você tem uma ideia vaga ou um projeto já em andamento, <span>vamos ajudá-lo!</span></p>
              <p>Estamos ansiosos para ouvir sobre seus projetos. Entre em contato conosco, basta responder as perguntas ao lado que entraremos em contato.</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-2">
            <div className={styles.form}>
              <form onSubmit={handleSubmit(submitForm)}>
                <div className={`floating${!errors[fields.name] ? '' : ' ' + 'error'}`}>
                  <input id={`name_${formId}`} placeholder="Como podemos lhe chamar?" type="text" {...register(fields.name, { required: errorMessage })} />
                  <label htmlFor={`name_${formId}`}>Nome</label>
                  <span>{errors[fields.name] && errorMessage}</span>
                </div>

                <div className={`floating${!errors[fields.business] ? '' : ' ' + 'error'}`}>
                  <input id={`business_${formId}`} placeholder="Qual o nome do seu negócio" type="text" {...register(fields.business, { required: errorMessage })} />
                  <label htmlFor={`business_${formId}`}>Empresa</label>
                  <span>{errors[fields.business] && errorMessage}</span>
                </div>

                <div className={`floating${!errors[fields.phone] ? '' : ' ' + 'error'} prefixed`}>
                  <input id={`phone_${formId}`} placeholder="(51) 98983.6186" type="tel" {...register(fields.phone, { required: errorMessage, minLength: 14, onChange: e => onChange(e, setValue) })} />
                  <label htmlFor={`phone_${formId}`}>Telefone</label>
                  <span className="prefix">+55</span>
                  <span>{errors[fields.phone] && errorMessage}</span>
                </div>

                <div className={`floating${!errors[fields.email] ? '' : ' ' + 'error'}`}>
                  <input id={`email_${formId}`} placeholder="contato@brstorm.design" type="email" {...register(fields.email, { required: errorMessage })} />
                  <label htmlFor={`email_${formId}`}>E-mail</label>
                  <span>{errors[fields.email] && errorMessage}</span>
                </div>

                <div className={`floating${!errors[fields.service] ? '' : ' ' + 'error'}`}>
                  <select defaultValue="" id={`service_${formId}`} {...register(fields.service, { required: errorMessage })}>
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

                <div className={`floating${!errors[fields.investment] ? '' : ' ' + 'error'}`}>
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

                <div className="floating">
                  <textarea id="info" placeholder="Nos conte um pouco mais sobre a sua ideia e como podemos lhe ajudar." {...register(fields.infos)}></textarea>
                  <label htmlFor="info">Informações Adicionais</label>
                </div>
                <Button id="form-submit" btnElement type="submit" className="lg form-submit" RightIcon={Arrow}>Enviar Solicitação</Button>
                <Spinner style={{ display: isSubmitting ? 'block' : 'none' }} />
                <span style={{ opacity: isSubmitSuccessful ? '1' : '0' }}>✓ Enviada com sucesso!</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
