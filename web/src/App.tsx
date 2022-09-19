//components / propriedades
interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <>
      <Button title= "encaminhar" />
      <Button title= "receber" />
      <Button title= "enviar" />
      <Button title= "hello word" />
    </>
  )

}

export default App
