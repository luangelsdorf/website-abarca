import Image from 'next/image';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Head from 'next/head';

export default function Util() {

  const basePath = '/images/portfolio/util/';

  return (
    <>
      <Head>
        <meta name="description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:image" content="https://abarca.net.br/images/preview.jpg" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="" local="Rio de Janeiro | Brasil" info={{ client: 'Útil (Agência Asas)', segment: 'Facilities', services: ['Website'] }}>
            <Image quality="100" loading="eager" src={basePath + 'Cover-Util-Facilities.jpg'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Útil (Agência Asas)', segment: 'Facilities', services: ['Website'] }}>
            A Útil Facilities é uma empresa especializada em serviços de facilities, oferecendo soluções abrangentes para o gerenciamento e operação de infraestruturas e serviços em ambientes corporativos. Com uma equipe altamente capacitada e experiente está comprometida em fornecer soluções eficientes para os seus clientes.
            <br />
            <br />
            Desenvolvemos o website da empresa, adotando uma abordagem onepage para oferecer uma experiência intuitiva aos visitantes. A parceria resultou em maior visibilidade e sucesso para a Útil Facilities no mercado.
          </Intro>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Overview-Util-Facilities_01.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Overview-Util-Facilities_02.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture style={{ backgroundColor: '#002F5D' }}>
            <video src={basePath + 'Loop-Util-Facilities.mp4'} autoPlay muted loop style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}
