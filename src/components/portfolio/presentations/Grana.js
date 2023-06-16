import Image from 'next/image';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Head from 'next/head';

export default function Grana() {

  const basePath = '/images/portfolio/grana/';

  return (
    <>
      <Head>
        <meta name="description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:image" content="https://abarca.net.br/images/preview.jpg" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="" local="Rio de Janeiro | Brasil" info={{ client: 'Grana Capital', segment: 'Fintech', services: ['Website'] }}>
            <Image quality="100" loading="eager" src={basePath + 'Cover-Grana.jpg'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Grana Capital', segment: 'Fintech', services: ['Website'] }}>
            O Grana Capital é uma startup fintech especializada no cálculo de Imposto de Renda para investimentos realizados na bolsa de valores.
            <br />
            <br />
            No projeto, fomos responsáveis por desenvolver o blog da empresa e realizar ajustes no website principal. Através dessas melhorias, visamos proporcionar uma experiência mais eficiente e intuitiva aos usuários, além de fornecer conteúdo relevante e informativo.
          </Intro>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Floating-Grana.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}
