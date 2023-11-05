import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentation juridique',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Juridict.io a été concu pour être une base de connaissances juridiques pour les étudiants en droit belge.
        
      </>
    ),
  },
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       L'arborescence permet de facilement naviguer dans les domaines juridiques.
      </>
    ),
  },
  {
    title: 'Contribuer à la rédaction',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Il sera prochainement possible de proposer vos contributions. 
        Nous aurons besoin de vous ! Cela sera précieux. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
