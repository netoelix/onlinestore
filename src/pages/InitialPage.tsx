import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaMobileAlt, FaGamepad, FaHome, FaBook } from 'react-icons/fa';
import { MdKitchen } from 'react-icons/md';
import { setCategoryId } from '../redux/actions/saveCategoryAction';
import Category from '../components/CategoryList';
import { StyledInitialPage } from '../styles/StyledInitialPage';

const categories = [
  { id: 'MLB1051', name: 'Celulares e Telefones', icon: <FaMobileAlt /> },
  { id: 'MLB1144', name: 'Games', icon: <FaGamepad /> },
  { id: 'MLB5726', name: 'Eletrodomésticos', icon: <MdKitchen /> },
  { id: 'MLB1574', name: 'Casa, Móveis e Decoração', icon: <FaHome /> },
  { id: 'MLB1196', name: 'Livros, Revistas e Comics', icon: <FaBook /> },
];

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryId: string) => {
    dispatch(setCategoryId(categoryId));
    navigate(`/${categoryId}`);
  };

  return (
    <StyledInitialPage>
      <Category categories={ categories } onCategoryClick={ handleCategoryClick } />
    </StyledInitialPage>
  );
}

export default Home;
