import Image from 'next/image';
import Section from 'src/components/common/Section';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Head from 'next/head';

export default function RodrigoCarvalho() {

  const basePath = '/images/portfolio/rodrigo-carvalho/';

  return (
    <>
      <Head>
        <meta name="description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:description" content="O Instituto Arca é uma ONG de Proteção Animal localizada no Sul do Brasil. Ela atua insesantemente para resgatar, cuidar e proporcionar uma vida digna aos animais, isto tudo aliado ao trabalho de concientização da população sobre a causa animal." />
        <meta property="og:image" content="https://abarca.net.br/images/preview.jpg" />
      </Head>

      <Wrapper light>
        <Section>
          <Cover title="" local="Bristol | Inglaterra" info={{ client: 'Rodrigo Carvalho', segment: 'Barbearia', services: ['Website'] }}>
            <Image quality="100" loading="eager" src={basePath + 'Cover-Rodrigo-Carvalho.png'} width="1400" height="800" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Rodrigo Carvalho', segment: 'Barbearia', services: ['Website'] }}>
            A barbearia Rodrigo Carvalho é um local exclusivo situado em Bristol, Inglaterra, que se destaca por oferecer uma experiência completa de cuidados masculinos. Além dos serviços de qualidade, o ambiente é cuidadosamente projetado para proporcionar um momento de relaxamento e descontração, com mesas de sinuca e um bar bem abastecido.
            <br />
            <br />
            Neste projeto, fomos responsáveis por desenvolver o website da barbearia, cujo objetivo é apresentar os serviços oferecidos, os valores da empresa e proporcionar aos clientes a comodidade de agendar seus atendimentos online. O website serve como uma plataforma para promover nossas ofertas exclusivas e criar uma experiência de reserva perfeita para os clientes.
          </Intro>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Overview-Rodrigo-Carvalho_01.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="100" src={basePath + 'Overview-Rodrigo-Carvalho_02.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}
