import Image from 'next/image';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Head from 'next/head';

export default function NefroSinos() {

  const basePath = '/images/portfolio/nefrosinos/';

  return (
    <>
      <Head>
        <meta name="description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:image" content="https://brstorm.design/images/portfolio/preview/Abarca.png" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="" local="Novo Hamburgo | Brasil" info={{ client: 'NefroSinos', segment: 'Clinica de Nefrologia', services: ['Website'] }}>
          <Image quality="100" loading="eager" src={basePath + 'Cover-Nefrosinos.jpg'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'NefroSinos', segment: 'Clinica de Nefrologia', services: ['Website'] }}>
            O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal.
            <br />
            <br />
            Neste projeto desenvolvemos um website intuitivo para divulgar animais disponíveis para adoção e informações sobre o Instituto.
          </Intro>
        </Section>

        <Section pt="96" style={{backgroundColor: '#DCE0E7'}}>
          <Picture style={{backgroundColor: '#DCE0E7'}}>
            <video src={basePath + 'Loop-Nefrosinos.mp4'} autoPlay muted loop style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}
