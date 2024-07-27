import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/actions/saveCategoryAction';
import Category from '../components/CategoryList';
import { StyledHome } from '../styles/StyledHome';

const categories = [
  { id: 'MLB1051', name: 'Celulares e Telefones' },
  { id: 'MLB1144', name: 'Games' },
  { id: 'MLB5726', name: 'Eletrodomésticos' },
  { id: 'MLB1574', name: 'Casa, Móveis e Decoração' },
  { id: 'MLB1196', name: 'Livros, Revistas e Comics' },
];

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryId: string) => {
    dispatch(setCategoryId(categoryId));
    navigate(`/${categoryId}`);
  };

  return (
    <StyledHome>
      <Category categories={ categories } onCategoryClick={ handleCategoryClick } />
    </StyledHome>
  );
}

export default Home;
