import "./App.css";
import CategoryList from "./CategoryList/category-list";
import Header from "./Header/header";

function App() {
  return <div className="bg-faded-dark wrapper">
    <Header></Header>
    <CategoryList/>
  </div>;
}

export default App;
