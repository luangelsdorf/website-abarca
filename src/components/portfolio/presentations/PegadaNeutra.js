import Image from 'next/image';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Head from 'next/head';

export default function PegadaNeutra() {

  const basePath = '/images/portfolio/pegada-neutra/';

  return (
    <>
      <Head>
        <meta name="description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:image" content="https://brstorm.design/images/preview/Abarca.png" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="" local="Novo Hamburgo | Brasil" info={{ client: 'Pegada Neutra', segment: 'Compensação Ambiental', services: ['Website'] }}>
            <Image quality="100" loading="eager" src={basePath + 'Cover-Pegada-Neutra.jpg'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Pegada Neutra', segment: 'Compensação Ambiental', services: ['Website'] }}>
            A Pegada Neutra® acredita no desenvolvimento sustentável, no qual o crescimento econômico caminha junto com a justiça social e o equilíbrio ambiental. Oferecem soluções para empresas que buscam cumprir seu compromisso socioambiental de forma simples e eficiente.
            <br />
            <br />
            Fomos responsáveis por criar a identidade visual e o website da empresa. Essas iniciativas permitiram que a Pegada Neutra® fortalecesse sua presença online, resultando em maior reconhecimento da marca.
          </Intro>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Home-Pegada-Neutra_01.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Home-Pegada-Neutra_02.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin style={{ position: 'relative' }}>
            {/* <video src={basePath + 'Mobile-Pegada-Neutra.mp4'} autoPlay muted loop style={{position: 'absolute', top: '212px', right: '88px', width: '286px', height: '582px', borderRadius: '22px'}} /> */}
            <Image loading="eager" quality="100" src={basePath + 'Home-Pegada-Neutra_03.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Home-Pegada-Neutra_04.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture style={{ backgroundColor: '#18332F' }}>
            <video src={basePath + 'Loop-Pegada-Neutra.mp4'} autoPlay muted loop style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}
