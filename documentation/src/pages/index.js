import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProjectReadme from "../components/ReademeMD";
import styles from './index.module.css';
import MDXContent from '@theme/MDXContent';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
            {/* TODO: Change me to your project's tutorial*/ }
          <Link
            className="button button--secondary button--lg"
            to="http://sharemytoolshed.com:5000/">
            Visit Toolshed 🔧🏠
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
        title={`Tool Shed's Docusaurus`}
        description="Docusarususususssssuuusss, it's really tough to spell on the first try">
        <HomepageHeader/>
        <main>
            <MDXContent>
                <ProjectReadme/>
            </MDXContent>
        </main>
    </Layout>
  );
}
