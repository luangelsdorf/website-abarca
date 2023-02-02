import React from 'react';
import Head from 'next/head';
import Modal from 'src/components/common/Modal';
import Cover from 'src/components/portfolio/structures/Cover';
import Image from 'next/image';
import Intro from 'src/components/portfolio/structures/Intro';
import Picture from 'src/components/portfolio/structures/Picture';
import Section from 'src/components/common/Section';
import Text from 'src/components/portfolio/structures/Text';
import FullText from 'src/components/portfolio/structures/FullText';
import DoublePicture from 'src/components/portfolio/structures/DoublePicture';
import ProjectPresentation from 'src/components/portfolio/ProjectPresentation';
import PictureAndText from 'src/components/portfolio/structures/PictureAndText';
import ProjectFooter from 'src/components/portfolio/structures/ProjectFooter';
import Footer from 'src/components/layout/Footer';

export default function Structures() {
  return (
    <>
      <Head>
        <title>Structures</title>
      </Head>

      <ProjectPresentation>
        <Section>
          <Cover title="Nome do Projeto" local="Cidade | País" info={{ client: 'Nome do Cliente', segment: 'Segmento do Proejto', services: ['Website', 'Identidade Visual'] }}>
            <Image fill sizes="100vw" src="/images/portfolio/placeholder.png" alt="" />
          </Cover>
        </Section>

        <Section>
          <Intro info={{ client: 'Nome do Cliente', segment: 'Segmento do Proejto', services: ['Website', 'Identidade Visual'] }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Intro>
        </Section>

        <Section>
          <Picture>
            <Image src="/images/portfolio/placeholder.png" width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <Text>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.
          </Text>
        </Section>

        <Section>
          <Picture full>
            <Image src="/images/portfolio/placeholder.png" width="1400" height="800" alt="" />
          </Picture>
        </Section>

        <Section>
          <FullText title="Título da Seção e ou \nFrase em Destaque">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </FullText>
        </Section>

        <Section>
          <DoublePicture>
            <Image src="/images/portfolio/placeholder2.png" width="700" height="700" alt="" />
            <Image src="/images/portfolio/placeholder2.png" width="700" height="700" alt="" />
          </DoublePicture>
        </Section>

        <Section>
          <PictureAndText title="Título da Seção e ou \nFrase em Destaque">
            <Image src="/images/portfolio/placeholder2.png" width="700" height="700" alt="" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </PictureAndText>
        </Section>

        <Section>
          <PictureAndText flipped title="Título da Seção e ou \nFrase em Destaque">
            <Image src="/images/portfolio/placeholder2.png" width="700" height="700" alt="" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </PictureAndText>
        </Section>

        <Section>
          <Picture full noMargin>
            <Image src="/images/portfolio/placeholder.png" width="1400" height="800" alt="" />
          </Picture>
        </Section>
      </ProjectPresentation>

      <ProjectFooter />
      <Footer />
    </>
  )
}

Structures.floatingHeader = true;