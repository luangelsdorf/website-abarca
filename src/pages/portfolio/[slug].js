import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from 'src/components/layout/Footer';
import ProjectPresentation from 'src/components/portfolio/ProjectPresentation';
import ProjectFooter from 'src/components/portfolio/structures/ProjectFooter';
import brandProjects from 'src/data/portfolio.json';

export default function Project(props) {
  const title = `${props.name} | Abarca`;
  const router = useRouter();

  useEffect(() => { document.querySelector('[data-navigation]').style.display = 'none' }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`https://brand.brstorm.design${router.asPath}`} />
      </Head>

      <ProjectPresentation project={props} />
      {/* <ProjectFooter /> */}
      {/* <Footer /> */}
    </>
  )
}

Project.floatingHeader = true;

export async function getStaticPaths() {
  const paths = brandProjects.brand.map(project => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = brandProjects.brand.find(project => project.slug === params.slug);

  return {
    props: project,
  }
}