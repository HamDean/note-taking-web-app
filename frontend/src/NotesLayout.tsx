import { useParams } from "react-router";
import Header from "./components/Header";

const NotesLayout = () => {
  const { page } = useParams();
  return (
    <div className="w-full">
      <Header page={page} />
    </div>
  );
};
export default NotesLayout;
