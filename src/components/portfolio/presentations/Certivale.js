import Image from 'next/image';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Head from 'next/head';

export default function Certivale() {

  const basePath = '/images/portfolio/certivale/';

  return (
    <>
      <Head>
        <meta name="description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:image" content="https://abarca.net.br/images/preview.jpg" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="" local="São Leopoldo | Brasil" info={{ client: 'Certivale', segment: 'Certificação Digital', services: ['Website'] }}>
            <Image quality="100" loading="eager" src={basePath + 'Certivale.jpg'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Certivale', segment: 'Certificação Digital', services: ['Website'] }}>
            A Certivale é uma renomada Autoridade de Registro (AR) credenciada para emitir certificados digitais padrão ICP Brasil, como e-CNPJ e e-CPF. Com filiais nas principais cidades do Sul do Brasil, a empresa é reconhecida por seu padrão de excelência em todos os seus serviços.
            <br />
            <br />
            No projeto da Certivale, fomos responsáveis por trabalhar em sua estratégia de marca, desenvolver o website e criar uma identidade visual consistente. Por meio dessas iniciativas, buscamos fortalecer a presença online da Certivale e transmitir sua credibilidade e profissionalismo aos clientes.
          </Intro>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Overview-Certivale_01.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Overview-Certivale_02.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}
