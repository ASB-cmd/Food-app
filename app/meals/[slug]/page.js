export default function MealsMenu({ params }) { 
  return (
    <div>
      <h1>Meals Menu</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}