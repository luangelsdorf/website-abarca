import React from 'react';
import Wrapper from 'src/components/portfolio/structures/Wrapper';
import Section from 'src/components/common/Section';
import Cover from 'src/components/portfolio/structures/Cover';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import FullText from 'src/components/portfolio/structures/FullText';
import Text from 'src/components/portfolio/structures/Text';
import Image from 'next/image';
import PictureAndText from 'src/components/portfolio/structures/PictureAndText';
import Head from 'next/head';

export default function Bronzo() {

  const basePath = '/images/portfolio/bronzo/';

  return (
    <>
      <Head>
        <meta name="description" content="A Bronzo é um restaurante italiano localizado no coração de Londres. Um local que oferece um ambiente aconchegante para quem deseja saborear a autêntica comida italiana." />
        <meta property="og:description" content="A Bronzo é um restaurante italiano localizado no coração de Londres. Um local que oferece um ambiente aconchegante para quem deseja saborear a autêntica comida italiana." />
        <meta property="og:image" content="https://brstorm.design/images/portfolio/preview/Bronzo.png" />
      </Head>

      <Wrapper>
        <Section>
          <Cover title="Bronzo" local="Londres | Inglaterra" info={{ client: 'Bronzo', segment: 'Restaurante Italiano', services: ['Estratégia', 'Identidade Visual', 'Website'] }}>
            <video src={basePath + 'Cover.mp4'} autoPlay muted loop />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Bronzo', segment: 'Restaurante Italiano', services: ['Estratégia', 'Identidade Visual', 'Website'] }}>
            A Bronzo é um restaurante italiano localizado no coração de Londres. Um local que oferece um ambiente aconchegante para quem deseja saborear a autêntica comida italiana.
            <br />
            <br />
            Essa experiência gastronômica se estende até o lar de seus clientes por meio da venda kits de pasta que proporcionam uma refeição completa sem a necessidade de um vasto domínio culinário.
            <br />
            <br />
            Nesse projeto tivemos acesso a uma imensidão de detalhes, memórias e tradições as quais nortearam nossas decisões criativas e serviram de grande inspiração. Conheça um pedaço dessa história.
          </Intro>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Pasta Trafilata al Bronzo Photo.jpeg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <FullText title="Pesquisa, Estratégia, \nPlanejamento e Imersão">
            O conceito de marca vai muito além da sua representação gráfica. Marca é uma forma de identificar e distinguir algo, é a maneira com que você apresenta a sua ideia ao mundo.
            <br />
            <br />
            Para organizar as infindáveis informações coletadas nas pesquisas conduzidas nas primeiras etapas do projeto, diversas ferramentas criativas foram aplicadas e um grande mural foi criado para reunir todos os dados.
          </FullText>
        </Section>

        <Section>
          <Picture>
            <Image loading="eager" quality="75" src={basePath + 'Research.gif'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        {/* <Section>
          <Text>
            Com base nos resultados que obtivemos empregamos uma série de técnicas de análise que auxiliaram na extração das principais diretrizes e características do projeto. A execução criteriosa deste passo foi imprescindível para guiar as etapas de design posteriores.
          </Text>
        </Section> */}

        {/* <Section>
          <DoublePicture>
            <Image loading="eager" quality="75" src={basePath + 'Briefing.png'} width="1400" height="800" alt="" />
            <Image loading="eager" quality="75" src={basePath + 'Analysis.png'} width="1400" height="800" alt="" />
          </DoublePicture>
        </Section> */}

        {/* <Section>
          <PictureAndText title="Tradição e Força" flipped>
            <Image loading="eager" quality="75" src={basePath + 'History.jpg'} width="1400" height="800" alt="" />
            Entender o significado das coisa é primordial para criar algo que se destaque. As palavras têm poder e carregam consigo a história do mundo. Sabendo disso buscamos compreender o que é a “Bronzo” (do italiano, Bronze).
            <br />
            <br />
            O Bronze detém um papel de grande destaque na nossa história, tamanha sua importância que seu surgimento é um marco que delimita o início de uma nova era na humanidade, a Idade do Bronze.
            <br />
            <br />
            Há milênios ferramentas são confeccionadas com ele. Este forte material dá nome ao negócio, pois faz parte do principal ambiente do restaurante, a cozinha. Dele é feita a Trafila, peça utilizada para dar forma as massas.
          </PictureAndText>
        </Section> */}

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Moodboard.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        {/* <Section pb="120">
          <PictureAndText title="Pintadera Sardegna">
            <Image loading="eager" quality="75" src={basePath + 'Pintadera.jpg'} width="1400" height="800" alt="" />
            Um símbolo relacionado com a origem dos proprietários do restaurante, que vieram da Ilha da Sardenha na Itália.
            <br />
            <br />
            O termo Pintadera refere-se a pequenos artefatos de terracota, decorados com desenhos geométricos. Sua figura remonta a tempos antigos, onde era utilizada para marcar os alimentos, abençoá-los e afastar as energias negativas.
            <br />
            <br />
            Um artefato típico de culturas pré-históricas como a civilização Nurágica, povo que habitou a Ilha da Sardenha no final da Idade do Bronze.
          </PictureAndText>
        </Section> */}

        <Section pb="120">
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Sketch.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <PictureAndText title="Criação do Símbolo">
            <Image loading="eager" quality="75" src={basePath + 'Conception.jpg'} width="1400" height="800" alt="" />
            Inspirado pelas formas e estampas da Pintadera Sardegna, o símbolo foi desenvolvido visando representar o cerne da Bronzo. Com uma estética minimalista e forte, o desenho reúne de maneira simples e clara diversos atributos explícitos e implícitos no seu conceito e forma.
            <br />
            <br />
            Referenciando a união, a positividade, a harmonia entre outras características que não só estão presentes na história da Bronzo, mas também no que a cultura e comida Italiana podem proporcionar.
          </PictureAndText>
        </Section>

        <Section>
          <Picture full noMargin>
            <video src={basePath + 'type-animation.mp4'} muted autoPlay loop style={{ height: '100%', width: '100%' }} />
          </Picture>
        </Section>

        <Section>
          <Text>
            A tipografia desenhada para o projeto com seu estilo singular, moderno e arrojado, cria um ótimo contraste com as referências históricas que constituem o símbolo, resultando assim em uma ótima combinação.
          </Text>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Color Scheme.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <FullText title="Acordo Cromático">
            Um esquema de cores bem elaborado transmite ideias, sensações e até emoções através da sua composição. Para as cores primárias reunimos a vibração do bronze, com a força do preto e o brilho e contraste do branco, criando assim uma combinação harmônica e bela.
            <br />
            <br />
            Também foi desenvolvida uma composição secundária para agregar mais versatilidade a marca. Essas cores permitem segmentar os produtos, facilitando a experiência do consumidor.
          </FullText>
        </Section>

        {/* <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Secundary-Colors.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section> */}

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="75" src={basePath + 'Brand Vertical.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="75" src={basePath + 'Seal and Stamp.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Mosaic.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="75" src={basePath + 'Brand with Tagline.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture>
            <Image loading="eager" quality="75" src={basePath + 'Sign.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Kraft Paper.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="75" src={basePath + 'Packing.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Box.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture>
            <Image loading="eager" quality="75" src={basePath + 'Stickers.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Wooden Stamp.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Bag.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Billboard.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="75" src={basePath + 'Bike-Outdoor.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="75" src={basePath + 'Instagram.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="75" src={basePath + 'Posts.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Stories.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full>
            <Image loading="eager" quality="75" src={basePath + 'Website.png'} width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image loading="eager" quality="75" src={basePath + 'Apron.jpg'} width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </Wrapper>
    </>
  )
}