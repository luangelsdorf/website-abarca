import Image from 'next/image';
import React from 'react';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import FullText from 'src/components/portfolio/structures/FullText';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Text from 'src/components/portfolio/structures/Text';
import Head from 'next/head';

export default function Casulo() {

  const basePath = '/images/portfolio/casulo/';

  return (
    <>
      <Head>
        <meta name="description" content="A Casulo é um centro de treinamento canino que recentemente passou por um momento de reestruturação geral, onde não só sua estrutura física foi ampliada, mas também toda sua cultura e metodologia de trabalho foi revista." />
        <meta property="og:description" content="A Casulo é um centro de treinamento canino que recentemente passou por um momento de reestruturação geral, onde não só sua estrutura física foi ampliada, mas também toda sua cultura e metodologia de trabalho foi revista." />
        <meta property="og:image" content="https://brstorm.design/images/preview/Casulo.jpg" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="Casulo" local="Araricá | Brazil" info={{ client: 'WalerDog', segment: 'Treinamento Canino', services: ['Identidade Visual'] }}>
            <Image quality="100" loading="eager" src={basePath + 'Cover.jpg'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'WalerDog', segment: 'Treinamento Canino', services: ['Identidade Visual'] }}>
            A Casulo (anteriormente WalkerDog) é um centro de treinamento canino que recentemente passou por um momento de reestruturação geral, onde não só sua estrutura física foi ampliada, mas também toda sua cultura e metodologia de trabalho foi revista.
            <br />
            <br />
            Este projeto visa representar esse momento de transformação e dar suporte às novas perspectivas e rumos do negócio.
          </Intro>
        </Section>

        <Section>
          <Picture full>
            <Image quality="100" loading="eager" src={basePath + 'Photography.jpeg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Text>
            A Casulo nasceu do anseio por conscientizar as pessoas e transformar sua relação com os animais e nossa nova marca busca refletir essa desejo por mudanças. Ao longo do projeto nos inspiramos no movimento, na conexão, na energia e na alegria compartilhada pelos animais. Veja o resultado:
          </Text>
        </Section>

        <Section>
          <Picture full>
            <Image quality="100" loading="eager" src={basePath + 'Photos.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <FullText title="Compreendemos a \nBeleza do Processo">
            Presentes em elementos da natureza, como as fases de desenvolvimento do casulo de uma borboleta, as cores da Casulo reforçam o conceito do nome e agregam um aspecto orgânico à identidade.
          </FullText>
        </Section>

        <Section>
          <Picture full>
            <Image quality="100" loading="eager" src={basePath + 'Colors.gif'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Text>
            Os tons de verde além de servirem como base para paleta de cores, auxiliam a marca a transmitir uma sensação geral de calma, serenidade, renovação e conhecimento. Já o laranja é frequentemente associado a sentimentos de positividade, confiança e felicidade. E por fim, como cores de suporte temos os tons de amarelo, que podem ser utilizados para transmitir frescor, renovação e renascimento.
          </Text>
        </Section>

        <Section>
          <Picture full>
            <Image quality="100" loading="eager" src={basePath + 'Color Pallete.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image quality="100" loading="eager" src={basePath + 'Type.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Text>
            A tipografia da Casulo é uma metamorfose entre o estilo simples e moderno e formas orgânicas. Os seus detalhes remetem a pequenos casulos, essas curvas também representam o elo entre os tutores e seus pets.
          </Text>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image quality="100" loading="eager" src={basePath + 'Logo-Colored.gif'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image quality="100" loading="eager" src={basePath + 'Logo-Colored.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture>
            <video src={basePath + 'Seal.mp4'} autoPlay muted loop style={{ width: '100%', height: '100%' }} />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image quality="100" loading="eager" src={basePath + 'Seal.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section pb="240">
          <Picture full noMargin>
            <Image quality="100" loading="eager" src={basePath + 'Vertical-Horizontal.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <video src={basePath + 'Pattern.mp4'} autoPlay muted loop style={{ width: '100%', height: '100%' }} />
          </Picture>
        </Section>

        <Section>
          <Text>
            As curvas da marca são um elemento comum compartilhado tanto pelo símbolo, quanto pela tipografia e sua utilização isolada nas peças gráficas da Casulo fortalece a identidade do negócio.
          </Text>
        </Section>

        <Section>
          <Picture>
            <Image quality="100" loading="eager" src={basePath + 'Photo-Pattern.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image quality="100" loading="eager" src={basePath + 'Stories-Banner.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture>
            <Image quality="100" loading="eager" src={basePath + 'Business-Card-Mockup.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image quality="100" loading="eager" src={basePath + 'Logo-Photo.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image quality="100" loading="eager" src={basePath + 'Billboard-Mockup.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image quality="100" loading="eager" src={basePath + 'Before-After.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}