import React from 'react';
import styles from './Contact.module.scss';
import { useForm } from 'react-hook-form';
import Button from 'src/components/common/Button';
import Arrow from 'public/images/icons/Arrow.svg';

export default function Contact({ content }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className={styles.textContent}>
              <h2 className="d-none d-lg-block">Vamos Iniciar seu Projeto</h2>
              <h2 className="d-block d-lg-none">Inicie seu Projeto</h2>
              <p className="d-none d-lg-block">Não importa se você tem uma ideia vaga ou um projeto já em andamento, <span>vamos ajudá-lo</span></p>
              <p>Estamos ansiosos para ouvir sobre seus projetos. Entre em contato conosco, basta responder as perguntas ao lado que entraremos em contato.</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-2">
            <div className={styles.form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="floating">
                  <input id="name" placeholder="Como podemos lhe chamar?" type="text" {...register('name', { required: true })} />
                  <label htmlFor="name">Nome</label>
                </div>

                <div className="floating">
                  <input id="business" placeholder="Qual o nome do seu negócio" type="text" {...register('business', { required: true })} />
                  <label htmlFor="business">Empresa</label>
                </div>

                <div className="floating">
                  <input id="phone" placeholder="+55 51 98983.6186" type="tel" {...register('phone', { required: true })} />
                  <label htmlFor="phone">Telefone</label>
                </div>

                <div className="floating">
                  <input id="email" placeholder="contato@brstorm.design" type="email" {...register('email', { required: true })} />
                  <label htmlFor="email">E-mail</label>
                </div>

                <div className="floating">
                  <select defaultValue="" id="service">
                    <option hidden />
                    <option value="Marca">Marca</option>
                    <option value="Estratégia">Estratégia</option>
                    <option value="Naming">Naming</option>
                    <option value="Website">Website</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="E-commerce">E-commerce</option>
                  </select>
                  <label htmlFor="service">Serviços Necessários</label>
                </div>

                <div className="floating">
                  <select defaultValue="" id="investment">
                    <option value="" hidden />
                    <option value="2k">R$2.000 - R$5.000</option>
                    <option value="5k">R$5.000 - R$10.000</option>
                    <option value="10k">R$10.000 - R$15.000</option>
                  </select>
                  <label htmlFor="investment">Estimativa de Investimento</label>
                </div>

                <div className="floating">
                  <textarea id="info" placeholder="Nos conte um pouco mais sobre a sua ideia e como podemos lhe ajudar." {...register('info', { required: true })}></textarea>
                  <label htmlFor="info">Informações Adicionais</label>
                </div>
                <Button btnElement type="submit" className="lg" RightIcon={Arrow}>Enviar Solicitação</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
