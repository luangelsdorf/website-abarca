import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import DiscountAlert from 'src/components/common/DiscountAlert';
import FAQ from 'src/components/common/FAQ';
import Section from 'src/components/common/Section';
import Timer from 'src/components/common/Timer';
import Pricing from 'src/components/landing-pages/brand-b/Pricing';
import Contact from 'src/components/landing-pages/brand/Contact';
import Hero from 'src/components/landing-pages/brand/Hero';
import Testimonials from 'src/components/landing-pages/brand/Testimonials';
import Projects from 'src/components/landing-pages/web/common/Projects';
import Features from 'src/components/landing-pages/web/idea/Features';
import Mobile from 'src/components/landing-pages/web/idea/Mobile';
import Support from 'src/components/landing-pages/web/idea/Support';
import styles from 'src/styles/pages/landingpages.module.scss';

export default function Extra() {

  const packages = [
    {
      name: 'Básico',
      fromValue: '3.980',
      value: '1.480',
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
      fromValue: '7.480',
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
      fromValue: '12.480',
      value: '4.980',
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
      title: 'Como funciona o desconto?',
      text: 'A Abarca é parceira do Sebrae RS, oferecemos nosso serviço através da plataforma Unio, onde após um cadastro simples e rápido você pode usufruir de um subsídio de até 60% através dos cupons da Unio.',
    },
    {
      title: 'O site vai estar de acordo com a LGPD?',
      text: 'A lei geral de proteção de dados impõe uma série de normas para garantir a privacidade dos usuários que visitam seu site, e o não cumprimento pode levar a processos e multas. Desenvolvemos nossos projetos de acordo com as normas da LGPD, incluindo política de privacidade, avisos de cookies, bloqueio de scripts sem consentimento, entre outros.',
    },
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
      text: 'O pagamento pode ser feito via boleto, ou parcelado em até 12x sem juros. Toda a parte contratual e os pagamentos são intermediados pelo Sebrae RS através da plataforma Unio onde os serviços da Abarca estão disponibilizados.',
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
    <div className={styles.page}>
      <Head>
        <title>Até 60% de Desconto no seu Site | Abarca</title>
        <meta property="og:title" content="Até 60% de Desconto no seu Site | Abarca" />
        <meta name="description" content="Somos um Escritório de Relações Públicas, formado por profissionais da comunicação especialistas em suas áreas. Construímos relações entre as marcas e seus públicos." />
        <meta property="og:description" content="Somos um Escritório de Relações Públicas, formado por profissionais da comunicação especialistas em suas áreas. Construímos relações entre as marcas e seus públicos." />
        <meta property="og:image" content="https://abarca.net.br/images/preview.jpg" />
        <meta property="og:url" content="https://abarca.net.br/lp/website/memoravel" />
      </Head>

      <main>
        <DiscountAlert />

        <Section id="home" pt="72 80">
          <Hero
            web
            slot01={<Image data-project="rodrigo-carvalho" fill src="/images/hero/rodrigo-carvalho/cover.jpg" alt="" />}
            slot02={<Image data-project="grana" fill src="/images/hero/grana/cover.jpg" alt="" />}
            slot03={<Image data-project="rossi-dorneles" fill src="/images/hero/rossi-dorneles/cover.jpg" alt="" />}
            slot04={<Image data-project="certivale" fill src="/images/hero/certivale/cover.jpg" alt="" />}
            slot05={<Image data-project="nefrosinos" fill src="/images/hero/nefrosinos/cover.jpg" alt="" />}
            slot06={<Image data-project="arca" fill src="/images/hero/arca/cover.jpg" alt="" />}
            slot07={<Image data-project="pegada-neutra" fill src="/images/hero/pegada-neutra/cover.jpg" alt="" />}
            slot08={<Image data-project="brc" fill src="/images/hero/brc/cover.jpg" alt="" />}
            slot09={<Image data-project="robtec" fill src="/images/hero/robtec/cover.jpg" alt="" />}
            slot10={<Image data-project="util" fill src="/images/hero/util/cover.jpg" alt="" />}
          >
            <p>
              <span className="d-none d-lg-inline">Oferta por tempo limitado: </span>
              <span className="d-inline d-lg-none">Oferta termina em: </span>
              <Timer />
            </p>
            <h1>
              <span>Seu website com </span>
              <br className="d-none d-sm-block" />
              <span className="h-sans">até 60% de desconto</span>
            </h1>
          </Hero>
        </Section>

        <Section id="mobile" pt="120 80" pb="120 80">
          <Mobile />
        </Section>

        <Section id="projects" pt="120 80" pb="120 80">
          <Projects />
        </Section>

        <Section id="testimonials" pt="120 80" pb="120 80">
          <Testimonials />
        </Section>

        <Section id="features" pt="120 80" pb="120 80">
          <Features />
        </Section>

        <Section id="support" pt="120 80" pb="120 80">
          <Support discount />
        </Section>

        <Section id="pricing" pt="120 80" pb="120 80">
          <Pricing packages={packages} />
        </Section>

        <Section id="faq" pt="120 80" pb="200 80">
          <FAQ questions={questions} />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>
    </div>
  )
}
