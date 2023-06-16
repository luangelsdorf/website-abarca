import Image from 'next/image';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Head from 'next/head';

export default function RossiDorneles() {

  const basePath = '/images/portfolio/rossi-dorneles/';

  return (
    <>
      <Head>
        <meta name="description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:image" content="https://brstorm.design/images/preview/Abarca.png" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="" local="Canoas | Brasil" info={{ client: 'Rossi & Dorneles', segment: 'Escritório de Advocacia', services: ['Website'] }}>
            <Image quality="100" loading="eager" src={basePath + 'Cover-RD.jpg'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Rossi & Dorneles', segment: 'Escritório de Advocacia', services: ['Website'] }}>
            O escritório Rossi & Dorneles foi fundado com base na afinidade das sócias com a área jurídica, na qual acumularam experiência ao longo de 20 anos de trabalho em escritórios renomados e no Judiciário.
            <br />
            <br />
            Criamos o website do escritório, além de desenvolver landing pages para cada um dos serviços oferecidos.Os resultados incluíram um aumento significativo na visibilidade da empresa, bem como uma maior geração de leads e conversões.
          </Intro>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Home-RD.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}
