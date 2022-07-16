import InputField from "./InputField";

function InputForm({
  onSubmitHandler,
  onChangeHandler,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <form onSubmit={onSubmitHandler}>
      <InputField
        searchQuery={searchQuery}
        onChangeHandler={onChangeHandler}
        setSearchQuery={setSearchQuery}
      />
    </form>
  );
}

export default InputForm;
