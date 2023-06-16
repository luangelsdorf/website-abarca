import Image from 'next/image';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Head from 'next/head';

export default function BRC() {

  const basePath = '/images/portfolio/brc/';

  return (
    <>
      <Head>
        <meta name="description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:image" content="https://abarca.net.br/images/preview.jpg" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="" local="São Paulo | Brasil" info={{ client: 'Bueno Rios & Consentino', segment: 'Escritório de Advocacia', services: ['Website'] }}>
            <Image quality="100" loading="eager" src={basePath + 'Cover-BRC.jpg'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Bueno Rios & Consentino', segment: 'Escritório de Advocacia', services: ['Website'] }}>
            O escritório Bueno Rios & Consentino Advogados é uma empresa renomada localizada em São Paulo. Com advogados altamente capacitados e vasta experiência, oferecem soluções jurídicas personalizadas para atender aos interesses dos clientes.
            <br />
            <br />
            Como parte do projeto, criamos a identidade visual e o website multi-idiomas, fortalecendo a presença online da empresa e proporcionando uma experiência profissional aos visitantes.
          </Intro>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Overview-BRC_01.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Overview-BRC_02.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Services-BRC_01.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Services-BRC_02.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}
