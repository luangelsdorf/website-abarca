import React from 'react';
import styles from './Contact.module.scss';
import { useForm } from 'react-hook-form';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/Arrow.svg';
import submitForm from 'src/utils/submitForm';
import Spinner from 'src/components/common/Spinner';
import { onChange } from 'src/utils/phoneMask';

export default function Contact({ content }) {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
  const errorMessage = 'Este campo é obrigatório.';

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
                <div className={`floating${!errors.entry_443452100 ? '' : ' ' + 'error'}`}>
                  <input id="name" placeholder="Como podemos lhe chamar?" type="text" {...register('entry_443452100', { required: errorMessage })} />
                  <label htmlFor="name">Nome</label>
                  <span>{errors.entry_443452100 && errorMessage}</span>
                </div>

                <div className={`floating${!errors.entry_2104795631 ? '' : ' ' + 'error'}`}>
                  <input id="business" placeholder="Qual o nome do seu negócio" type="text" {...register('entry_2104795631', { required: errorMessage })} />
                  <label htmlFor="business">Empresa</label>
                  <span>{errors.entry_2104795631 && errorMessage}</span>
                </div>

                <div className={`floating${!errors.entry_1354793341 ? '' : ' ' + 'error'} prefixed`}>
                  <input id="phone" placeholder="(51) 98983.6186" type="tel" {...register('entry_1354793341', { required: errorMessage, minLength: 14, onChange: e => onChange(e, setValue) })} />
                  <label htmlFor="phone">Telefone</label>
                  <span className="prefix">+55</span>
                  <span>{errors.entry_1354793341 && errorMessage}</span>
                </div>

                <div className={`floating${!errors.entry_1305055579 ? '' : ' ' + 'error'}`}>
                  <input id="email" placeholder="contato@brstorm.design" type="email" {...register('entry_1305055579', { required: errorMessage })} />
                  <label htmlFor="email">E-mail</label>
                  <span>{errors.entry_1305055579 && errorMessage}</span>
                </div>

                <div className={`floating${!errors.entry_1921266371 ? '' : ' ' + 'error'}`}>
                  <select defaultValue="" id="service" {...register('entry_1921266371', { required: errorMessage })}>
                    <option hidden />
                    <option value="Marca">Marca</option>
                    <option value="Estratégia">Estratégia</option>
                    <option value="Naming">Naming</option>
                    <option value="Website">Website</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="E-commerce">E-commerce</option>
                  </select>
                  <label htmlFor="service">Serviços Necessários</label>
                  <span>{errors.entry_1921266371 && errorMessage}</span>
                </div>

                <div className={`floating${!errors.entry_589211067 ? '' : ' ' + 'error'}`}>
                  <select defaultValue="" id="investment" {...register('entry_589211067', { required: errorMessage })}>
                    <option value="" hidden />
                    <option value="Menos de R$2.000">Menos de R$2.000</option>
                    <option value="R$2.000 - R$5.000">R$2.000 - R$5.000</option>
                    <option value="R$5.000 - R$10.000">R$5.000 - R$10.000</option>
                    <option value="R$10.000 - R$15.000">R$10.000 - R$15.000</option>
                    <option value="R$15.000 - R$20.000">R$15.000 - R$20.000</option>
                    <option value="Mais de R$20.000">Mais de R$20.000</option>
                  </select>
                  <label htmlFor="investment">Estimativa de Investimento</label>
                  <span>{errors.entry_589211067 && errorMessage}</span>
                </div>

                <div className="floating">
                  <textarea id="info" placeholder="Nos conte um pouco mais sobre a sua ideia e como podemos lhe ajudar." {...register('entry_776223444')}></textarea>
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
