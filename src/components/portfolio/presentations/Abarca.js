import Image from 'next/image';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Head from 'next/head';

export default function Abarca() {

  const basePath = '/images/portfolio/abarca/';

  return (
    <>
      <Head>
        <meta name="description" content="A Abarca é um Escritório de Relações Públicas que funciona como Coletivo de Comunicação, formado por profissionais especialistas em suas áreas, que se reúne de acordo com as demandas de cada projeto." />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="Abarca" local="Campo Bom | Brasil" info={{ client: 'Abarca Comunicação Integrada', segment: 'Escritório de Relações Públicas', services: ['Estratégia', 'Website', 'Identidade Visual'] }}>
            <video src={basePath + 'Animação.mp4'} autoPlay muted loop />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Abarca Comunicação Integrada', segment: 'Escritório de Relações Públicas', services: ['Estratégia', 'Website', 'Identidade Visual'] }}>
            A Abarca é um Escritório de Relações Públicas que funciona como Coletivo de Comunicação, formado por profissionais especialistas em suas áreas, que se reúne de acordo com as demandas de cada projeto.
            <br />
            <br />
            Para representar a experiência e comprometimento empregado pela Abarca em seus projetos uma nova linguagem visual foi elaborada. Pensamos, criamos, desenhamos e entendemos. A Abarca agora conta com novas formas, cores e fontes. Confira abaixo uma amostra desse trabalho.
          </Intro>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Timão.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'marca-var.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Instagram-Template.gif'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture style={{ background: '#001E62' }}>
            <Image loading="eager" quality="100" src={basePath + 'Pattern.gif'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Poster-Exhibition.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Display-Stand.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="75" src={basePath + 'Fabric-Print.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Basic-Office-Stationery.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Zoom Basic Office Stationery.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Open-Binder.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Mosaic Screens.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Mosaic Gravity.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Gravity-Devices.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Car.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Mosaic Book e Mug.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture>
            <Image loading="eager" quality="100" src={basePath + 'Logo.gif'} width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}
