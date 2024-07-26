import CategoryList from '../components/CategoryList';
import ItemList from '../components/ItemsList';
import Search from '../components/Search';

function Home() {
  return (
    <main>
      <section>
        <h3>Categorias</h3>
        <CategoryList />
      </section>
      <Search />
      <div>
        <ItemList />
      </div>
    </main>
  );
}

export default Home;
