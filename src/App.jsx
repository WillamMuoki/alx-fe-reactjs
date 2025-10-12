 import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        React Form Handling
      </h1>
      <RegistrationForm />
      <hr className="my-10" />
      <FormikForm />
    </div>
  );
}

export default App;
