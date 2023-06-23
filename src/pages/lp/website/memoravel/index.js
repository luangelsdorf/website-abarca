import Head from 'next/head';
import React, { useEffect } from 'react';
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import Pricing from 'src/components/landing-pages/brand-b/Pricing';
import Projects from 'src/components/landing-pages/brand-b/Projects';
import Contact from 'src/components/landing-pages/brand/Contact';
import Testimonials from 'src/components/landing-pages/brand/Testimonials';
import Features from 'src/components/landing-pages/web/idea/Features';
import Hero from 'src/components/landing-pages/web/idea/Hero';
import Mobile from 'src/components/landing-pages/web/idea/Mobile';
import Support from 'src/components/landing-pages/web/idea/Support';

export default function Idea() {

  const packages = [
    {
      name: 'Básico',
      value: '1.490',
      hosting: '65',
      shortText: 'Website Onepage',
      longText: 'Apresente sua empresa em uma página única com visual moderno e dinâmico.',
      mostSold: false,
      included: [
        {
          name: 'Layout Exclusivo',
          note: 'Sob medida',
        },
        {
          name: 'Design Responsivo',
          note: 'Desktop e Mobile',
        },
        { name: 'Otimização de SEO para Google' },
      ],
    },

    {
      name: 'Essencial',
      fromValue: '4.890',
      value: '2.980',
      hosting: '95',
      shortText: 'Website Pro',
      longText: 'Alcance o reconhecimento e fortaleça sua empresa com website completo.',
      mostSold: true,
      included: [
        {
          name: 'Múltiplas Páginas',
        },
        {
          name: 'Layout Exclusivo',
          note: 'Sob medida',
        },
        {
          name: 'Design Responsivo',
          note: 'Desktop e Mobile',
        },
        {
          name: 'Gerenciador de Conteúdo',
        },
        {
          name: 'Formulários e Integrações',
        },
      ],
    },

    {
      name: 'Comercial',
      value: '6.980',
      hosting: '145',
      shortText: 'E-commerce',
      longText: 'Venda produtos online através de uma plataforma feita para gerar resultados.',
      mostSold: false,
      included: [
        {
          name: 'Páginas de Produtos',
        },
        {
          name: 'Integração com Correios',
        },
        {
          name: 'Carrinho de Compras Avançado',
        },
        {
          name: 'Área do Cliente e Suporte',
        },
        {
          name: 'Layout Exclusivo',
          note: 'Sob medida',
        },
        {
          name: 'Design Responsivo',
          note: 'Desktop e Mobile',
        },
        {
          name: 'Gerenciador de Conteúdo',
        },
      ],
    },
  ];

  const questions = [
    {
      title: 'Sites onepage são bons para minha empresa?',
      text: 'Se busca um site com conteúdo mais conciso, os modelos onpage são ideais. Mas se deseja uma presença forte nos resultados de busca do Google, é fundamental ter páginas internas repletas de informações relevantes e otimizadas com palavras-chave estratégicas',
    },
    {
      title: 'Como funciona o processo para contratar os serviços?',
      text: 'Entre em contato conosco através do formulário no final da página ou solicite um orçamento. Faremos uma análise da sua demanda e marcaremos uma reunião. O próximo passo é o envio de uma proposta com valores e prazos detalhados.',
    },
    {
      title: 'Qual o prazo de entrega?',
      text: 'O prazo de entrega vai variar de acordo com a complexidade da sua demanda, Landing Pages cerca de 15 dias, Sites Institucionais cerca de 25 dias e E-commerces cerca de 40 dias.',
    },
    {
      title: 'Qual a forma de pagamento?',
      text: 'O pagamento pode ser feito à vista via pix ou transferência bancária, ou ainda, pode ser feito no boleto com entrada mais uma parcela em 30 dias.',
    },
    {
      title: 'Existe algum valor mensal obrigatório?',
      text: 'Não cobramos mensalidade dos sites criados pela Abarca. Os valores que você deverá pagar mensalmente são referentes a hospedagem do site. A manutenção contínua é cobrada à parte e fica a seu critério contratar ou não.',
    },
    {
      title: 'Meu site vai aparecer no Google?',
      text: 'Sim, nosso processo de desenvolvimento e criação de sites é otimizado com base nas boas práticas exigidas pelo Google para indexação em sua ferramenta.',
    },
    {
      title: 'O que devo colocar no meu site?',
      text: 'Fica a seu critério decidir o conteúdo de cada seção do site, mas caso você não saiba o que colocar podemos lhe ajudar através do serviço de copywriting, fale conosco para saber mais.',
    },
    {
      title: 'Vocês usam templates?',
      text: 'Não, nossos projetos são construídos totalmente do zero, personalizados para o seu negócio. Entendemos que cada negócio é único e cada solução deve ser assim também.',
    },
    {
      title: 'Consigo atualizar meu site facilmente?',
      text: 'Sim, nossos projetos são desenvolvidos para que, após o treinamento, você ou sua equipe, possam atualizar todas as informações de forma rápida e clara.',
    },
    {
      title: 'Qual o canal de contato com vocês durante o projeto?',
      text: 'Você terá contato direto com o responsável pela equipe de design e o time de desenvolvimento. Podendo nos acionar pelo WhatsApp, Telefone e E-mail sempre que precisar.',
    },
  ];

  return (
    <>
      <Head>
        <title>Criação de Sites Memoráveis | Abarca</title>
        <meta property="og:title" content="Criação de Sites Memoráveis | Abarca" />
        <meta name="description" content="Somos um Escritório de Relações Públicas, formado por profissionais da comunicação especialistas em suas áreas. Construímos relações entre as marcas e seus públicos." />
        <meta property="og:description" content="Somos um Escritório de Relações Públicas, formado por profissionais da comunicação especialistas em suas áreas. Construímos relações entre as marcas e seus públicos." />
        <meta property="og:image" content="https://abarca.net.br/images/preview.jpg" />
        <meta property="og:url" content="https://abarca.net.br/lp/website/memoravel" />
      </Head>

      <main>
        <Section id="home" pb="186 80">
          <Hero />
        </Section>

        <Section id="mobile" pt="0 0" pb="120 80">
          <Mobile />
        </Section>

        <Section id="projects" pt="120 80" pb="120 80">
          <Projects web />
        </Section>

        <Section id="testimonials" pt="120 80" pb="120 80">
          <Testimonials />
        </Section>

        <Section id="features" pt="120 80" pb="120 80">
          <Features />
        </Section>

        <Section id="support" pt="120 80" pb="120 80">
          <Support />
        </Section>

        <Section id="pricing" pt="120 80" pb="146 80">
          <Pricing packages={packages} />
        </Section>

        <Section id="faq" pt="120 80" pb="200 80">
          <FAQ questions={questions} />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>

    </>
  )
}

Idea.scrollHeader = true;