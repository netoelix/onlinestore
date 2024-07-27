function Category({ categories, onCategoryClick }: any) {
  return (
    <div className="categories">
      {categories.map((category: any) => (
        <button
          key={ category.id }
          onClick={ () => onCategoryClick(category.id) }
          className="category-button"
        >
          <p>
            {category.name}
          </p>
        </button>
      ))}
    </div>
  );
}

export default Category;
