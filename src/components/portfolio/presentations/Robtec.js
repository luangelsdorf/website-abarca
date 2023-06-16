import Image from 'next/image';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Head from 'next/head';

export default function Robtec() {

  const basePath = '/images/portfolio/robtec/';

  return (
    <>
      <Head>
        <meta name="description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:image" content="https://brstorm.design/images/preview/Abarca.png" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="" local="São Paulo | Brasil" info={{ client: 'Robtec', segment: 'Segurança', services: ['Website'] }}>
            <Image quality="100" loading="eager" src={basePath + 'Cover-Robtec.jpg'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Robtec', segment: 'Segurança', services: ['Website'] }}>
            A RobTec atua no mercado de integração de sistemas para radiocomunicação profissional, com quase 30 anos de experiência. Ao longo desse período, a empresa tem se destacado por fornecer soluções abrangentes de voz, dados, imagens, segurança eletrônica, infraestrutura e sinalização áudio visual para grandes empresas e governos em todo o Brasil.
            <br />
            <br />
            No projeto em questão, fomos responsáveis por desenvolver o website da empresa, cujo objetivo é apresentar de forma clara e atraente os produtos e serviços oferecidos pela RobTec.
          </Intro>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Overview-Robtec.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}
