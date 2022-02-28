import Banner from '../src/component/Banner';
import Concept from '../src/component/Concept';
import Layout from '../src/component/Layout';
import Menu from '../src/data/menu.json';


const Home = ({headerMenu}) => {

  return (
      <Layout headerMenu={headerMenu}>
          <Banner></Banner>
          <Concept></Concept>
      </Layout>
  );

};

export async function getStaticProps(context) {
    return {
      props: {
        headerMenu : await Menu,
      }
    }
  }

export default Home;
