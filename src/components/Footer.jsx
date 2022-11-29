export default function Footer() {
  const categories = ["Main", "About", "Contact", "Copyright 2022"];
  const listCategories = categories.map((category) => <li>{category}</li>);

  return (
    <>
      <div className="footer">
          <li>{listCategories}</li>
      </div>
    </>
  );
}
