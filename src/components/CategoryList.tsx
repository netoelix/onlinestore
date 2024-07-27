function Category({ categories, onCategoryClick }: any) {
  return (
    <div>
      {categories.map((category: any) => (
        <button key={ category.id } onClick={ () => onCategoryClick(category.id) }>
          <p>
            {category.name}
          </p>
        </button>
      ))}
    </div>
  );
}

export default Category;
