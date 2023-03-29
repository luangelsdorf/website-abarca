import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import DoublePicture from 'src/components/portfolio/structures/DoublePicture';
import FullText from 'src/components/portfolio/structures/FullText';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import PictureAndText from 'src/components/portfolio/structures/PictureAndText';
import Text from 'src/components/portfolio/structures/Text';
import Section from 'src/components/common/Section';
import Image from 'next/image';
import Head from 'next/head';

export default function MapTrack() {

  const basePath = '/images/portfolio/maptrack/';

  return (
    <>
      <Head>
        <meta name="description" content="MapTrack é uma startup que oferece serviços de rastreamento de ativos através de um software simples e poderoso." />
        <meta property="og:description" content="MapTrack é uma startup que oferece serviços de rastreamento de ativos através de um software simples e poderoso." />
        <meta property="og:image" content="/images/portfolio/preview/Maptrack.jpg" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="Maptrack" local="Brisbane | Austrália" info={{ client: 'Maptrack', segment: 'Startup de Rastreamento', services: ['Identidade Visual'] }}>
            <Image loading="eager" quality="100" src={basePath + 'Cover.jpg'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Maptrack', segment: 'Startup de Rastreamento', services: ['Identidade Visual'] }}>
            MapTrack é uma startup que oferece serviços de rastreamento de ativos através de um software simples e poderoso. Ela atua em toda a Austrália e seu público-alvo é composto por grandes empresas do setor de construção, logística e de outras diversas áreas.
            <br />
            <br />
            O desafio do projeto foi criar uma marca forte que transmitisse confiança e respeito, conciliando isso com um visual simples e moderno, confira o resultado.
          </Intro>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="100" src={basePath + 'Sketches.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <FullText title="Nossas Insipirações \ne Decisões Criativas">
            Para esses propósitos, vários elementos serviram de inspiração para o projeto. Entre as referências estão as formas geométricas que dão uma aparência sólida e robusta à marca, os marcadores de mapa que são um ícone de ampla associação com o serviço de rastreamento e as tipografias mais espessas que dão melhor legibilidade e maior destaque à marca em relação aos concorrentes.
          </FullText>
        </Section>

        <Section pb="240 80">
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Moodboard.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section pb="240 80">
          <PictureAndText title="Construção do Símbolo">
            <Image loading="eager" quality="100" src={basePath + 'Sketches-Close.jpg'} width="1400" height="800" alt="" />
            Para a construção do novo símbolo o conceito preexistente foi mantido, no entanto, ao invés de o marcador estar sobre o mapa da Australia, agora ele foi posicionado acima da palavra “Map” (Mapa) que compõe a primeira metade do nome.
            <br />
            <br />
            O novo símbolo é formado utilizando o espaço negativo da letra &rdquo;M&rdquo; e a silhueta do topo do marcador de mapa.
          </PictureAndText>
        </Section>

        <Section>
          <Picture>
            <Image loading="eager" quality="100" src={basePath + 'Concept.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section pb="240 80">
          <Text>
            Os conceitos da Gestalt pressupõem que nós, por natureza, buscamos sempre uma ordem em tudo: sempre que vemos uma imagem, enxergamos o todo, só depois vemos os pedaços que a compõe.
          </Text>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Colors.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <video src={basePath + 'Grid Animation.mp4'} muted autoPlay loop style={{ width: '100%', height: '100%' }} />
          </Picture>
        </Section>

        <Section>
          <DoublePicture>
            <Image loading="eager" quality="100" src={basePath + 'Phone.jpg'} width="1400" height="800" alt="" />
            <Image loading="eager" quality="100" src={basePath + 'Icon.jpg'} width="1400" height="800" alt="" />
          </DoublePicture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Flag.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Logo.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture>
            <Image loading="eager" quality="100" src={basePath + 'T-Shirt.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="100" src={basePath + 'Stationery.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <DoublePicture>
            <Image loading="eager" quality="100" src={basePath + 'Stationery Close 2.jpg'} width="1400" height="800" alt="" />
            <Image loading="eager" quality="100" src={basePath + 'Stationery Close 1.jpg'} width="1400" height="800" alt="" />
          </DoublePicture>
        </Section>

        <Section>
          <Picture>
            <Image loading="eager" quality="100" src={basePath + 'Mugs.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}